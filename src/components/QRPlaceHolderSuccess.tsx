import successImage from "../assets/btc.gif";

export function QRPlaceHolderSuccess() {
  return (
    <div
      className="flex h-[300px] w-full flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${successImage})` }}
    >
      <p
        className="text-lg font-semibold text-black"
        style={{
          textShadow:
            "1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff",
        }}
      >
        Thank you for using our PDF Converter!
      </p>
      <p
        className="mt-2 text-black"
        style={{
          textShadow:
            "1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff",
        }}
      >
        Upload another PDF file to continue converting
      </p>
    </div>
  );
}
