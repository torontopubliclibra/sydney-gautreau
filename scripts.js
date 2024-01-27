// app object
const app = {}

// app variables
app.body = document.querySelector('body');
app.hamburger = document.querySelector('.hamburger-btn');
app.hamburgerIcon = document.querySelector('.hamburger-btn i')
app.navUl = document.querySelector('nav ul');
app.scrollTopButton = document.querySelector(".scroll-to-top");

// smoothly scroll to top function
app.scrollTop = () => {

    // smoothly scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // blur the button after scroll
    document.activeElement.blur();
},

// keyboard support for scroll
app.scrollTopOnEnter = (keyCode) => {

    // store the codes for both the key pressed and the enter key
    let key = keyCode;
    let enter = 13;

    // if a key is pressed but it is not the enter key, behave normally
    if (key && (key !== enter)) {
        return;
    // if a key is pressed and it is the enter key, scroll to the top of the page
    } else {
        app.scrollTop();
    };
},

// mobile hamburger nav function
app.hamburgerFunction = () => {

    // if nav is closed
    if(!app.navUl.style.display){

        // open nav
        app.hamburger.classList.add('open');
        app.body.classList.add('nav-open');
        app.navUl.style.display = 'flex';
        app.navUl.style.animation = 'fade-in 0.75s';
        app.navUl.style.opacity = '1';

        // after nav is finished opening
        setTimeout(function(){

            // remove animation
            app.navUl.style.animation = '';

        }, 750)

    // if nav is open
    } else {

        // close nav
        app.hamburger.classList.remove('open');
        app.body.classList.remove('nav-open');
        app.navUl.style.animation = 'fade-out 0.75s';

        // after nav is finished hiding
        setTimeout(function(){

            // remove animation, opacity, and display values
            app.navUl.style.opacity = '0';
            app.navUl.style.display = '';
            app.navUl.style.animation = '';

        }, 700)

    }

}

// initialize app function
app.init = () => {

    // add event listener to hamburger button
    app.hamburger.addEventListener("click", app.hamburgerFunction);

    app.scrollTopButton.addEventListener("click", app.scrollTop);

    // show nav when screen embiggens
    window.addEventListener("resize", () => {

        // if window is larger than mobile breakpoint
        if (window.innerWidth >= 768) {

            // display nav
            app.navUl.style.display = 'flex';
            app.navUl.style.opacity = '1';

        // if window is smaller than mobile breakpoint
        } else {

            // hide nav by default
            app.navUl.style.display = '';
            app.navUl.style.opacity = '0';
            app.hamburger.classList.remove('open');
            app.body.classList.remove('nav-open');

        }
    })

}

// initialize app
app.init();