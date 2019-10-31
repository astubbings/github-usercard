/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get("https://api.github.com/users/astubbings")
.then(response => {
  console.log(response);
// response.data.message.forEach(item => {
//     const newDog = DogCard(item)
//     entryPoint.appendChild(newDog)
// })
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function

  data:
    avatar_url: "https://avatars0.githubusercontent.com/u/53932400?v=4"
    bio: "Student at Lambda School "
    blog: ""
    company: null
    created_at: "2019-08-09T07:11:11Z"
    email: null
    events_url: "https://api.github.com/users/astubbings/events{/privacy}"
    followers: 12
    followers_url: "https://api.github.com/users/astubbings/followers"
    following: 11
    following_url: "https://api.github.com/users/astubbings/following{/other_user}"
    gists_url: "https://api.github.com/users/astubbings/gists{/gist_id}"
    gravatar_id: ""
    hireable: null
    html_url: "https://github.com/astubbings"
    id: 53932400
    location: "Utah"
    login: "astubbings"
    name: "Alex S"
    node_id: "MDQ6VXNlcjUzOTMyNDAw"
    organizations_url: "https://api.github.com/users/astubbings/orgs"
    public_gists: 0
    public_repos: 18
    received_events_url: "https://api.github.com/users/astubbings/received_events"
    repos_url: "https://api.github.com/users/astubbings/repos"
    site_admin: false
    starred_url: "https://api.github.com/users/astubbings/starred{/owner}{/repo}"
    subscriptions_url: "https://api.github.com/users/astubbings/subscriptions"
    type: "User"
    updated_at: "2019-10-31T17:27:48Z"
    url: "https://api.github.com/users/astubbings"


   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function githubCard(newProfile) {
  
  //elements
  const ghCard = document.createElement('div');
    const ghImg = document.createElement('img');
    const ghInfo = document.createElement('div');
      const ghName = document.createElement('h3');
      const ghUserName = document.createElement('p');
      const ghLocation = document.createElement('p');
      const ghProfileLink = document.createElement('p');
        const ghProfileLinkAnchor = document.createElement('a');
      const ghFollowers = document.createElement('p');
      const ghFollowing = document.createElement('p');
      const ghBio = document.createElement('p');

  
  //classList

  ghCard.classList.add('card');
  ghInfo.classList.add('card-info');
  ghName.classList.add('name');
  ghUserName.classList.add('username');

  //appending elements
  ghCard.append(ghImg, ghInfo);
  ghInfo.append(ghName, ghUserName, ghLocation, ghProfileLink, ghFollowers, ghFollowing, ghBio)
  ghProfileLink.append(ghProfileLinkAnchor);

  ghImg.src = newProfile.avatar_url;
  ghName.textContent = newProfile.name;
  ghUserName.textContent = newProfile.

return ghCard
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
