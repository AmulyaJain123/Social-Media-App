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
    i.classList.remove('active-popup');
    i.classList.add("hidden");
  }
  let see_more_popup = document.querySelector("#postcard-see-more-popup");
  see_more_popup.classList.add("hidden");
  postcard_seemore_popup_overlay.classList.add("hidden");
});
let postcard_seemore_popup_close = document.querySelector(
  "#postcard-seemore-popup-close"
);
postcard_seemore_popup_close.addEventListener("click", () => {
  let see_more_popup = document.querySelector("#postcard-see-more-popup");
  see_more_popup.classList.add("hidden");
  postcard_seemore_popup_overlay.classList.add("hidden");
});
// comment section implementation
let arr_postcard_comment = document.querySelectorAll(".comment-icon");
for (let postcard_comment of arr_postcard_comment) {
  postcard_comment.addEventListener("click", () => {
    let hidden_comment_section =
      postcard_comment.parentElement.parentElement.nextElementSibling;
    hidden_comment_section.classList.toggle('active-popup');
    if (hidden_comment_section.classList.contains("hidden")) {
      hidden_comment_section.classList.remove("hidden");
    } else {
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
//share post popup
let arr_post_share_button = document.querySelectorAll('.post-share-button');
for (let post_share_button of arr_post_share_button) {
  post_share_button.addEventListener('click', () => {
    let post_share_popup = post_share_button.parentElement.parentElement.nextElementSibling.nextElementSibling;
    post_share_popup.classList.toggle('active-popup');
    post_share_popup.classList.toggle('hidden');
  })
}
// direct share on share popup
let direct_share_on_share_button = document.querySelector('#direct-share-on-share-button');
direct_share_on_share_button.addEventListener('click', () => {
  let direct_share_on_share_popup = document.querySelector('#direct-share-on-share-popup');
  direct_share_on_share_popup.classList.remove('hidden');
  direct_share_on_share_popup.classList.add('active-popup');
  let overlay = document.querySelector("#postcard-see-more-popup-overlay");
  overlay.classList.remove('hidden');
})
let direct_share_on_share_close = document.querySelector('#direct-share-on-share-close');
direct_share_on_share_close.addEventListener('click', () => {
  let direct_share_on_share_popup = document.querySelector('#direct-share-on-share-popup');
  let overlay = document.querySelector("#postcard-see-more-popup-overlay");
  direct_share_on_share_popup.classList.add('hidden');
  overlay.classList.add('hidden')
})