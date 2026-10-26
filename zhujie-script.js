const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#main-nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);menuButton.querySelector('span').textContent=open?'−':'+';});
const dialog=document.querySelector('.lightbox');
let trigger;
document.querySelectorAll('.image-open').forEach(button=>button.addEventListener('click',()=>{trigger=button;const image=dialog.querySelector('img');image.src=button.dataset.image;image.alt=button.dataset.alt;dialog.querySelector('p').textContent=button.closest('figure').querySelector('figcaption').textContent;dialog.showModal();}));
document.querySelector('.close-lightbox')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog?.addEventListener('close',()=>trigger?.focus());

const weekNavigation=document.querySelector('.week-nav');
const activeWeek=weekNavigation?.querySelector('[aria-current]');
if(weekNavigation&&activeWeek&&weekNavigation.scrollWidth>weekNavigation.clientWidth){weekNavigation.scrollLeft=activeWeek.offsetLeft-(weekNavigation.clientWidth-activeWeek.clientWidth)/2;}
