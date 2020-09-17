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

// Toggle settings: change popup toggle, enabled/disabled, and localStorage toggle state
document.addEventListener('DOMContentLoaded', function () {
  // Toggle state in localStorage
  var state = localStorage.getItem("toggleState");
  if (state == "true") {
    document.getElementById("switch").checked = true
    document.getElementById("switchLabel").innerHTML = "Enabled"
    console.log("toggled");
  }

  // Toggle main switch settings
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

  // Toggle search switch
  // var switchSearchBtn = document.getElementById("switchSearch")
  // switchSearchBtn.addEventListener("click", function () {
  //   if (document.getElementById("switchSearch").checked) {
  //     // localStorage.setItem("toggleState", "false");
  //     sendMsg("show_search")
  //   } else {
  //     // localStorage.setItem("toggleState", "true");
  //     sendMsg("hide_search")
  //   }
  // })

})