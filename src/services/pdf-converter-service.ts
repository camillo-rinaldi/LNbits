import axios from "axios";

const endpoint =
  "https://5jhq2lwis0.execute-api.sa-east-1.amazonaws.com/prod/process-pdf";

export const processPDF = async (
  fileName: string,
  pdf: File
): Promise<Blob> => {
  try {
    const base64pdf = await readFileAsDataURL(pdf);
    const response = await axios.post(
      `${endpoint}/${fileName}`,
      {
        pdf: base64pdf,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    const csvData = data.csv;
    return base64ToBlob(csvData, "text/csv");
  } catch (e) {
    console.error("Error processing pdf:", e);
    throw e;
  }
};

const readFileAsDataURL = (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

const base64ToBlob = (base64: string, mimeType = "") => {
  const byteString = atob(base64);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: mimeType });
};
