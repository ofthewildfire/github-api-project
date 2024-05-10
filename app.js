const userSearchInput = document.getElementById("user-search");
const searchButton = document.getElementById("search-button");

// user content elements

const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");
const userLogin = document.getElementById("user-login");
const userBio = document.getElementById("user-bio");
const userLocation = document.getElementById("user-location");
const userRepos = document.getElementById("user-repos");
const userFollowers = document.getElementById("user-followers");
const userFollowing = document.getElementById("user-following");
const userCreatedAt = document.getElementById("user-createdAt");
const userTwitter = document.getElementById("user-twitter");
const userBlog = document.getElementById("user-blog");
const userCompany = document.getElementById("user-company");
const dummyBioText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, tempora doloribus! Nobis totam, blanditiis cupiditate assumenda. Quisquam, quos. Quisquam, quos.";

// Search button event listener
searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  let data = await populateHTML(getUserFromAPI(userSearchInput.value));
  // Date checks
  let newDate = new Date(data.created_at);
  console.log();
  //
  userLogin.textContent = `@${data.login}`;
  userName.textContent = data.name;
  userAvatar.src = data.avatar_url;
  userCreatedAt.textContent = `Joined ${newDate
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ")}`;
  userBio.textContent = data.bio ? data.bio : dummyBioText;
  userRepos.textContent = data.public_repos;
  userFollowers.textContent = data.followers;
  userFollowing.textContent = data.following;
  userLocation.textContent = data.location ? data.location : "Not Available";
  userTwitter.textContent = data.twitter_username
    ? data.twitter_username
    : "Not Available";
  userTwitter.href = data.twitter_username
    ? `https://twitter.com/${data.twitter_username}`
    : "#";
  userBlog.href = data.blog ? data.blog : "#";
  userBlog.textContent = data.blog ? data.blog : "Not Available";
  userCompany.textContent = data.company ? data.company : "Not Available";
  console.log(data);
  userSearchInput.value = "";
});

async function getUserFromAPI(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const data = await response.json();
  return data;
}

function populateHTML(data) {
  return data;
}

getUserFromAPI("octocat").then((data) => {
  let newDate = new Date(data.created_at);
  userLogin.textContent = `@${data.login}`;
  userName.textContent = data.name;
  userAvatar.src = data.avatar_url;
  userCreatedAt.textContent = `Joined ${newDate
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ")}`;
  userBio.textContent = data.bio ? data.bio : dummyBioText;
  userRepos.textContent = data.public_repos;
  userFollowers.textContent = data.followers;
  userFollowing.textContent = data.following;
  userLocation.textContent = data.location ? data.location : "Not Available";
  userTwitter.textContent = data.twitter_username
    ? data.twitter_username
    : "Not Available";
  userTwitter.href = data.twitter_username
    ? `https://twitter.com/${data.twitter_username}`
    : "#";
  userBlog.href = data.blog ? data.blog : "#";
  userBlog.textContent = data.blog ? data.blog : "Not Available";
  userCompany.textContent = data.company ? data.company : "Not Available";
});
