import{a as w,S as O,i as $}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const P="52413922-df6c611514e1fbd211f3ba691",m=15;async function p(e,o=1){const{data:a}=await w("https://pixabay.com/api/",{params:{key:P,q:e,page:o,per_page:m,image_type:"photo",orientation:"horizontal",safesearch:!0}});return a}let B=new O(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){const o=document.querySelector(".gallery"),a=e.map(({webformatURL:s,largeImageURL:t,tags:r,likes:i,views:b,comments:S,downloads:q})=>`
            <li class="photo-card">
                <a href="${t}">
                    <img src="${s}" alt="${r}"  class="img-card"/>
                </a>
                <div class="photo-info">
                    <div class="info-item">
                        <span class="label">Likes</span>
                        <span class="value">${i}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Views</span>
                        <span class="value">${b}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Comments</span>
                        <span class="value">${S}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Downloads</span>
                        <span class="value">${q}</span>
                    </div>
                </div>          
            </li>
            `).join("");o.insertAdjacentHTML("beforeend",a),B.refresh()}function E(){document.querySelector(".gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}function M(){document.querySelector(".moreBtn").classList.remove("hidden")}function d(){document.querySelector(".moreBtn").classList.add("hidden")}const u=document.querySelector(".form"),f=document.querySelector(".moreBtn");let l,n;u.addEventListener("submit",R);f.addEventListener("click",x);async function R(e){if(e.preventDefault(),n=1,E(),l=e.target.elements["search-text"].value.trim(),l===""){c("Sorry, you didn’t enter any value!"),u.reset();return}h();try{const o=await p(l,n);if(o.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!"),d();return}y(o.hits),u.reset(),v(o,n,m)?L():M()}catch(o){c(`EROR, ${o}`),console.log(o),d()}finally{g()}}async function x(){n+=1,f.disabled=!0,h();try{const e=await p(l,n);y(e.hits),v(e,n,m)&&L()}catch(e){c(`EROR, ${e}`),console.log(e)}finally{f.disabled=!1,g()}}function c(e){$.error({message:e,position:"topRight",backgroundColor:"#EF4040",messageColor:"#ffffff"})}function v(e,o,a){const s=Math.ceil(e.totalHits/a);return o>=s}function L(){d(),c("We're sorry, but you've reached the end of search results.")}
//# sourceMappingURL=index.js.map
