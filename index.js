function contact(event) {
  event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
     .sendForm(
        'service_47bpmmu',
        'template_ckni4uq',
       event.target,
        'JKEvqk1N4xxF0I6Uj'  
    ).then(() => {
         loading.classList.remove("modal__overlay--visible");
         success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email serivce is currently unavailable. Please contact directly at cloketravis18@gmail.com")
    })
}

let isModalOpen = false;
function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
   document.body.classList += " modal--open"
}

