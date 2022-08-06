import { Method, ApiTest } from "https://deno.land/x/apitest@0.1.0/mod.ts"

const api = new ApiTest('http://localhost:8000')

Deno.test("GET String Test", async () => {
    await api.assert({
        path: "/hello",
        expected: "Good Morning!"
    })
})

Deno.test("POST String Test", async () => {
    await api.assert({
        path: "/hello",
        method: Method.POST,
        expected: "Hello, POST!"
    })
})

Deno.test("Receive Object Test", async () => {
    await api.assert({
        path: '/object',
        expected: { name: "hello", age: 10 }
    })
})

Deno.test("Send Object Test", async () => {
    await api.assert({
        path: '/object',
        method: Method.PATCH,
        parameter: { first: "Tom", last: "Riddle" },
        expected: "Tom Riddle"
    })
})

Deno.test("Assert HTTP Status Code Test", async () => {
    await api.assert({
        path: '/object',
        method: Method.DELETE,
        expectedHTTPStatus: 204
    })
})

Deno.test("Not Found Test", async () => {
    await api.assert({
        path: '/not',
        expectedHTTPStatus: 404,
        expected: "Not Found"
    })
})
