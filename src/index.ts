import { spawn, Thread, Worker } from "threads";

async function test() {
  const add = await spawn(new Worker("./workers/auth"));
  const sum = await add(1, 2);

  console.log("Sum:", sum);

  await Thread.terminate(add);
}
// function test() {
//   console.log("Hello world!");
// }
test();
