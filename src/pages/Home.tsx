import { useState } from "react";
import btcln from "../assets/btcln.png";
import { QRTag } from "../components/QRTag";
import { Button } from "../components/Button";
import { createInvoice } from "../services/invoice-service";
import { Spinner } from "../components/Spinner";
import { PaymentStatus } from "../components/PaymentStatus";
import { FileUpload } from "../components/FileUpload";
import { processPDF } from "../services/pdf-converter-service";
import { QRPlaceHolder } from "../components/QRPlaceHolder";
import { QRPlaceHolderSuccess } from "../components/QRPlaceHolderSuccess";

export function Home() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentHash, setPaymentHash] = useState("");
  // prettier-ignore
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isPaid, setIsPaid] = useState(false);

  const price = 1;

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handlePaymentSuccess = async () => {
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
        afterPaymentSuccess();
      } catch (error) {
        // show error message and refund
      }
    }
  };

  const afterPaymentSuccess = () => {
    setQrCodeValue("");
    setPaymentHash("");
    setUploadedFile(null);
    setIsPaid(true);
  };

  return (
    <>
      <div className={"flex grid space-y-10"}>
        <h1 className={"pt-10 text-4xl font-bold"}>
          Welcome to my PDF to CSV Converter Page!
        </h1>
        <h2 className={"text-2xl font-semibold"}>
          Convert your PDF files for just {price} sats
        </h2>
        <p className={"text-lg text-gray-300"}>
          I'm providing a PDF conversion to CSV service, powered by
          microtransactions. Your support will help me create more exciting
          content and applications. This application is aimed to convert PDFs
          with tables like bank statements to CSV files.
        </p>
        <p className={"text-lg text-gray-300"}>
          By using this service, you agree to the{" "}
          {
            <a href="/LNbits/terms-of-use" target="_blank">
              Terms of use
            </a>
          }
        </p>
        <div className={"flex flex-col justify-center space-x-24"}>
          <div className={"flex flex-row items-center justify-around"}>
            <QRTag
              value={qrCodeValue}
              logoImage={btcln}
              placeHolder={
                isPaid ? <QRPlaceHolderSuccess /> : <QRPlaceHolder />
              }
            />
            <div className={"flex flex-col items-center"}>
              <FileUpload onFileUpload={handleFileUpload} />
              <Button
                className={"mt-10 px-20 py-4 text-xl"}
                disabled={isLoading || !uploadedFile}
                onClick={async () => {
                  setIsLoading(true);
                  try {
                    const response = await createInvoice({
                      memo: "PDF conversion",
                      amount: price,
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
                {isLoading ? (
                  <Spinner />
                ) : (
                  `Pay ${price} ${price === 1 ? "sat" : "sats"}`
                )}
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
