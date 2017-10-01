// grabbing the search query when users submits it
const form = document.querySelector(".searchField");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // prevent page from reloading when form is submitted
  event.preventDefault();
  const input = document.querySelector(".searchField-input").value;
  console.log(input);
  form.reset();
}
