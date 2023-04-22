import { useState } from "react";
import btcln from "./assets/btcln.png";
import "./App.css";
import { QRTag } from "./components/QRTag";
import { Button } from "./components/Button";
import { createInvoice } from "./services/invoice-service.ts";
import { Spinner } from "./components/Spinner";
import { PaymentStatus } from "./components/PaymentStatus";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [memoValue, setMemoValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentHash, setPaymentHash] = useState("");

  return (
    <>
      <div className={"flex grid space-y-10"}>
        <h1 className={"pt-10 text-4xl font-bold"}>
          Welcome to my Donation Page!
        </h1>
        <h2 className={"text-2xl font-semibold"}>
          Support my projects and initiatives
        </h2>
        <p className={"text-lg text-gray-300"}>
          I'm working on some amazing projects and ideas, powered by
          microtransactions. Your support will help me create more exciting
          content and applications.
        </p>
        <p className={"text-lg text-gray-300"}>
          If you like what I'm doing, please consider sending a few sats as a
          tip. Every little bit helps!
        </p>
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
              Message
            </label>
            <textarea
              id="memo"
              rows={3}
              maxLength={100}
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
                  setPaymentHash(response["payment_hash"]);
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
          <QRTag className={""} value={qrCodeValue} logoImage={btcln} />
        </div>
        <PaymentStatus paymentHash={paymentHash} />
      </div>
    </>
  );
}

export default App;
