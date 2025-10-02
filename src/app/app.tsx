import based, { type BasedClient } from "@based/sdk/client";
import { Provider } from "@based/sdk/react";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/counter.js";
import "./index.css";

import basedConfig from "../../based.js";
export const client: BasedClient = based(basedConfig);
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

const App = () => {
  return (
    <div className="main">
      <Counter />
    </div>
  );
};

root.render(
  <Provider client={client}>
    <App />
  </Provider>
);
