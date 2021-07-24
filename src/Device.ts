export interface ReadableDevice<T> {
  read(): Promise<T>;
}

export interface WritableDevice<T extends boolean | number | string> {
  write(value: T): Promise<void>;
}
