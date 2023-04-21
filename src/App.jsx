import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QRTag } from "./components/QRTag";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={"grid space-y-10"}>
        <h1 className={"py-10"}>Title</h1>
        <h2 className={""}>This is a secondary title</h2>
        <p>Thank you for donating, this is a paragraph!</p>
        <QRTag
          className={""}
          value={
            "lnbc10n1pjyrk37pp5fgqj7vct9udfmfxnnu7sd8w3wfd7769hn9phvvnuwkg0ts2uk9esdq0g9kxy7fqw3jhxaqcqzpgxqyz5vqsp5s0d7qyr9mmk22qeevcmpress6pz699frypldsjp5aj7j4f0rvaas9qyyssqfjthn8jae2e45nqp4qaj43p0n0e0myte6d405v50cx80rqhxhevj0cw8cu5rdnknjauvulm7ptj4ey26j5kkw2mrt8kp9wv7ca7jgacqc0yx0g"
          }
        />
        <div>
          <Button
            className={"px-[120px] py-[30px] text-3xl"}
            onClick={() => {}}
          >
            Tip me up!
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
