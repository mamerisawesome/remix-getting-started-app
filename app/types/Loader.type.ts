export type GenericLoaderData <K extends string, V, T = {}> = {
  [key in K]: V;
} & T;
