function hideComponent(selector) {
  var component_list = document.querySelectorAll(selector)
  for (i = 0; i < component_list.length; i++) {
    component_list[i].style.display = "none"
  }
}

function showComponent(selector) {
  var component_list = document.querySelectorAll(selector)
  for (i = 0; i < component_list.length; i++) {
    component_list[i].style.display = "contents"
  }
}

function declutter() {
  // darken background
  document.body.style.background = 'rgb(50,50,50)';

  // MAIN TIMELINE 
  // hide left navigation bar
  hideComponent('[role="navigation"]')
  // hide top bar
  hideComponent('[role="banner"]')
  // hide right bar
  hideComponent('[role="complementary"]')
  // hide stories
  hideComponent('[aria-label="Stories"]')
  // hide create a post
  hideComponent('[aria-label="Create a post"]')
  // hide rooms
  hideComponent('[data-pagelet="VideoChatHomeUnit"]')

  // PAGE FOR A SINGLE GROUP
  // hide floating banner
  // hideComponent('[class="rq0escxv lpgh02oy du4w35lb rek2kq2y"]')
}

function clutter() {
  document.body.style.background = '';

  // show left navigation bar
  showComponent('[role="navigation"]')
  // show top bar
  showComponent('[role="banner"]')
  // show right bar
  showComponent('[role="complementary"]')
  // show stories
  showComponent('[aria-label="Stories"]')
  // show create a post
  showComponent('[aria-label="Create a post"]')
  // show rooms
  showComponent('[data-pagelet="VideoChatHomeUnit"]')
}

// Toggle settings and update page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "switch2"){
        declutter()
        console.log("Enabling Plugin");
    }
    if (request.greeting == "switch1"){
        clutter()
        console.log("Disabling Plugin");
    }
  });