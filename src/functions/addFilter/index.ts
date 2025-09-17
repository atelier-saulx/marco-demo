import type { BasedFunction } from "@based/functions";

const addFilter: BasedFunction = async (based, payload) => {
  return based.db.update({ filter: payload?.filter || "" });
};

export default addFilter;
