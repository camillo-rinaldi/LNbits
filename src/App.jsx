import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { QRTag } from "./components/QRTag";
import { Button } from "./components/Button";
import { createInvoice } from "./services/invoice-service.ts";
import { Spinner } from "./components/Spinner";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [memoValue, setMemoValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentHash, setPaymentHash] = useState("");

  return (
    <>
      <div className={"flex grid space-y-10"}>
        <h1 className={"py-10"}>Title</h1>
        <h2 className={""}>This is a secondary title</h2>
        <p>Thank you for donating, this is a paragraph!</p>
        <div className={"flex flex-row justify-center space-x-24"}>
          <form className={"mt-4 flex flex-col items-center"}>
            <label htmlFor="sats" className="mb-2">
              Sats
            </label>
            <input
              id="sats"
              type="number"
              value={inputValue}
              onChange={(e) => {
                if (Number(e.target.value) >= 0) {
                  setInputValue(Number(e.target.value));
                }
              }}
              className="mb-4 block rounded-md border-2 border-gray-300 px-2 py-1"
            />
            <label htmlFor="memo" className="mb-2">
              Memo
            </label>
            <textarea
              id="memo"
              rows={3}
              value={memoValue}
              onChange={(e) => {
                setMemoValue(e.target.value);
              }}
              className="mb-4 block w-full resize-none rounded-md border-2 border-gray-300 px-2 py-1"
            />
            <Button
              className={"px-[80px] py-[10px] text-xl"}
              disabled={isLoading || inputValue <= 0}
              onClick={async (e) => {
                setIsLoading(true);
                try {
                  const response = await createInvoice({
                    memo: memoValue,
                    amount: inputValue,
                  });
                  setQrCodeValue(response["payment_request"]);
                } catch (error) {
                  console.error("Error creating invoice:", error);
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              {isLoading ? <Spinner /> : "Tip me up!"}
            </Button>
          </form>
          <QRTag className={""} value={qrCodeValue} logoImage={viteLogo} />
        </div>
        {
          // if payment hash is != "" then every 5 seconds check if the invoice has been paid
          // if it has been paid then show a success message
        }
      </div>
    </>
  );
}

export default App;
