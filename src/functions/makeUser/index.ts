import type { BasedFunction } from "@based/sdk";

const counter: BasedFunction = async (
  based,
  payload = {
    name: "mr snurf",
  }
) => {
  return based.db.create("user", payload || { name: "bla" });
};

export default counter;
