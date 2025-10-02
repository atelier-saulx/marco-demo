import type { Schema } from "@based/sdk";
import { user } from "./user.js";

const schema: Schema = {
  locales: { en: {} },
  props: {
    filter: "string",
  },
  types: {
    user,
  },
};

export default schema;
