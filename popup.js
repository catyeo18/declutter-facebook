function sendMsg(msg) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      greeting: msg,
    });
  });
}

// Clear localStorage on refresh
window.onload = window.localStorage.clear();

// Toggle settings: change popup toggle, enabled/disabled, and localStorage toggle state
document.addEventListener('DOMContentLoaded', function () {
  var state = localStorage.getItem("toggleState");
  if (state == "true") {
    document.getElementById("switch").checked = true
    document.getElementById("switchLabel").innerHTML = "Enabled"
    console.log("toggled");
  }

  var switchBtn = document.getElementById("switch")

  switchBtn.addEventListener("click", function () {
    if (document.getElementById("switch").checked) {
      document.getElementById("switchLabel").innerHTML = "Disabled"
      localStorage.setItem("toggleState", "false");
      sendMsg("switch1")
    } else {
      document.getElementById("switchLabel").innerHTML = "Enabled"
      localStorage.setItem("toggleState", "true");
      sendMsg("switch2")
    }
  })
})