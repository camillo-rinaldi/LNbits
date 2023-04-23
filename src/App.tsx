import React, { useState } from "react";
import btcln from "/src/assets/btcln.png";
import "./App.css";
import { QRTag } from "./components/QRTag";
import { Button } from "./components/Button";
import { createInvoice } from "./services/invoice-service";
import { Spinner } from "./components/Spinner";
import { PaymentStatus } from "./components/PaymentStatus";
import { FileUpload } from "./components/FileUpload";
import { processPDF } from "./services/pdf-converter-service";

function App() {
  const [inputValue, setInputValue] = useState(10);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentHash, setPaymentHash] = useState("");
  // prettier-ignore
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handlePaymentSuccess = async () => {
    console.log(uploadedFile);
    if (uploadedFile) {
      const uploadFileName = `${uploadedFile.name.replace(
        ".pdf",
        ""
      )}-${Date.now().toString(10)}.pdf`;
      try {
        const responseBlob = await processPDF(uploadFileName, uploadedFile);
        const downloadUrl = URL.createObjectURL(responseBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = downloadUrl;
        downloadLink.download = uploadedFile.name.replace(".pdf", ".csv");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        // show error message and refund
      }
    }
  };

  return (
    <>
      <div className={"flex grid space-y-10"}>
        <h1 className={"pt-10 text-4xl font-bold"}>
          Welcome to my PDF Converter Page!
        </h1>
        <h2 className={"text-2xl font-semibold"}>
          Convert your PDF files for just 10 sats
        </h2>
        <p className={"text-lg text-gray-300"}>
          I'm providing a PDF conversion service, powered by microtransactions.
          Your support will help me create more exciting content and
          applications.
        </p>
        <div className={"flex flex-col justify-center space-x-24"}>
          <div className={"flex flex-row items-center justify-around"}>
            <QRTag value={qrCodeValue} logoImage={btcln} />
            <div className={"flex flex-col items-center"}>
              <FileUpload onFileUpload={handleFileUpload} />
              <input
                type="hidden"
                value={inputValue}
                readOnly
                className="hidden"
              />
              <Button
                className={"mt-10 px-20 py-4 text-xl"}
                disabled={isLoading || inputValue <= 0 || !uploadedFile}
                onClick={async () => {
                  setIsLoading(true);
                  try {
                    const response = await createInvoice({
                      memo: "PDF conversion",
                      amount: inputValue,
                    });
                    setQrCodeValue(response["payment_request"]);
                    setPaymentHash(response["payment_hash"]);
                  } catch (error) {
                    console.error("Error creating invoice:", error);
                  } finally {
                    setIsLoading(false);
                  }
                }}
              >
                {isLoading ? <Spinner /> : "Pay 10 sats"}
              </Button>
              <Button className={"mt-10"} onClick={handlePaymentSuccess}>
                Skip payment
              </Button>
            </div>
          </div>
        </div>
        <PaymentStatus
          paymentHash={paymentHash}
          onSuccess={handlePaymentSuccess}
        />
      </div>
    </>
  );
}

export default App;