import{a as i,l as v}from"./assets/lightbox-DTajK_My.js";/* empty css                      */import{i as a}from"./assets/vendor-D94OL8Qp.js";const E=document.getElementById("search-button"),d=document.querySelector(".gallery"),p=document.querySelector("#search-bar"),t=document.querySelector(".btn__load-more");let o=0,r=!0,c="";E.addEventListener("click",function(e){e.preventDefault(),f(),r=!0});p.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),f()),r=!0});async function f(){const e=p.value.trim();if(i.setQuery(e),e===""){t.classList.add("is-hidden"),l("Будь ласка, заповніть поле пошуку");return}if(e===c){t.classList.add("is-hidden"),l("Будь ласка, змініть або введіть новий запит до поля пошуку.");return}d.innerHTML="",i.resetPage(),c=e,o=0,await h()}async function h(){try{const e=await i.fetchGallery(),{hits:s,totalHits:n}=e;if(!s.length){t.classList.add("is-hidden"),u("Вибачте, немає зображень, які відповідають вашому запиту. Будь ласка, спробуйте ще раз.");return}r&&o<n&&(k(`Ура! Ми знайшли ${n} зображень !!!`),r=!1,t.classList.remove("is-hidden")),L(s),o+=s.length,o>=n&&(t.classList.add("is-hidden"),S("Ви досягли кінця результатів пошуку."))}catch(e){console.error("Помилка отримання галереї:",e),u("Під час отримання галереї сталася помилка.")}}function L(e){const s=e.map(({webformatURL:n,largeImageURL:m,tags:g,likes:y,views:w,downloads:b})=>`
      <div class="photo-card">
        <a href="${m}">
          <img class="photo-img" src="${n}" alt="${g}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span class="info__span">${y}</span></p>
          <p class="info-item"><b>Views</b><span class="info__span">${w}</span></p>
          <p class="info-item"><b>Downloads</b><span class="info__span">${b}</span></p>
        </div>
      </div>`).join("");d.insertAdjacentHTML("beforeend",s),v.refresh()}t.addEventListener("click",async()=>{i.incrementPage(),await h()});function l(e){a.warning({title:"Warning",message:e,position:"topRight",color:"yellow",timeout:4e3,closeOnEscape:!0,closeOnClick:!0})}function u(e){a.error({title:"Error",message:e,position:"topRight",color:"red",timeout:3e3,closeOnEscape:!0,closeOnClick:!0})}function k(e){a.success({title:"Success",message:e,position:"topRight",color:"green",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function S(e){a.info({title:"Info",message:e,position:"topRight",color:"blue",timeout:3e3,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers3.js.map
