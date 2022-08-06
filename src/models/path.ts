export default class Path {
  public constructor(
    public readonly value: string,
  ) {
    if (value.charAt(0) !== "/") {
      throw new Error("path must start '/'.");
    }
  }
}
