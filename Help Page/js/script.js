
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
let overlay = document.querySelector("#postcard-see-more-popup-overlay");
overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  let create_post_popup = document.querySelector("#create-post-popup");
  create_post_popup.classList.add("hidden");
})
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
// Help Specific
let title = document.querySelector('.start .title');
let main_body = document.querySelector('.main-body');
main_body.addEventListener('scroll', function () {
  let value = main_body.scrollTop;
  title.style.marginTop = `${value}px`;
});
