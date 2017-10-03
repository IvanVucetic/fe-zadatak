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


        // filteredResults = filter(a, input); delete later
        console.log(typeof(filteredResults));
        console.log(filteredResults[0]);

        //rendering cars - test:    works!
        document.querySelector('ul').innerHTML = '';
        if (filteredResults.length == undefined) {  //case when there's only one car
          renderCar(filteredResults);
        } else {
          for (var i = 0; i < filteredResults.length; ++i) {
            renderCar(filteredResults[i]);
          }
        }
      }
    }
  };

  x.open('GET', url);
  x.responseType = 'json';
  x.send();
}

// filter cars for searched name, case-sensitive
function filter(jsonObj, text) {
  var carList = jsonObj["cars"]; //5 objects
  for (let index = 0; index < carList.length; ++index){
    if (carList[index].name.search(text) != -1) {
      return carList[index];
    }
  }
}

//render single car as <li>
function renderCar(car) {
  var li = document.createElement('li');
  li.innerHTML = '<h4>' + car.name + '</h4>';
  var ul = document.querySelector('ul');
  ul.appendChild(li);
}


//initial load of page, no search yet
getJSON('/data.json',"");
