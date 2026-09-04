import { useState } from "react";
export default function ProcessFile({ sheetData }) {
  const [columns, setColumns] = useState([
    {
      id: 1,
      excelName: "Name",
      displayName: "نام",
      type: "text",
      visible: true,
    },
    {
      id: 2,
      excelName: "NationalCode",
      displayName: "کد ملی",
      type: "number",
      visible: true,
    },
    {
      id: 3,
      excelName: "PhoneNumber",
      displayName: "شماره تماس",
      type: "phone",
      visible: true,
    },
    {
      id: 4,
      excelName: "BirthDate",
      displayName: "تاریخ تولد",
      type: "date",
      visible: true,
    },
  ]);

  const updateColumn = (id, field, value) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === id ? { ...column, [field]: value } : column
      )
    );
  };

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
      <div className="space-y-4">
        {columns.map((column, index) => (
          <div
            key={column.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
              {/* Number + Excel name */}
              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-medium text-slate-500">
                  Excel Column
                </label>

                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-xs font-semibold text-slate-600">
                    {index + 1}
                  </span>

                  <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {column.excelName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Display name */}
              <div className="md:col-span-4">
                <label className="mb-2 block text-xs font-medium text-slate-500">
                  Display Name
                </label>

                <input
                  type="text"
                  value={column.displayName}
                  onChange={(e) =>
                    updateColumn(column.id, "displayName", e.target.value)
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="نام نمایشی ستون"
                />
              </div>

              {/* Type */}
              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-medium text-slate-500">
                  Data Type
                </label>

                <select
                  value={column.type}
                  onChange={(e) =>
                    updateColumn(column.id, "type", e.target.value)
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                  <option value="boolean">Boolean</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>
              </div>

              {/* Visible */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-medium text-slate-500">
                  Visibility
                </label>

                <button
                  type="button"
                  onClick={() =>
                    updateColumn(column.id, "visible", !column.visible)
                  }
                  className={`flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                    column.visible
                      ? "border-green-200 bg-green-50 text-green-600"
                      : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      column.visible ? "bg-green-500" : "bg-slate-300"
                    }`}
                  />

                  {column.visible ? "Visible" : "Hidden"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
        <span className="text-sm text-slate-400">
          {columns.filter((column) => column.visible).length} of{" "}
          {columns.length} columns visible
        </span>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
