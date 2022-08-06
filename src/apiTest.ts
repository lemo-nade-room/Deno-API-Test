import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts"
import { Method } from "./models/method.ts"


export interface AssertArgument {
    path?: string
    method?: Method | string
    headers?: Headers,
    parameter?: string | Record<string, unknown>
    expectedHTTPStatus?: number
    expected?: string | Record<string, unknown>
}

const method = (arg: Method | string | undefined): string => {
    if (arg === undefined) return Method.GET.value
    if (typeof arg === 'string') return arg
    return arg.value
}

const body = (arg: string | Record<string, unknown> | undefined): string | undefined => {
    if (arg === undefined) return undefined
    if (typeof arg === 'string') return arg
    return JSON.stringify(arg)
}

const assertValue = async (response: Response, expected: string | Record<string, unknown>): Promise<void> => {
    if (typeof expected === 'string') {
        assertEquals(await response.text(), expected)
    } else {
        assertEquals(await response.json(), expected)
    }
}

export class ApiTest {

    public constructor(
        private readonly baseURL: string
    ) {}

    /**
     * Test API
     * @param arg default Root Path, GET method, undefined Header, Nothing Parameter, expected 200 status, expected ""
     */
    public readonly assert = async (arg: AssertArgument): Promise<void> => {
        const response = await fetch(
            this.path(arg.path),
            {
                method: method(arg.method),
                headers: arg.headers,
                body: body(arg.parameter)
            }
        )
        assertEquals(response.status, arg.expectedHTTPStatus ?? 200)
        await assertValue(response, arg.expected ?? "")
    }

    private readonly path = (path: string | undefined) => {
        if (path === undefined) return this.baseURL
        if (path.charAt(0) !== '/') throw new Error("path's first character must '/'!")
        return this.baseURL + path
    }
}