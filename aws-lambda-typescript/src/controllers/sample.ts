export interface CustomParams {
  readonly something: string;
}

export interface SomeResult {
  readonly someOtherThing: string;
}

export default async (_params: CustomParams): Promise<SomeResult> => {
  throw new Error("Function not implemented yet!");
};
