// search container in friends pg
function friendsSearchContainer() {
  // search box
  const friendSearchElements = document.querySelector(".search-friends");
  var friendsearch = document.createElement("input");
  friendsearch.setAttribute('id',"friend-search");
  friendsearch.setAttribute('type',"search");
 friendsearch.setAttribute('placeholder',"Search friends . . .");   
  friendSearchElements.appendChild(friendsearch);

  // search button
  var friendSearchBtn = document.createElement("button");
  friendSearchBtn.textContent = "Search ";
  friendSearchBtn.setAttribute('id',"search_btn");
 friendSearchElements.appendChild(friendSearchBtn);
  
  // Handling past requests
  
var pastFriendRequestsBtn = document.createElement("button");
pastFriendRequestsBtn.setAttribute('id', 'past_requests');
pastFriendRequestsBtn.textContent = 'Past Friend \ Requests';
pastFriendRequestsBtn.addEventListener('click', );
friendSearchElements.appendChild(pastFriendRequestsBtn);
}

function friendsPageContainer() {
  
  const friendPageElements = document.querySelector("#friends_pgLabels");
  
  // Handling Incoming Friend Requests
  // accept button
  var acceptRquestBtn = document.createElement("button");
acceptRquestBtn.setAttribute('id', 'requests');
acceptRquestBtn.textContent = 'Accept';
acceptRquestBtn.addEventListener('click', );
friendPageElements.appendChild(acceptRquestBtn);
  
 // decline button
  var declineRquestBtn = document.createElement("button");
declineRquestBtn.setAttribute('id', 'requests');
declineRquestBtn.textContent = 'Decline';
declineRquestBtn.addEventListener('click', );
friendPageElements.appendChild(declineRquestBtn);
  
  // Handling Outgoing Friend Requests
  var sentRquestBtn = document.createElement("button");
sentRquestBtn.setAttribute('id', 'requests');
sentRquestBtn.textContent = 'Unread';
sentRquestBtn.addEventListener('click', );
friendPageElements.appendChild(sentRquestBtn);
  
// Handling Current Friends
  // Unfriend Button
  var unfriendBtn = document.createElement("button");
unfriendBtn.setAttribute('id', 'requests');
unfriendBtn.textContent = 'Unfriend';
unfriendBtn.addEventListener('click', );
friendPageElements.appendChild(unfriendBtn);
  
  // View Profile 
  var viewProfileBtn = document.createElement("button");
viewProfileBtn.setAttribute('id', 'requests');
viewProfileBtn.textContent = 'Profile';
viewProfileBtn.addEventListener('click', );
friendPageElements.appendChild(viewProfileBtn);
  
}
