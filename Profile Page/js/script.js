
// sidebar seemore implementation
let seeMore = document.querySelector("#see-more");
let seeLess = document.querySelector("#see-less");
seeMore.addEventListener("click", () => {
  let hiddenPart = document.querySelector("#hidden-top-sidebar");
  hiddenPart.classList.remove("hidden");
  let seeLess = document.querySelector("#see-less");
  seeMore.classList.add("hidden");
  seeLess.classList.remove("hidden");
});
seeLess.addEventListener("click", () => {
  let hiddenPart = document.querySelector("#hidden-top-sidebar");
  hiddenPart.classList.add("hidden");
  let seeMore = document.querySelector("#see-more");
  seeMore.classList.remove("hidden");
  seeLess.classList.add("hidden");
});
// comment section implementation
let arr_postcard_comment = document.querySelectorAll(".comment-icon");
for (let postcard_comment of arr_postcard_comment) {
  postcard_comment.addEventListener("click", () => {
    let hidden_comment_section =
      postcard_comment.parentElement.parentElement.nextElementSibling;
    hidden_comment_section.classList.toggle('active-popup');
    if (hidden_comment_section.classList.contains("hidden")) {
      postcard_comment.parentElement.parentElement.parentElement.parentElement.classList.toggle('translate-left');
      hidden_comment_section.classList.remove("hidden");
    } else {
      postcard_comment.parentElement.parentElement.parentElement.parentElement.classList.toggle('translate-left');
      let scroll_section = hidden_comment_section.children[1];
      scroll_section.scrollTop = 0;
      hidden_comment_section.classList.add("hidden");
    }
  });
}
//create post implementation
let arr_create_post_button = document.querySelectorAll(".create-post-button");
for (let create_post_button of arr_create_post_button) {
  create_post_button.addEventListener("click", () => {
    let create_post_popup = document.querySelector("#create-post-popup");
    create_post_popup.classList.remove("hidden");
    create_post_popup.classList.add("active-popup");
    let overlay = document.querySelector("#postcard-see-more-popup-overlay");
    overlay.classList.remove("hidden");
  });
}
let create_post_popup_close = document.querySelector(
  "#create-post-popup-close"
);
create_post_popup_close.addEventListener("click", () => {
  create_post_popup_close.parentElement.classList.add("hidden");
  let overlay = document.querySelector("#postcard-see-more-popup-overlay");
  overlay.classList.add("hidden");
});
// account popup 
let account_popup = document.querySelector('#account-popup');
let top_nav_account_button = document.querySelector('#top-nav-account-button');
top_nav_account_button.addEventListener('click', () => {
  let account_popup = document.querySelector('#account-popup');
  if (account_popup.classList.contains('hidden')) {
    let icon = top_nav_account_button.children[0].children[0];
    icon.classList.add('active-scale');
    let transparent_overlay = document.querySelector('#transparent-overlay');
    transparent_overlay.classList.remove('hidden');
  } else {
    let icon = top_nav_account_button.children[0].children[0];
    icon.classList.remove('active-scale');
  }
  account_popup.classList.toggle('hidden');
})
let transparent_overlay = document.querySelector('#transparent-overlay');
transparent_overlay.addEventListener('click', () => {
  let account_popup = document.querySelector('#account-popup');
  transparent_overlay.classList.add('hidden');
  account_popup.classList.add('hidden');
  let icon = top_nav_account_button.children[0].children[0];
  icon.classList.remove('active-scale');
  let notification_popup = document.querySelector('#notification-popup');
  if (!notification_popup.classList.contains('hidden')) {
    notification_popup.classList.add('hidden');
    let top_nav_notification_button = document.querySelector('#top-nav-notification-button');
    top_nav_notification_button.classList.remove('notification-button-active');
    top_nav_notification_button.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.add("fill-lightpurple");
    top_nav_notification_button.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.remove("fill-navhoverfill");
    let notification_more_popup = document.querySelector('#notification-more-popup');
    notification_more_popup.classList.add('hidden');
    let transparent_overlay_notification_popup = document.querySelector('#transparent-overlay-notification-popup');
    transparent_overlay_notification_popup.classList.add('hidden');
    let notification_div = document.querySelector('#notification-div');
    let arr_ndiv_children = notification_div.children;
    for (let child of arr_ndiv_children) {
      let firstchild = child.children[0];
      firstchild.classList.add('hidden');
    }
  }
})
// notification popup
let top_nav_notification_button = document.querySelector('#top-nav-notification-button');
top_nav_notification_button.addEventListener('click', () => {
  let notification_popup = document.querySelector('#notification-popup');
  notification_popup.classList.remove('hidden');
  let transparent_overlay = document.querySelector('#transparent-overlay');
  transparent_overlay.classList.remove('hidden');
  top_nav_notification_button.classList.add('notification-button-active');
  top_nav_notification_button.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.remove("fill-lightpurple");
  top_nav_notification_button.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.add("fill-navhoverfill");
})
let notification_more_button = document.querySelector('#notification-more-button');
notification_more_button.addEventListener('click', () => {
  let notification_more_popup = document.querySelector('#notification-more-popup');
  notification_more_popup.classList.remove('hidden');
  let transparent_overlay_notification_popup = document.querySelector('#transparent-overlay-notification-popup');
  transparent_overlay_notification_popup.classList.remove('hidden');
})
let transparent_overlay_notification_popup = document.querySelector('#transparent-overlay-notification-popup');
transparent_overlay_notification_popup.addEventListener('click', () => {
  transparent_overlay_notification_popup.classList.add('hidden');
  let notification_more_popup = document.querySelector('#notification-more-popup');
  notification_more_popup.classList.add('hidden');
  let arr_single_notification_more_popup = document.querySelectorAll('#single-notification-more-popup');
  for (let single_notification_more_popup of arr_single_notification_more_popup) {
    single_notification_more_popup.classList.add('hidden');
  }
})
let arr_single_notification_more_button = document.querySelectorAll('#single-notification-more-button');
for (let single_notification_more_button of arr_single_notification_more_button) {
  single_notification_more_button.addEventListener('click', () => {
    let single_notification_more_popup = single_notification_more_button.parentElement.children[0];
    single_notification_more_popup.classList.remove('hidden');
    let transparent_overlay_notification_popup = document.querySelector('#transparent-overlay-notification-popup');
    transparent_overlay_notification_popup.classList.remove('hidden');
  })
}
// follower and following
let connections_button = document.querySelector('#connections-button');
connections_button.addEventListener('click', () => {
  let follower_following_popup = document.querySelector('#follower-following-popup');
  follower_following_popup.classList.remove('hidden');
  let overlay = document.querySelector('#postcard-see-more-popup-overlay');
  overlay.classList.remove('hidden');
})
let overlay = document.querySelector('#postcard-see-more-popup-overlay');
overlay.addEventListener('click', () => {
  let follower_following_popup = document.querySelector('#follower-following-popup');
  follower_following_popup.classList.add('hidden');
  overlay.classList.add('hidden');
})
// saved, liked, posts implementation
let post_sec_button = document.querySelector('#post-sec-button');
let liked_sec_button = document.querySelector('#liked-sec-button');
let saved_sec_button = document.querySelector('#saved-sec-button');
let posts_container = document.querySelector('#posts-container');
let liked_container = document.querySelector('#liked-container');
let saved_container = document.querySelector('#saved-container');
post_sec_button.addEventListener('click', () => {
  post_sec_button.classList.add('selected-sec');
  liked_sec_button.classList.remove('selected-sec');
  saved_sec_button.classList.remove('selected-sec');
  posts_container.classList.remove('hidden');
  liked_container.classList.add('hidden');
  saved_container.classList.add('hidden');

})
liked_sec_button.addEventListener('click', () => {
  post_sec_button.classList.remove('selected-sec');
  liked_sec_button.classList.add('selected-sec');
  saved_sec_button.classList.remove('selected-sec');
  posts_container.classList.add('hidden');
  liked_container.classList.remove('hidden');
  saved_container.classList.add('hidden');

})
saved_sec_button.addEventListener('click', () => {
  post_sec_button.classList.remove('selected-sec');
  liked_sec_button.classList.remove('selected-sec');
  saved_sec_button.classList.add('selected-sec');
  posts_container.classList.add('hidden');
  liked_container.classList.add('hidden');
  saved_container.classList.remove('hidden');

})
// postcard seemore implementation
let arr_postcard_more = document.querySelectorAll("#postcard-more");
for (let postcard_more of arr_postcard_more) {
  postcard_more.addEventListener("click", () => {
    let see_more_popup = document.querySelector("#postcard-see-more-popup");
    see_more_popup.classList.remove("hidden");
    let see_more_popup_overlay = document.querySelector(
      "#postcard-see-more-popup-overlay"
    );
    see_more_popup_overlay.classList.remove("hidden");
  });
}
let postcard_seemore_popup_overlay = document.querySelector(
  "#postcard-see-more-popup-overlay"
);
postcard_seemore_popup_overlay.addEventListener("click", () => {
  let arr_active_popups = document.querySelectorAll(".active-popup");
  for (let i of arr_active_popups) {
    if (i.id === 'hidden-comment-section') {
      i.parentElement.parentElement.classList.remove('translate-left');
    }
    i.classList.remove('active-popup');
    i.classList.add("hidden");
  }
  let see_more_popup = document.querySelector("#postcard-see-more-popup");
  see_more_popup.classList.add("hidden");
  postcard_seemore_popup_overlay.classList.add("hidden");
  let edit_popup = document.querySelector('#edit-popup');
  edit_popup.classList.add('hidden');
});
let postcard_seemore_popup_close = document.querySelector(
  "#postcard-seemore-popup-close"
);
postcard_seemore_popup_close.addEventListener("click", () => {
  let see_more_popup = document.querySelector("#postcard-see-more-popup");
  see_more_popup.classList.add("hidden");
  postcard_seemore_popup_overlay.classList.add("hidden");
});
//share post popup
let arr_post_share_button = document.querySelectorAll('.post-share-button');
for (let post_share_button of arr_post_share_button) {
  post_share_button.addEventListener('click', () => {
    // post_share_button.parentElement.parentElement.parentElement.parentElement.classList.toggle('translate-left');
    let post_share_popup = post_share_button.parentElement.parentElement.nextElementSibling.nextElementSibling;
    post_share_popup.classList.toggle('active-popup');
    post_share_popup.classList.toggle('hidden');
  })
}
// direct share on share popup
let arr_direct_share_on_share_button = document.querySelectorAll('#direct-share-on-share-button');
for (let direct_share_on_share_button of arr_direct_share_on_share_button) {
  direct_share_on_share_button.addEventListener('click', () => {
    let direct_share_on_share_popup = direct_share_on_share_button.parentElement.parentElement.nextElementSibling;
    direct_share_on_share_popup.classList.remove('hidden');
    direct_share_on_share_popup.classList.add('active-popup');
    let overlay = document.querySelector("#postcard-see-more-popup-overlay");
    overlay.classList.remove('hidden');
  })
}
let arr_direct_share_on_share_close = document.querySelectorAll('#direct-share-on-share-close');
for (let direct_share_on_share_close of arr_direct_share_on_share_close) {
  direct_share_on_share_close.addEventListener('click', () => {
    let direct_share_on_share_popup = direct_share_on_share_close.parentElement;
    let overlay = document.querySelector("#postcard-see-more-popup-overlay");
    direct_share_on_share_popup.classList.add('hidden');
    overlay.classList.add('hidden')
  })
}
// Edit Profile popup
let edit_profile_button = document.querySelector('#edit-profile-button');
edit_profile_button.addEventListener('click', () => {
  let edit_popup = document.querySelector('#edit-popup');
  edit_popup.classList.remove('hidden');
  let overlay = document.querySelector("#postcard-see-more-popup-overlay");
  overlay.classList.remove('hidden');
})
