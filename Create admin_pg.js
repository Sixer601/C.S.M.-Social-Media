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

function loadAdminage() {
  const title = document.querySelector('#pg_title');
  const adminContent = document.querySelector('#ad-pg_contents');
  const settingsContent = document.querySelector('.admin-settings');
  
// Handling Pending Users Button
    const appDnyButton = document.createElement('button'); appDnyButton.setAttribute('id', 'user-inputs');
appDnyButton.textContent = 'Approve/Deny';
appDnyButton.addEventListener('click', );


// Disable Enabled Users Button
    const disableEnabledButton = document.createElement('button'); disableEnabledButton.setAttribute('id', 'align-cont');
disableEnabledButton.textContent = 'Disable';
disableEnabledButton.addEventListener('click', );
   
// Enable Disabled Users Button
    const enableDisabledButton = document.createElement('button'); enableDisabledButton.setAttribute('id', 'align-cont');
enableDisabledButton.textContent = 'Enable';
enableDisabledButton.addEventListener('click', );
  
}
