import type { BasedQueryFunction } from "@based/functions";

const counter: BasedQueryFunction = async (
  based,
  payload,
  update,
  error,
  ctx
) => {
  console.log("CTX => ", ctx);
  const q = based.db.query("user").include("name").locale("en");

  // if (payload?.filter) {
  //   q.filter("name", "includes", payload.filter);
  // }

  // return q.subscribe(update);

  return q.subscribe((x) => update(x.toObject()));
};

export default counter;
