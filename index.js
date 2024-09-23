/* empty css                      */import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u="https://pixabay.com/api/",c="46029261-5480acfc9fcdffed316bd43c0";function p(a){return a.map(r=>`<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            title="${r.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${r.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${r.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${r.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${r.downloads}</p></div>
        </div>
        </li>`).join("")}const d=document.querySelector(".js-search-form"),l=document.querySelector(".gallery"),f=new m(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"});d.addEventListener("submit",g);function g(a){a.preventDefault();const r=a.currentTarget,{searchValue:{value:o}}=r.elements,i=o.trim();if(i===""){n.show({message:"Please fill search input",position:"topCenter",color:"yellow"});return}const e={key:c,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"},s=new URLSearchParams(e);l.innerHTML="",fetch(`${u}?key=${c}&${s}`).then(t=>{if(!t.ok)throw new Error("Something went wrong");return t.json()}).then(t=>{if(!t.hits||t.hits.length===0){n.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"});return}l.insertAdjacentHTML("beforeend",p(t.hits)),f.refresh()}).catch(t=>{console.log(t)})}
//# sourceMappingURL=index.js.map
