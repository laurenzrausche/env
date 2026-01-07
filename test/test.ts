import { Env } from "@laurenzrausche/env";

const env = new Env({
  _0_UNSET: {}, // this should be possible and env.get("_0_UNSET") -> string | undefined
  // _1_REQUIRED: {
  //   required: true,
  // }, // this should not be possible and env.get("_1_REQUIRED") should throw an Error
  _2_NOT_REQUIRED: {
    required: false,
  }, // this should be possible and env.get("_2_NOT_REQUIRED") -> string | undefined
  _3_FALLBACK: {
    fallback: "FALLBACK-3",
  }, // this should be possible and env.get("_3_FALLBACK") -> string
  _4_NO_FALLBACK: {
    fallback: undefined,
  }, // this should be possible and env.get("_4_NO_FALLBACK") -> string | undefined
  _5_REQUIRED_FALLBACK: {
    required: true,
    fallback: "FALLBACK-5",
  }, // this should be possible and env.get("_5_REQUIRED_FALLBACK") -> string
  // _6_REQUIRED_NO_FALLBACK: {
  //   required: true,
  //   fallback: undefined,
  // }, // this should not be possible and env.get("_6_REQUIRED_NO_FALLBACK") should throw an Error
  _7_NOT_REQUIRED_FALLBACK: {
    required: false,
    fallback: "FALLBACK-7",
  }, // this should be possible and env.get("_7_NOT_REQUIRED_FALLBACK") -> string
  _8_NOT_REQUIRED_NO_FALLBACK: {
    required: false,
    fallback: undefined,
  }, // this should be possible and env.get("_8_NOT_REQUIRED_NO_FALLBACK") -> string | undefined
});

const _0_UNSET = env.get("_0_UNSET");
// const _1_REQUIRED = env.get("_1_REQUIRED");
const _2_NOT_REQUIRED = env.get("_2_NOT_REQUIRED");
const _3_FALLBACK = env.get("_3_FALLBACK");
const _4_NO_FALLBACK = env.get("_4_NO_FALLBACK");
const _5_REQUIRED_FALLBACK = env.get("_5_REQUIRED_FALLBACK");
// const _6_REQUIRED_NO_FALLBACK = env.get("_6_REQUIRED_NO_FALLBACK");
const _7_NOT_REQUIRED_FALLBACK = env.get("_7_NOT_REQUIRED_FALLBACK");
const _8_NOT_REQUIRED_NO_FALLBACK = env.get("_8_NOT_REQUIRED_NO_FALLBACK");

console.log(_0_UNSET);
// console.log(_1_REQUIRED);
console.log(_2_NOT_REQUIRED);
console.log(_3_FALLBACK);
console.log(_4_NO_FALLBACK);
console.log(_5_REQUIRED_FALLBACK);
// console.log(_6_REQUIRED_NO_FALLBACK);
console.log(_7_NOT_REQUIRED_FALLBACK);
console.log(_8_NOT_REQUIRED_NO_FALLBACK);
