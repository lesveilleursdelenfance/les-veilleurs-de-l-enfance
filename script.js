
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert("Merci pour votre message. Le formulaire est actuellement en mode démonstration et sera activé lors de la mise en ligne.");
    form.reset();
  });
});
