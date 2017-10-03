// grabbing the search query when users submits it
const form = document.querySelector(".searchField");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // prevent page from reloading when form is submitted
  event.preventDefault();
  const input = document.querySelector(".searchField-input").value;

  form.reset();
}

// get the JSON data from a file
function getJSON(url) {
  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.status == 200){
      if (x.readyState == XMLHttpRequest.DONE) {

        var a = x.response;   //object

        var filteredResults = [];
        filteredResults = filter(a, "Smart");
        console.log(typeof(filteredResults));
        console.log(filteredResults);
      }
    }
  };
      //other methods can be implemented here
  x.open('GET', url);
  x.responseType = 'json';
  x.send();
}

getJSON('/data.json');


function filter(jsonObj, text) {
  var carList = jsonObj["cars"]; //5 objects
  for (let index = 0; index < carList.length; ++index){
    if (carList[index].name.search(text) != -1) {
      return carList[index];
    }
  }
}
