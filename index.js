import{a as b,S as L,i as S}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const q="52413922-df6c611514e1fbd211f3ba691";async function f(t,s=1){const{data:r}=await b("https://pixabay.com/api/",{params:{key:q,q:t,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r}let w=new L(".gallery a",{captionsData:"alt",captionDelay:250});function p(t){const s=document.querySelector(".gallery"),r=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:a,views:h,comments:g,downloads:v})=>`
            <li class="photo-card">
                <a href="${e}">
                    <img src="${i}" alt="${o}"  class="img-card"/>
                </a>
                <div class="photo-info">
                    <div class="info-item">
                        <span class="label">Likes</span>
                        <span class="value">${a}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Views</span>
                        <span class="value">${h}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Comments</span>
                        <span class="value">${g}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Downloads</span>
                        <span class="value">${v}</span>
                    </div>
                </div>          
            </li>
            `).join("");s.insertAdjacentHTML("beforeend",r),w.refresh()}function $(){document.querySelector(".gallery").innerHTML=""}function m(){document.querySelector(".loader").classList.remove("hidden")}function y(){document.querySelector(".loader").classList.add("hidden")}const u=document.querySelector(".form"),O=document.querySelector(".searchBtn"),c=document.querySelector(".moreBtn");let l,n;u.addEventListener("submit",E);c.addEventListener("click",P);function E(t){if(t.preventDefault(),n=32,O.disabled=!0,$(),l=t.target.elements["search-text"].value.trim(),l===""){d("Sorry, you didn’t enter any value!"),u.reset();return}m(),f(l,n).then(s=>{if(s.hits.length===0){d("Sorry, there are no images matching your search query. Please try again!");return}p(s.hits),console.log(s.hits),c.classList.remove("hidden")}).catch(s=>{d(`EROR, ${s}`),console.log(s)}).finally(()=>{y()}),u.reset()}async function P(){n+=1,c.disabled=!0,m();try{const t=await f(l,n);console.log(t),console.log(n),p(t.hits)}catch(t){console.log(t)}finally{c.disabled=!1,y()}}function d(t){S.error({message:t,position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"})}
//# sourceMappingURL=index.js.map
