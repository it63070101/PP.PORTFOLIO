const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// navbar mobile
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav__list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const toggleItem = (item) =>{
    const AccordianContent = item.querySelector('.acc_content');

    if(item.classList.contains('acc-open')){
        AccordianContent.removeAttribute('style');
        item.classList.remove('acc-open');
    }else{
        AccordianContent.style.height = AccordianContent.scrollHeight + 'px';
        item.classList.add('acc-open');
    }
}

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        mail: document.getElementById('mail').value,
        msg: document.getElementById('msg').value,
    };

const serviceID = "service_2tstjdx";
const templateID = "template_e5by24a";

    emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("msg").value = "";
            console.log(res);
            alert("Your message sent successfully");
        }
    )
    .catch((err)=>console.log(err));
}
