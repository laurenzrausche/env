import { Env } from "@laurenzrausche/env";

const env = new Env({
  UNSET: {}, // env.get("UNSET") -> string | undefined
  UNDEFINED: {
    fallback: undefined,
  }, // env.get("UNDEFINED") -> string | undefined
  FALLBACK: {
    fallback: "USED-FALLBACK",
  }, // env.get("FALLBACK") -> string
});

const UNSET = env.get("UNSET");
const UNDEFINED = env.get("UNDEFINED");
const FALLBACK = env.get("FALLBACK");

console.log(UNSET);
console.log(UNDEFINED);
console.log(FALLBACK);
