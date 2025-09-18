import type { BasedFunctionConfig } from "@based/functions";

const config: BasedFunctionConfig = {
  type: "query",
  name: "counter",
  ctx: ["authState.userId"],
};

export default config;
