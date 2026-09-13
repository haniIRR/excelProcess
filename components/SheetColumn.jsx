import { useEffect, useState } from "react";

export default function SheetColumn({
  data,
  setnameCol,
  nameCol,
  sheetData,
  setSheetData,
}) {
  const [column, setColumn] = useState(
    Object.keys(data).map((a) => {
      const cleaned = a.replace(/\r?\n/g, " ").trim();
      return { key: a, label: cleaned };
    })
  );

  function updateColumn(value, index) {
    setColumn((p) => {
      return p.map((item, i) => {
        if (i == index) {
          return { ...item, label: value };
        } else {
          return item;
        }
      });
    });
  }

  function DeleteCol(index) {
    setColumn((p) => {
      return p.filter((item, i) => i != index);
    });
  }

  useEffect(() => {
    setnameCol(column);
  }, [column]);

  return (
    <div className="w-full space-y-4">
      {column.map((item, index) => {
        return (
          <div
            key={item.key}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm">
                  {index + 1}
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    Excel Column
                  </p>

                  <p className="mt-0.5 max-w-[300px] truncate text-sm font-semibold text-slate-800">
                    {item.key}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                Column {index + 1}
              </span>
            </div>

            {/* Settings */}
            <div className="p-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end">
                {/* Excel Name */}
                <div className="md:col-span-4">
                  <label className="mb-2 block text-xs font-semibold text-slate-600">
                    Excel Name
                  </label>

                  <div className="flex h-[44px] items-center rounded-xl border border-slate-200 bg-slate-50 px-4">
                    <span className="truncate text-sm text-slate-600">
                      {item.key}
                    </span>
                  </div>
                </div>

                {/* Display Name */}
                <div className="md:col-span-5">
                  <label className="mb-2 block text-xs font-semibold text-slate-600">
                    Display Name
                  </label>

                  <input
                    type="text"
                    defaultValue={item.label}
                    onBlur={(e) => updateColumn(e.target.value, index)}
                    className="h-[44px] w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    placeholder="نام نمایشی ستون را وارد کنید..."
                  />
                </div>

                {/* Visibility */}
                <div className="md:col-span-3">
                  <label className="mb-2 block text-xs font-semibold text-slate-600">
                    Visibility
                  </label>

                  <button
                    type="button"
                    onClick={() => DeleteCol(index)}
                    className="flex h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Visible
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
