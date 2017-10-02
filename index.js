// grabbing the search query when users submits it
const form = document.querySelector(".searchField");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // prevent page from reloading when form is submitted
  event.preventDefault();
  const input = document.querySelector(".searchField-input").value;
  console.log(input); //delete this later
  form.reset();
}

// get the JSON data from a file
function getJSON(url) {
  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.status == 200){
      if (x.readyState == XMLHttpRequest.DONE) {
        // console.log(x.responseText);
        var a = x.response;   //object
        alert(a["cars"][0]["name"]);   //fiat punto - works!
      }
    }
  };
      //other methods can be implemented here
  x.open('GET', url);
  x.responseType = 'json';
  x.send();
}

getJSON('/data.json');
