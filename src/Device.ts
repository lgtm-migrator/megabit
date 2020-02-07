export interface ReadableDevice<
  T extends boolean | number | string | boolean[] | number[]
> {
  read(): Promise<T>;
}

export interface WritableDevice<T extends boolean | number | string> {
  write(value: T): Promise<void>;
}
