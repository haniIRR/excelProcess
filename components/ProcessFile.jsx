import { useState } from "react";
import * as XLSX from "xlsx";
import SheetColumn from "../components/SheetColumn";
import DataGrid from "./DataTable";
export default function ProcessFile({
  setSheetData,
  sheetData,
  setnameCol,
  nameCol,
  handleStep,
}) {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Configure Columns
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          مشخص کنید هر ستون چگونه در جدول نمایش داده شود.
        </p>
      </div>

      {/* Column list */}
      {sheetData[0] && (
        <SheetColumn
          nameCol={nameCol}
          setnameCol={setnameCol}
          data={sheetData[0]}
          setSheetData={setSheetData}
          sheetData={sheetData}
        />
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
        {/* <span className="text-sm text-slate-400">
          {columns.filter((column) => column.visible).length} of{" "}
          {columns.length} columns visible
        </span> */}

        <button
          onClick={() => handleStep(3)}
          type="button"
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
