const userSearchInput = document.getElementById("user-search");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  let resultFromAPI = getUserFromAPI(userSearchInput.value);
  console.log(resultFromAPI);
});

function getUserFromAPI(userName) {
  return fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
