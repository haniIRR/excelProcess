"use client";
import { useEffect, useState } from "react";
import HeaderPage from "../components/Header";
import ImportFile from "../components/ImportFile";
import ProcessFile from "../components/ProcessFile";
import DataGrid from "../components/DataGrid";

export default function Home() {
  const [currentSteps, setCurrentSteps] = useState(1);
  const [file, setFile] = useState(null);
  const [sheetData, setSheetData] = useState(null);
  useEffect(() => {
    console.log(sheetData);
  }, [sheetData]);
  return (
    <div className="w-[80%] m-auto">
      <HeaderPage />
      {currentSteps == 1 ? (
        <ImportFile
          file={file}
          setFile={setFile}
          handleStep={setCurrentSteps}
          setSheetData={setSheetData}
          sheetData={sheetData}
        />
      ) : currentSteps == 2 ? (
        <ProcessFile sheetData={sheetData} />
      ) : currentSteps == 3 ? (
        <DataGrid />
      ) : (
        <></>
      )}
    </div>
  );
}
