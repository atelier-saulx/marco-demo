import type { BasedFunctionConfig } from "@based/functions";

const config: BasedFunctionConfig = {
  type: "query",
  name: "counter",
  ctx: ["authState.ctx"],
};

export default config;
