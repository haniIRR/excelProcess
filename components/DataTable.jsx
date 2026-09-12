export default function DataTable({ columnName, setnameCol, data }) {
  console.log(columnName);
  return <></>;
  // <>
  //   <div className="overflow-x-auto rounded-xl border border-slate-200">
  //     <table className="min-w-full divide-y divide-slate-200 text-sm">
  //       <thead className="bg-slate-50">
  //         {table.getHeaderGroups().map((headerGroup) => (
  //           <tr key={headerGroup.id}>
  //             {headerGroup.headers.map((header) => (
  //               <th
  //                 key={header.id}
  //                 className="px-4 py-3 text-left font-semibold text-slate-600 whitespace-nowrap"
  //               >
  //                 {flexRender(
  //                   header.column.columnDef.header,
  //                   header.getContext()
  //                 )}
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>

  //       <tbody className="divide-y divide-slate-100 bg-white">
  //         {table.getRowModel().rows.map((row) => (
  //           <tr key={row.id} className="hover:bg-slate-50 transition">
  //             {row.getVisibleCells().map((cell) => (
  //               <td
  //                 key={cell.id}
  //                 className="px-4 py-3 text-slate-700 whitespace-nowrap"
  //               >
  //                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
  //               </td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // </>
}
