import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { vazirFontBase64 } from "../src/lib/vazirFontBase64.js"; // مسیر رو با پروژه‌ت تنظیم کن

export default function DataTable({ columnName, setnameCol, data }) {
  const columns = (columnName || []).map((item) => ({
    accessorKey: item.key,
    header: item.label,
  }));

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  function exportToPdf(columnName, data) {
    const doc = new jsPDF();

    // معرفی فونت به jsPDF
    doc.addFileToVFS("Vazirmatn-Regular.ttf", vazirFontBase64);
    doc.addFont("Vazirmatn-Regular.ttf", "Vazirmatn", "normal");
    doc.setFont("Vazirmatn");

    const headers = columnName.map((c) => c.label);
    const rows = data.map((row) => columnName.map((c) => row[c.key] ?? ""));

    autoTable(doc, {
      head: [headers],
      body: rows,
      styles: { font: "Vazirmatn" }, // مهم: باید به خود جدول هم بگیم از این فونت استفاده کنه
    });

    doc.save("data.pdf");
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <button
        onClick={() => exportToPdf(columnName, data)}
        type="button"
        className="mb-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        دانلود PDF
      </button>
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left font-semibold text-slate-600 whitespace-nowrap"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="divide-y divide-slate-100 bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50 transition">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-3 text-slate-700 whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
