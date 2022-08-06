export class Method {

    private constructor(
        public readonly value: string
    ) {}

    public static readonly GET = new Method("GET")
    public static readonly HEAD = new Method("HEAD")
    public static readonly POST = new Method("POST")
    public static readonly PUT = new Method("PUT")
    public static readonly DELETE = new Method("DELETE")
    public static readonly CONNECT = new Method("CONNECT")
    public static readonly OPTIONS = new Method("OPTIONS")
    public static readonly TRACE = new Method("TRACE")
    public static readonly PATCH = new Method("PATCH")
}