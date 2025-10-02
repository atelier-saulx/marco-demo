import type { BasedQueryFunction } from "@based/sdk";

const filter: BasedQueryFunction = async (based, payload, update) => {
  return based.db.query().include("filter").subscribe(update);
};

export default filter;
