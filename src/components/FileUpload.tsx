import { ChangeEvent, useState } from "react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.type === "application/pdf") {
        if (file.size <= 3 * 1024 * 1024) {
          setFile(file);
          onFileUpload(file);
        } else {
          alert("Please upload a PDF file smaller than 3 MB.");
          e.target.value = "";
        }
      } else {
        alert("Please upload a PDF file.");
        e.target.value = "";
      }
    }
  };

  return (
    <div>
      <label htmlFor="fileUpload" className="pb-2">
        Upload a PDF
      </label>
      <div className={"h-[10px]"} />
      <input
        id="fileUpload"
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="block rounded-md border-2 border-gray-300 px-2 py-1 text-lg"
      />
      {file && <p className="mt-2 text-sm text-gray-500">File: {file.name}</p>}
    </div>
  );
}
