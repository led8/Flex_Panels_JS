const panels = document.querySelectorAll(".panel");

/* Open JS */
function toggleOpen(event){
  event.currentTarget.classList.toggle('open');
};

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
});

/* Transition JS */
function toggleActive(event){
  if(event.propertyName.includes('flex')){
    event.currentTarget.classList.toggle('open-active');
  };
};

panels.forEach((panel) => {
  panel.addEventListener('transitionend', toggleActive);
});
