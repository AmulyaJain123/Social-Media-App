
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
// Post-popup Implementation
let arr_explore_tiles = document.querySelectorAll('.explore-tiles');
for (let explore_tiles of arr_explore_tiles) {
  explore_tiles.addEventListener('click', () => {
    console.dir(explore_tiles.firstElementChild.firstElementChild);
    let str = explore_tiles.firstElementChild.firstElementChild.currentSrc;
    console.log(str);
    let dark_overlay = document.querySelector('#dark-overlay');
    dark_overlay.classList.remove('hidden');
    let post_popup = document.querySelector('#post-popup');
    post_popup.firstElementChild.firstElementChild.firstElementChild.src = str;
    post_popup.classList.remove('hidden');
  })
}
let dark_overlay = document.querySelector('#dark-overlay');
dark_overlay.addEventListener('click', () => {
  let post_popup = document.querySelector('#post-popup');
  post_popup.classList.add('hidden');
  dark_overlay.classList.add('hidden');
})
// Post-seemore popup implementation
let post_more = document.querySelector('#post-more');
post_more.addEventListener('click', () => {
  let blur_overlay_30 = document.querySelector('#blur-overlay-30');
  blur_overlay_30.classList.remove('hidden');
  let post_seemore_popup = document.querySelector('#post-seemore-popup');
  console.log(post_seemore_popup);
  post_seemore_popup.classList.remove('hidden');
})
let blur_overlay_30 = document.querySelector('#blur-overlay-30');
blur_overlay_30.addEventListener('click', () => {
  let post_seemore_popup = document.querySelector('#post-seemore-popup');
  post_seemore_popup.classList.add('hidden');
  blur_overlay_30.classList.add('hidden');
  let post_direct_share_popup = document.querySelector('#post-direct-share-popup');
  post_direct_share_popup.classList.add('hidden');

})
let post_seemore_popup_close = document.querySelector('#post-seemore-popup-close');
post_seemore_popup_close.addEventListener('click', () => {
  post_seemore_popup_close.parentElement.classList.add('hidden');
  let blur_overlay_30 = document.querySelector('#blur-overlay-30');
  blur_overlay_30.classList.add('hidden');
})
// Direct share popup implementation
let post_direct_share_button = document.querySelector('.post-direct-share-button');
post_direct_share_button.addEventListener('click', () => {
  let blur_overlay_30 = document.querySelector('#blur-overlay-30');
  blur_overlay_30.classList.remove('hidden');
  let post_direct_share_popup = document.querySelector('#post-direct-share-popup');
  post_direct_share_popup.classList.remove('hidden');
})
let post_direct_share_popup_close = document.querySelector('#post-direct-share-popup-close');
post_direct_share_popup_close.addEventListener('click', () => {
  post_direct_share_popup_close.parentElement.classList.add('hidden');
  let blur_overlay_30 = document.querySelector('#blur-overlay-30');
  blur_overlay_30.classList.add('hidden');
})