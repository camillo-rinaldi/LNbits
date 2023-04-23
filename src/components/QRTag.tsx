import { ReactNode } from "react";
import { QRCode } from "react-qrcode-logo";

type QRTagProps = {
  value: string;
  logoImage: string;
  placeHolder?: ReactNode;
};

export function QRTag({ value, logoImage, placeHolder }: QRTagProps) {
  return (
    <>
      <div className="pt-10">
        {value ? (
          <div className="inline-block border-2 border-_orange-500">
            <QRCode
              ecLevel={"M"}
              value={value}
              size={300}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              bgColor="#f7931a"
              fgColor="#000f"
              logoImage={logoImage}
              logoWidth={100}
              logoHeight={100}
              qrStyle="dots"
            />
            <a href={`lightning:${value}`} rel="noreferrer">
              Scan the QRCode or click here to pay
            </a>
          </div>
        ) : (
          <div className="inline-block flex h-[340px] w-[320px] items-center justify-center border-2 border-dashed border-_orange-500 bg-transparent">
            {placeHolder ? (
              placeHolder
            ) : (
              <p className="text-gray-400">QR code will be generated here</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
