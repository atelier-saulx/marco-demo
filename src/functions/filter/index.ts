import type { BasedQueryFunction } from "@based/functions";

const filter: BasedQueryFunction = async (based, payload, update) => {
  return based.db.query().include("filter").subscribe(update);
};

export default filter;
