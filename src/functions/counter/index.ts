import type { BasedQueryFunction } from "@based/functions";

const counter: BasedQueryFunction = async (based, payload, update) => {
  const q = based.db.query("user").include("name").locale("en");

  if (payload?.filter) {
    q.filter("name", "includes", payload.filter);
  }

  return q.subscribe(update);
};

export default counter;
