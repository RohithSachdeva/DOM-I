const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Styles + Additional Content
const navLinks = document.querySelectorAll("a");

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

navLinks.forEach(Color => (Color.style.color = 'green'));

const navigation = document.querySelector('nav');

const firstNav = document.createElement('a');
firstNav.href = '#';
firstNav.textContent = 'Rohith';
firstNav.style.color = 'green';
navigation.prepend(firstNav);


const lastNav = document.createElement('a');
lastNav.href = '#';
lastNav.textContent = 'Rohith2.0';
lastNav.style.color = 'green';
navigation.append(lastNav);

//Header Stuff

const header = document.querySelector('h1');
header.textContent = siteContent["cta"]["h1"];

const imageCta = document.querySelector("#cta-img");
imageCta.setAttribute("src", siteContent.cta["img-src"]);

const getStarted = document.querySelector('.cta-text button');
getStarted.textContent = siteContent.cta.button;

//Body Content 

let bodyContent = document.querySelectorAll('.text-content');

bodyContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
bodyContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
bodyContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
bodyContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

const bodyImg = document.querySelector("#middle-img")
bodyImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


bodyContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bodyContent[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
bodyContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bodyContent[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
bodyContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bodyContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];


//Contact Info

const contactContent = document.querySelector('.contact');
contactContent.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"];
contactContent.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
contactContent.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
contactContent.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];


// Footer Info

const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];
