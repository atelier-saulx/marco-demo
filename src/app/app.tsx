import {
  type BasedClient,
  Provider as BasedClientProvider,
  based,
} from "@based/sdk";
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
  <BasedClientProvider client={client}>
    <App />
  </BasedClientProvider>
);
