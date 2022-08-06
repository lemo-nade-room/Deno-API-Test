# Deno-API-Test

## LICENSE
This software is released under the MIT License, see LICENSE.

## Overview
This package make REST API Tests easy.

## Usage
new Instance by base URL
```ts
const api = new ApiTest('https://xxxx.com')
```

test server

To "baseURL + path" with method and parameter

```ts
Deno.test("Send Object Test", async () => {
    await test.assert({
        path: '/object',
        method: Method.PATCH,
        parameter: { first: "Tom", last: "Riddle" },
    })
})
```

assertEquals, by expected status (default 200) and expected body (default empty)
```ts
Deno.test("Not Found Test", async () => {
    await test.assert({
        path: '/not',
        expectedHTTPStatus: 404,
        expected: "Not Found"
    })
})
```

## What this package can't do
This package cannot be considered a success with any response