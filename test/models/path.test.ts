import { assertEquals, assertThrows } from "../../deps.ts";
import Path from "../../src/models/path.ts";

Deno.test("Pathの正常", () => {
  const path = new Path("/component");
  assertEquals(path.value, "/component");
});

Deno.test("Pathの異常", () => {
  assertThrows(() => new Path("hello"));
});
