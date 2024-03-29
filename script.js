const nodemailer = require("nodemailer");
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Hardworking", "Creative", "Sincere", "Active", "Honest", "Passionate", "Optimistic"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Hardworking", "Creative", "Sincere", "Active", "Honest", "Passionate", "Optimistic"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// function sendEmail() {
//     console.log("sending mail!")
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "kriti.jindal.37@gmail.com",
//         Password: "#Kriti1221",
//         To: "kriti.jindal.37@gmail.com",
//         From: "rajeshgupta160086@gmail.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }

// async function sendMail() {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'kg819687@gmail.com',
//             pass: 'cwqx gniw lnrs idwh',
//         },
//     });

//     const mailOptions = {
//         from: 'kg819687@gmail.com', // sender address
//         to: "kriti.jindal.37@gmail.com", // list of receivers
//         subject: "Welcome to node js app", // Subject line
//         text: "this is a nodemailer mail", // plain text body
//         html: "<b>Thanks for connecting</b>", // html body
//     };

//     try {
//         const result = await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully ');
//     }
//     catch (err) {
//         console.log('email sent failed' + err);
//     }
// }

// sendMail();
