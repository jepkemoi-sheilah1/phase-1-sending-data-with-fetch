// Add your code here
//make a request to http://localhost:3000/users with name and email.

function submitData(name, email){
return fetch("http://localhost:3000/users", {
  method: "POST",//make a post request
  headers: {
    "Content-Type":"application/json",// tell server we are sending json
    "Accept": "application/json",// to respond JSON
  },
  body:JSON.stringify({name, email}),//convert javascript object to JSON
})

//handling the response
    .then((response) => response.json())//convert response to json 
     .then((data) => {
        document.body.innerHTML += `<p>ID: ${data.id}</p>`;
      })
      .catch((error) => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
    }
  