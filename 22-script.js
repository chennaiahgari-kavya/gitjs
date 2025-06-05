// async function getPost() {
//   console.log("Fetching post...");
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log("Post title:", data.title);
// }

// getPost();
// console.log("This logs while waiting for fetch.");
//--------------------------------------------------
doSomething()
  .then(result1 => doSomethingElse(result1))
  .then(result2 => doAnotherThing(result2))
  .then(result3 => doFinalThing(result3))
  .then(result4 => console.log('Done!'))
  .catch(error => console.error(error));
