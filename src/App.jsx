import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QRTag } from "./components/QRTag";
import { Button } from "./components/Button";
import { ChangeEvent } from "react";
import { FormEvent } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <>
      <div className={"flex grid space-y-10"}>
        <h1 className={"py-10"}>Title</h1>
        <h2 className={""}>This is a secondary title</h2>
        <p>Thank you for donating, this is a paragraph!</p>
        <form className={"flex flex-col items-center"}>
          <label htmlFor="sats" className="mb-2">
            Sats
          </label>
          <input
            id="sats"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="mb-4 block rounded-md border-2 border-gray-300 px-2 py-1"
          />
          <Button
            className={"px-[80px] py-[10px] text-xl"}
            onClick={(e) => {
              setQrCodeValue(inputValue.toString());
            }}
          >
            Tip me up!
          </Button>
        </form>
        {qrCodeValue !== "" ? (
          <QRTag className={""} value={qrCodeValue} />
        ) : (
          <div />
        )}
      </div>
    </>
  );
}

export default App;
