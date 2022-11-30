/**
* MAIN FEED PAGE
*/

// Main feed page elements
const findElements = document.querySelector(".userInputs");
const hamburgerBtn= document.querySelector(".btns");

// Creates elements in the hamurgerMenu
function hamburgerItems() {
  var posts = document.createElement("a");
  posts.textContent = "Posts"; 
  findElements.appendChild(posts);
  
  var groups = document.createElement("a");
  groups.textContent = "Groups"; 
  findElements.appendChild(groups);
  
  var friends = document.createElement("a");
  friends.textContent = "Friends"; 
  findElements.appendChild(friends);
  
  var blocked = document.createElement("a");
  blocked.textContent = "Blocked"; 
  findElements.appendChild(blocked);
  
  var logout = document.createElement("a");
  logout.textContent = "Logout"; 
  findElements.appendChild(logout);
}

// opens & closes hamburgermenu
function toggleMenu() {
  const closeBtn= document.querySelector("#closeBtn");
  const openBtn = document.querySelector("#openBtn");
  if (findElements.classList.contains("showMenu")) {
    findElements.classList.remove("showMenu");
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  } 
  else {
    findElements.classList.add("showMenu");
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
  }
}

// search container in main feed pg
function searchContainer() {
  // search box
  const searchElements = document.querySelector(".search-container");
  var search = document.createElement("input");
  search.setAttribute('id',"search_box");
  search.setAttribute('type',"search");
  search.setAttribute('placeholder',"search . . .");   
  searchElements.appendChild(search);
  
  // search button
  var searchBtn = document.createElement("button");
  searchBtn.textContent = "Search ";
  searchBtn.setAttribute('id',"search_btn");
  searchElements.appendChild(searchBtn);
  
  // New post button
  var newPostBtn = document.createElement("button");
  newPostBtn.textContent = "Make a New Post";
  newPostBtn.setAttribute('id',"newPost_btn");
  searchElements.appendChild(newPostBtn);
}

// post elements in main feed pg
function postContent() {
  const postContents = document.querySelector(".post_content");

  // post title
  var postTitle = document.createElement("div");
  postTitle.setAttribute('id',"post_title");
  postTitle.setAttribute('type',"text");
  postContents.appendChild(postTitle);
  
  // post text
  var postText = document.createElement("div");
  postText.setAttribute('id',"post_txt");
  postText.setAttribute('type',"text");
  postContents.appendChild(postText);
  
  // post image
  var postImg = document.createElement("div");
  postImg.setAttribute('id',"post_img");
  postImg.setAttribute('type',"image");
  postContents.appendChild(postImg);

  // post reactions 
  var postRxn = document.createElement("div");
  postRxn.setAttribute('id',"post_rxn");
  postContents.appendChild(postRxn);
  
  var dislikeBtn = document.createElement("button");
  dislikeBtn.setAttribute('class',"fa fa-thumbs-down");
  
  // Like button 
  var count_no = 1;
  var likeNo = document.createElement("number");
  var likeBtn = document.createElement("button");
  likeBtn.setAttribute('class',"fa fa-thumbs-up");
  likeBtn.onclick = function() {
    dislikeBtn.style.color = "black";
    likeBtn.style.color = "#219ebc";
    likeNo.textContent = count_no++;
  }; 
  postRxn.appendChild(likeBtn);
  postRxn.appendChild(likeNo);
  
  // Dislike button 
  dislikeBtn.onclick = function() {
    likeBtn.style.color = "black";
    dislikeBtn.style.color = "#219ebc";
    likeNo.textContent = --count_no;
  };
  postRxn.appendChild(likeNo);
  postRxn.appendChild(dislikeBtn);  
}


function mainFeedPg() {
  hamburgerBtn.addEventListener("click", toggleMenu);
  hamburgerItems();
  searchContainer();
  postContent();
}
mainFeedPg();


