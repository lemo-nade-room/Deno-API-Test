# Deno-API-Test

## LICENSE
This software is released under the MIT License, see LICENSE.

## Overview
This package make REST API Tests easy.

## Usage

[example code](./test/api.test.ts)

### import package
```ts
import { Method, ApiTest } from "https://deno.land/x/apitest@0.1.2/mod.ts"
```

### new Instance by base URL
```ts
const api = new ApiTest('https://xxxx.com')
```

### Test Server
To "baseURL + path" with method and parameter
```ts
Deno.test("Send Object Test", async () => {
    await api.assert({
        path: '/object',
        method: Method.PATCH,
        parameter: { first: "Tom", last: "Riddle" },
    })
})
```

### Assert
assertEquals, by expected status (default 200) and expected body (default empty)
```ts
Deno.test("Not Found Test", async () => {
    await api.assert({
        path: '/not',
        expectedHTTPStatus: 404,
        expected: "Not Found"
    })
})

Deno.test("Receive Object Test", async () => {
    await api.assert({
        path: '/object',
        expected: { name: "hello", age: 10 }
    })
})
```

### Execute
in terminal
```shell
deno test --allow-net
```

## What this package can't do
This package cannot be considered a success with any response