export default function SheetColumn({ data }) {
  console.log(data);

  return (
    <div className="space-y-3">
      <div
        key={data.id}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        {/* Column Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
            {data.id + 1}
          </span>

          <div>
            <p className="text-xs font-medium text-slate-500">Excel Column</p>

            <p className="mt-0.5 text-sm font-semibold text-slate-800">
              Column {data.id + 1}
            </p>
          </div>
        </div>

        {/* Column Settings */}
        <div className="p-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end">
            {Object.keys(data).map((c) => {
              return (
                <>
                  {/* Excel Name */}
                  <div className="md:col-span-3">
                    <label className="mb-2 block text-xs font-semibold text-slate-600">
                      Excel Name
                    </label>

                    <div className="flex h-[42px] items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5">
                      <span className="truncate text-sm text-slate-600">
                        {c}
                      </span>
                    </div>
                  </div>

                  {/* Display Name */}
                  <div className="md:col-span-4">
                    <label className="mb-2 block text-xs font-semibold text-slate-600">
                      Display Name
                    </label>

                    <input
                      type="text"
                      value={c.displayName}
                      onChange={(e) =>
                        updateColumn(data.id, "displayName", e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                      placeholder="نام نمایشی ستون"
                    />
                  </div>

                  {/* Type */}
                  <div className="md:col-span-3">
                    <label className="mb-2 block text-xs font-semibold text-slate-600">
                      Data Type
                    </label>

                    <select
                      value={c.type}
                      onChange={(e) =>
                        updateColumn(data.id, "type", e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="date">Date</option>
                      <option value="boolean">Boolean</option>
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                    </select>
                  </div>

                  {/* Visibility */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-semibold text-slate-600">
                      Visibility
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        updateColumn(data.id, "visible", !c.visible)
                      }
                      className={`flex w-full items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                        c.visible
                          ? "border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                          : "border-slate-200 bg-slate-50 text-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          c.visible ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                      />

                      {c.visible ? "Visible" : "Hidden"}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
