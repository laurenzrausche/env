// export all needed parts
export { Env, EnvVarsTemplate } from "./env";
import { Env, EnvVarsTemplate } from "./env";

// export env builder
export function env<EnvVars extends EnvVarsTemplate>(
  envVars: EnvVars,
): Env<EnvVars> {
  return new Env(envVars);
}

// default export env
export default env;