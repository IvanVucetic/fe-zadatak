// grabbing the search query when users submits it
const form = document.querySelector(".searchField");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // prevent page from reloading when form is submitted
  event.preventDefault();
  const input = document.querySelector(".searchField-input").value;
  form.reset();
  getJSON('/data.json', input);
}

// get the JSON data from a file
function getJSON(url, searchText) {
  var x = new XMLHttpRequest();
  x.onreadystatechange = function(){
    if(x.status == 200){
      if (x.readyState == XMLHttpRequest.DONE) {

        var a = x.response;   //object

        var filteredResults = [];
        if (searchText == "") {
          filteredResults = a["cars"];
        } else {
          filteredResults = filter(a, searchText);
        }


        // filteredResults = filter(a, input);
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

//initial load of page, no search yet
getJSON('/data.json',"");


function filter(jsonObj, text) {
  var carList = jsonObj["cars"]; //5 objects
  for (let index = 0; index < carList.length; ++index){
    if (carList[index].name.search(text) != -1) {
      return carList[index];
    }
  }
}
