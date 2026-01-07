// class wrapper to store possible envs and fallback values
export class Env<
  EnvVars extends Record<string, { fallback?: string }>,
  EnvNames extends keyof EnvVars = keyof EnvVars,
> {
  // shorthand to store possible envs and fallback values internal
  constructor(private envVars: EnvVars) {}

  // wrapper for process.env that adds strong typing if fallback is defined and adds returns fallback if process.env is undefined
  public get<EnvName extends EnvNames>(
    name: EnvName,
  ): EnvVars[EnvName]["fallback"] extends string ? string : string | undefined {

    // return process.env[name] or if undefined return fallback value
    return process.env[name as string] ?? (this.envVars[name]?.fallback as any);
  }
}
