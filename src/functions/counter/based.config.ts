import type { BasedFunctionConfig } from "@based/sdk";

const config: BasedFunctionConfig = {
  type: "query",
  name: "counter",
  ctx: ["authState.userId"],
};

export default config;
