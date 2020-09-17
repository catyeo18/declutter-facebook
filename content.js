function hideComponent(selector) {
  var component_list = document.querySelectorAll(selector)
  for (i = 0; i < component_list.length; i++) {
    component_list[i].style.display = "none"
  }
}

/* MAIN TIMELINE */
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