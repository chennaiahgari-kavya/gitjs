// let apiaddress="https://jsonplaceholder.typicode.com/todos/2";
// //fetch
// fetch(apiaddress).then((Response)=>{
//     return Response.json()
// }).then((dats)=>{
//     console.log(dats);
// })
//--------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the post content',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log('Created:', data))
  .catch(error => console.error('Error:', error));
