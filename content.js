// hide left navigation bar
var nav_list = document.querySelectorAll('[role="navigation"]')
for (i = 0; i < nav_list.length; i++) {
  nav_list[i].style.display = "none"
}

// hide top bar
document.querySelector('[role="banner"]').style.display = "none"

// hide right bar
document.querySelector('[role="complementary"]').style.display = "none"

// hide stories
document.querySelector('[aria-label="Stories"]').style.display = "none"

// hide create a post
document.querySelector('[aria-label="Create a post"]').style.display = "none"

// hide rooms
document.querySelector('[data-pagelet="VideoChatHomeUnit"]').style.display = "none"


// hide visible comments
// var comments_list = document.querySelectorAll('[role="article"]')
// var comments_list = document.querySelectorAll('[role="button"]')
// for (i = 0; i < comments_list.length; i++) {
//   comments_list[i].style.display = "none"
// }

// hide reacts
// var reacts_list = document.querySelectorAll('[aria-label="See who reacted to this"]')
// for (i = 0; i < reacts_list.length; i++) {
//   reacts_list[i].style.display = "none"
// }

// hide chat bubbles on bottom right corner
// var bubble_list = document.querySelectorAll('[aria-label="Open chat with name"]')
// for (i = 0; i < bubble_list.length; i++) {
//   bubble_list[i].style.display = "none"
// }
// // // hide new message button on bottom right corner
// document.querySelector('[aria-label="New Message"]').style.display = "none"