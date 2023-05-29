import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Save = () => {
  //   const [fileData, setFileData] = useState([]);
  //   const [downloadUrl, setDownloadUrl] = useState("");
  const [fileData, setFileData] = useState([
    { column1: "Value 1", column2: "Value 2" },
    { column1: "Value 3", column2: "Value 4" },
    // Add more mock data as needed
  ]);

  const handleDownload = () => {
    const data = [
      ["Column 1", "Column 2"],
      ["Value 1", "Value 2"],
      ["Value 3", "Value 4"],
      // Add more data rows as needed
    ];

    const csvContent = data.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.csv";
    link.click();
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // Fetch the file data from the backend
  //         const response = await axios.get("/api/files");
  //         setFileData(response.data);
  //       } catch (error) {
  //         console.error("Error:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   const handleDownload = async () => {
  //     try {
  //       // Download the file from the backend
  //       const response = await axios.get("/api/download");
  //       const url = window.URL.createObjectURL(new Blob([response.data]));
  //       setDownloadUrl(url);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Excel Files</h1>

      {/* Display the first file */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Information File</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300">Column 1</th>
              <th className="border-b-2 border-gray-300">Column 2</th>
              {/* Add more column headers as needed */}
            </tr>
          </thead>
          <tbody>
            {fileData.map((row, index) => (
              <tr key={index}>
                <td className="border-b border-gray-300 py-2">{row.column1}</td>
                <td className="border-b border-gray-300 py-2">{row.column2}</td>
                {/* Add more table cells for each column */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add a button for downloading the second file */}
      <div className="grid mt-12">
        <h2 className="text-lg font-semibold mb-2">Download File</h2>
        {/* {downloadUrl ? (
          <a href={downloadUrl} download>
            <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
              Download File
            </button>
          </a>
        ) : ( */}
        <button
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownload}
        >
          Load File
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default Save;
