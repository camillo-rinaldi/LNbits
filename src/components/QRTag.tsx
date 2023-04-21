import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

type QRTagProps = {
  value: string;
};

export function QRTag(props: QRTagProps) {
  const [qrCodeDataURL, setQRCodeDataURL] = useState<string>("");

  useEffect(() => {
    async function generateQRCode() {
      try {
        const dataURL = await QRCode.toDataURL(props.value, {
          errorCorrectionLevel: "L",
          color: {
            dark: "#000000",
            light: "#f77216",
          },
          margin: 2,
        });
        setQRCodeDataURL(dataURL);
      } catch (error) {
        console.error("Failed to generate QR code:", error);
      }
    }

    generateQRCode();
  }, [props.value]);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center pt-10">
        {qrCodeDataURL ? (
          <div className="inline-block border-2 border-orange-500">
            <img src={qrCodeDataURL} alt={`QR code for ${props.value}`} />
          </div>
        ) : (
          <p>Loading QR code...</p>
        )}
      </div>
    </>
  );
}
