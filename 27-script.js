// async function greet() {
//   return "Hello!";
// }
// greet().then((msg)=>{
//     console.log(msg)
// })
//----------------------------------------------------------
async function name(params) {
  let response=await fetch ('https://api.example.com/data');
  let data= await response.json();  
  console.log(data);  
}
//by using catch and try
async function example() {
  try {
    let res = await fetch('https://api.example.com/data');
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
