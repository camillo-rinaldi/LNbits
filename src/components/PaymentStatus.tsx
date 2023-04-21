import { useEffect, useState } from "react";
import { getInvoice } from "../services/invoice-service";

type PaymentStatusProps = {
  paymentHash: string;
};

export function PaymentStatus({ paymentHash }: PaymentStatusProps) {
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    setPaid(false);
    if (paymentHash !== "") {
      const timer = setInterval(async () => {
        getInvoice(paymentHash).then((invoice) => {
          if (invoice.paid) {
            setPaid(true);
            clearInterval(timer);
          }
        });
      }, 5000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [paymentHash]);

  if (paymentHash === "") return <> </>;
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {paid ? (
          <div className="flex items-center justify-center">
            <svg
              className="mr-2 h-10 w-10 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-2xl font-bold text-green-500">
              Payment Received
            </h2>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <svg
              className="mr-2 h-8 w-8 animate-spin text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h2 className="text-xl font-semibold text-orange-500">
              Waiting for Payment
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
