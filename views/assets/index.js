fetch('/getposts').then((res) => res.json()).then((data) => {
  console.log(data);
  appenData(data)
}).catch(console.error);