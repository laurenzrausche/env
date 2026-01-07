export class Env<
  EnvVars extends Record<
    string,
    | { required: true; fallback: string }
    | { required?: false; fallback?: string }
  >,
  EnvNames extends keyof EnvVars = keyof EnvVars,
> {
  constructor(private envVars: EnvVars) {}

  public get<EnvName extends EnvNames, T extends EnvVars[EnvName]>(
    name: EnvName,
  ):
    | string
    | (EnvVars[EnvName]["fallback"] extends string ? string : undefined) {
    const processEnv = process.env[name as string];
    if (typeof this.envVars[name]?.fallback === "string") {
      return processEnv ?? this.envVars[name]?.fallback;
    } else if (this.envVars[name]?.required) {
      throw new Error(
        `process.env.${name as string} is set as required but has no fallback`,
      );
    } else return processEnv as any;
  }
}
