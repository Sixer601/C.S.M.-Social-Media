onPageLoad();

function onPageLoad() {
        routePage();
        setupEventListeners();
      }

function setupEventListeners() {
    // List for page navigation events and call routing function when they happen
    addEventListener('popstate', (event) => {
        routePage();
    });
}

// search container in blocked pg
function blockedSearchContainer() {
  
  // search box
  const blockedSearchElements = document.querySelector(".search-requests");
  var blockedsearch = document.createElement("input");
  blockedsearch.setAttribute('id',"friend-search");
  blockedsearch.setAttribute('type',"search");
  blockedsearch.setAttribute('placeholder',"Search . . .");   
  blockedSearchElements.appendChild(blockedsearch);

  // search button
  var blockedSearchBtn = document.createElement("button");
  blockedSearchBtn.textContent = "Search ";
  blockedSearchBtn.setAttribute('id',"search_btn");
  blockedSearchElements.appendChild(blockedSearchBtn);
  
}

// blocked users container
function blockedUsersContainer() {

// unblcock button
var unblockButton = document.createElement("button");
unblockButton.setAttribute('id', 'requester');
unblockButton.textContent = 'Unblock';
unblockButton.addEventListener('click', );
  
  }
