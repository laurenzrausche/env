import { config } from "./env";

const UNSET = config.get("UNSET");
const UNDEFINED = config.get("UNDEFINED");
const FALLBACK = config.get("FALLBACK");

console.log(UNSET);
console.log(UNDEFINED);
console.log(FALLBACK);
