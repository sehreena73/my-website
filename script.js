 /*========================= toggle icon navbar ===========================*/
let menuIcon = document.querySelector('#-menu-icon');
let navbar = document.queryselector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');

};


/*========================= scroll sections avtive link ===========================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    /*========================= sticky navbar ===========================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

     /*========================= remove toggle icon and navbar when click navbar link (scroll) ===========================*/
     menuIcon.classlist.remove('bx-x');
     navbar.classlist.remove('active');



};

    /*========================= scroll reveal ===========================*/
    ScrollReveal({
         // reset: true,
         distance: '80px',
         duration: 2000,
         delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /*========================= typed js ===========================*/
    const typed = new Typed('.multiple-text', {
        strings: ["Frontend Developer", "Youtuber", "Blogger" ],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true

    });

    const form = document.querySelector('form');
    const fullName = document.getElementsById("name")
    const email = document.getElementsById("email")
    const phone = document.getElementsById("phone")
    const subject = document.getElementsById("subject")
    const mess = document.getElementsById("message")


    function sendEmail() {
        const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "sehreenashahid58@gmail.com",
            Password : "CE690B326766DF5FA8E498E2FAF99D0D3DBE",
            To : 'sehreenashahid58@gmail.com',
            From : "sehreenashahid58@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                      });
                      
                }

            }
            
        );
    }     

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        sendEmail();
    });
    
    const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));








    
    















