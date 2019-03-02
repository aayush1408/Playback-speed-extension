chrome.runtime.onMessage.addListener((playbackRate)=> {
  document.querySelectorAll('video').forEach((item)=> {
    item.playbackRate = playbackRate;
  }); 
});