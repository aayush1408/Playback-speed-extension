chrome.browserAction.onClicked.addListener((tab)=>{
  let message = 'Hello';
  // to send the message to the current tab 
  chrome.tabs.sendMessage(tab.id, message);
});