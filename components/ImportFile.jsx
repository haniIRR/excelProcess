"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
export default function ImportFile({
  file,
  setFile,
  handleStep,
  setSheetData,
  sheetData,
}) {
  useEffect(() => {
    if (file == null) {
      return;
    }

    readFile();
  }, [file]);
  async function readFile() {
    const data = await file?.arrayBuffer();
    var wbook = XLSX.read(data, {
      type: "array",
    });
    var finalData = [];
    // for (let index = 0; index < wbook.SheetNames.length; index++) {
    //   var firstSheetName = wbook.SheetNames[index];
    //   var sheet = wbook.Sheets[firstSheetName];
    //   var jsonData = XLSX.utils.sheet_to_json(sheet);
    //   finalData.push(jsonData);
    // }

    // console.log(finalData);
    var firstSheetName = wbook.SheetNames[0];
    var sheet = wbook.Sheets[firstSheetName];
    var jsonData = XLSX.utils.sheet_to_json(sheet);
    setSheetData(jsonData);
  }

  function nextLevel() {
    if (sheetData != null) {
      handleStep(2);
    } else {
      alert("ابتدا فایل را وارد کنید");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Import Excel File
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Upload your Excel file to import your data
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Upload Area */}
          <label
            htmlFor="excel-file"
            className="
              group
              flex
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-xl
              border-2
              border-dashed
              border-slate-300
              bg-slate-50
              px-6
              py-14
              text-center
              transition
              hover:border-blue-400
              hover:bg-blue-50/50
            "
          >
            {/* Icon */}
            <div
              className="
              mb-4
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-blue-600
              transition
              group-hover:scale-105
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0 4 4m-4-4L8 8m9 8v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"
                />
              </svg>
            </div>

            {/* Text */}
            <h2 className="text-base font-semibold text-slate-700">
              Choose an Excel file
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Click to browse from your computer
            </p>

            <p className="mt-3 text-xs text-slate-400">
              Supported formats: .xlsx, .xls, .csv
            </p>

            {/* Input */}
            <input
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              id="excel-file"
              type="file"
              accept=".xlsx,.xls,.csv"
              className="hidden"
            />
          </label>

          {/* Selected File - فعلاً استاتیک برای طراحی UI */}
          {file && (
            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-green-100
                  text-green-600
                "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3.75h7.5L18.75 8.25v12A1.5 1.5 0 0 1 17.25 21h-10.5a1.5 1.5 0 0 1-1.5-1.5v-14.25a1.5 1.5 0 0 1 1.5-1.5Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 3.75V8.25h4.5"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {file.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {(file.size / 1024).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="
                  rounded-lg
                  p-2
                  text-slate-400
                  transition
                  hover:bg-red-50
                  hover:text-red-500
                "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Import Button */}
          <button
            onClick={() => nextLevel()}
            type="button"
            className="
              mt-6
              w-full
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-blue-700
              active:scale-[0.99]
              disabled:cursor-not-allowed
              disabled:bg-slate-300
            "
          >
            Process File
          </button>
        </div>

        {/* Footer hint */}
        <p className="mt-4 text-center text-xs text-slate-400">
          Make sure your file contains the required columns before importing.
        </p>
      </div>
    </div>
  );
}
