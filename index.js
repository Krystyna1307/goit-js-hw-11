/* empty css                      */import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",l="46029261-5480acfc9fcdffed316bd43c0";function p(a){return a.map(s=>`<li class="li-gallery">
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
        </li>`).join("")}const f=document.querySelector(".js-search-form"),c=document.querySelector(".gallery"),d=document.getElementById("loader"),g=new m(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"});f.addEventListener("submit",y);function y(a){a.preventDefault();const s=a.currentTarget,{searchValue:{value:o}}=s.elements,i=o.trim();if(i===""){n.show({message:"Please fill search input",position:"topCenter",color:"yellow"});return}const e={key:l,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"},r=new URLSearchParams(e);c.innerHTML="",d.classList.remove("hidden"),fetch(`${u}?key=${l}&${r}`).then(t=>{if(!t.ok)throw new Error("Something went wrong");return t.json()}).then(t=>{if(!t.hits||t.hits.length===0){n.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"});return}c.insertAdjacentHTML("beforeend",p(t.hits)),g.refresh()}).catch(t=>{console.log(t)}).finally(()=>{d.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
