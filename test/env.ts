import env from "@laurenzrausche/env";

// export Env instance as config
export const config = env({
  UNSET: {}, // config.get("UNSET") -> string | undefined
  UNDEFINED: {
    fallback: undefined,
  }, // config.get("UNDEFINED") -> string | undefined
  FALLBACK: {
    fallback: "USED-FALLBACK",
  }, // config.get("FALLBACK") -> string
});
