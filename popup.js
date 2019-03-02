const slider = document.getElementById("slider");

slider.addEventListener('change',(e) => {
  const params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params,(tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, e.target.value);
  });
});