const fetch = require('node-fetch');
//const response = fetch("http://localhost:5000/posts", {
	//headers: { "Content-Type": "application/json" },
	//body: "sotiris"
//});
//console.log(response);
const response = fetch("http://www.sotirismorfakidis.xyz:5000/posts");
console.log(response);
