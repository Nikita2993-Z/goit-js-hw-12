import{a as w,S as b,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const v="49650117-af312fdd4c8d669445c27b54b",S="https://pixabay.com/api/",P=15;async function q(t,r){return(await w.get(S,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:P}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),i=document.querySelector(".load-more");let B=new b(".gallery a");function E(t){const r=t.map(n=>`
      <li class="gallery-item">
        <a href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>👍 ${n.likes}</p>
          <p>👁️ ${n.views}</p>
          <p>💬 ${n.comments}</p>
          <p>⬇️ ${n.downloads}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",r),B.refresh()}function M(){m.innerHTML=""}function $(){y.classList.remove("is-hidden")}function h(){y.classList.add("is-hidden")}function x(){i&&i.classList.remove("is-hidden")}function p(){i&&i.classList.add("is-hidden")}const d=document.querySelector(".form");let g="",s=1,u=0;h();d.addEventListener("submit",async t=>{t.preventDefault();const r=d.elements.searchQuery.value.trim();r&&(g=r,s=1,M(),p(),$(),await L())});const f=document.querySelector(".load-more");f&&f.addEventListener("click",async()=>{s+=1,await L()});async function L(){try{const t=await q(g,s);if(u=t.totalHits,t.hits.length===0&&s===1){c.info({title:"😢",message:"No images found. Try a different keyword."});return}E(t.hits);const r=Math.ceil(u/15);s<r?x():(p(),c.info({title:"📦",message:"We're sorry, but you've reached the end of search results."})),s>1&&A()}catch{c.error({title:"Error",message:"Something went wrong. Please try again."})}finally{setTimeout(()=>{h()},500)}}function A(){const t=document.querySelector(".gallery li");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
