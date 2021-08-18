fetch('/getposts').then((res) => res.json()).then((data) => {
  console.log(data);
}).catch(console.error);
