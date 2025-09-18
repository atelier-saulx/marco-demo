import type { Authorize } from "@based/functions";

/************************************************************
 *                                                          *
 * Authorize functions are executed every time the client   *
 * calls a function. They return a boolean value indicating *
 * whether to allow or block the request.                   *
 *                                                          *
 * These functions act as middleware, running before each   *
 * function is executed.                                    *
 *                                                          *
 * No client-side actions are required to execute this      *
 * function.                                                *
 *                                                          *
 ************************************************************/
const authorize: Authorize = async (based, ctx, name, payload) => {
  await based.renewAuthState(ctx, {
    userId: "1",
    token: ctx.session?.authState.token,
  });
  if (ctx.session?.authState.token === "🔑") {
    console.log("LOGIN");

    return true;
  }
  return false;
};

export default authorize;
