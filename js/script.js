// sidebar seemore implementation
let seeMore=document.querySelector('#see-more');
let seeLess=document.querySelector('#see-less');
seeMore.addEventListener('click',() =>{
    let hiddenPart=document.querySelector('#hidden-top-sidebar');
    hiddenPart.classList.remove('hidden');
    let seeLess=document.querySelector('#see-less');
    seeMore.classList.add('hidden');
    seeLess.classList.remove('hidden');
})
seeLess.addEventListener('click',() =>{
    let hiddenPart=document.querySelector('#hidden-top-sidebar');
    hiddenPart.classList.add('hidden');
    let seeMore=document.querySelector('#see-more');
    seeMore.classList.remove('hidden');
    seeLess.classList.add('hidden');
})
// postcard seemore implementation
let arr_postcard_more=document.querySelectorAll('#postcard-more');
for(let postcard_more of arr_postcard_more){
    postcard_more.addEventListener('click',() => {
        let see_more_popup=document.querySelector('#postcard-see-more-popup');
        see_more_popup.classList.remove('hidden');
        let see_more_popup_overlay=document.querySelector('#postcard-see-more-popup-overlay');
        see_more_popup_overlay.classList.remove('hidden');
    })
}
let postcard_seemore_popup_overlay=document.querySelector("#postcard-see-more-popup-overlay");
postcard_seemore_popup_overlay.addEventListener('click', () => {
    let see_more_popup=document.querySelector('#postcard-see-more-popup');
    see_more_popup.classList.add('hidden');
    postcard_seemore_popup_overlay.classList.add('hidden');
})
let postcard_seemore_popup_close=document.querySelector('#postcard-seemore-popup-close');
postcard_seemore_popup_close.addEventListener('click', () => {
    let see_more_popup=document.querySelector('#postcard-see-more-popup');
    see_more_popup.classList.add('hidden');
    postcard_seemore_popup_overlay.classList.add('hidden');
})
// comment section implementation
let arr_postcard_comment=document.querySelectorAll(".comment-icon");
for(let postcard_comment of arr_postcard_comment){
    postcard_comment.addEventListener('click', () =>{
        let hidden_comment_section=postcard_comment.parentElement.parentElement.nextElementSibling;
        if(hidden_comment_section.classList.contains('hidden')){
            hidden_comment_section.classList.remove('hidden');
        }else{
            let scroll_section=hidden_comment_section.children[1];
            scroll_section.scrollTop=0;
            hidden_comment_section.classList.add('hidden');
        }
    })

}