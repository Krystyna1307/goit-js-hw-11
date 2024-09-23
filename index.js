/* empty css                      */import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();const m="https://pixabay.com/api/",c="46029261-5480acfc9fcdffed316bd43c0";function p(t){return t.map(s=>`<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${s.largeImageURL}">
            <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="${s.tags}"
            title="${s.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${s.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${s.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${s.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${s.downloads}</p></div>
        </div>
        </li>`).join("")}const d=document.querySelector(".js-search-form"),l=document.querySelector(".gallery"),f=new u(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"});d.addEventListener("submit",g);function g(t){t.preventDefault();const s=t.currentTarget,{searchValue:{value:a}}=s.elements;if(a===""){n.show({message:"Please fill search input",position:"topCenter",color:"yellow"});return}const o={key:c,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},r=new URLSearchParams(o);l.innerHTML="",fetch(`${m}?key=${c}&${r}`).then(e=>{if(!e.ok)throw new Error("Something went wrong");return e.json()}).then(e=>{if(!e.hits||e.hits.length===0){n.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"});return}l.insertAdjacentHTML("beforeend",p(e.hits)),f.refresh()}).catch(e=>{console.log(e)})}
//# sourceMappingURL=index.js.map
