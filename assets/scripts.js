'strict mode'

// IMPORTANT adding class to navigation while its topOffset is over 95px
  const navigationOffset = function() {
    window.addEventListener('scroll', function() {
      const navigation = document.querySelector('#nav');
      if (window.scrollY >= 95) navigation.classList.add('navigation-scrolled');
      if ((window.scrollY) < 95 && navigation.classList.contains('navigation-scrolled')) navigation.classList.remove('navigation-scrolled');
  })

  window.addEventListener('load', function() {
    const navigation = document.querySelector('#nav');
    if((window.scrollY) >= 95) navigation.classList.add('navigation-scrolled');
  })
};
navigationOffset();


// IMPORTANT numeric increment
const numericIncrement = function() {
  const number1 = document.querySelector("#number1");
  const number2 = document.querySelector("#number2");
  const number3 = document.querySelector("#number3");
  const number4 = document.querySelector("#number4");

  const change = function (el, initialValue = 0, maxValue = 100, time = 5) {
      const inter = setInterval(() => {
        ++initialValue;
        if (initialValue <= maxValue) {
          el.textContent = initialValue;
        }
        if (initialValue > maxValue) clearInterval(inter);
      }, ((time*1000)/(maxValue - initialValue)));
    };
    
    window.addEventListener("load", () => {
      change(number1, 0, 10, 2);
      change(number2, 0, 5, 2);
      change(number3, 0, 9, 2);
      change(number4, 0, 15, 2);
    });
}   
numericIncrement();
      

// IMPORTANT slick slides
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 500,
  });
});

$(document).ready(function(){
  $('.slider-schedule').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.slider-team').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 500,
  });
});



// IMPORTANT Scroll to section while press #scrolling
(function() {
  const scrollingArrow = document.querySelector('#scrolling');
  const scrollTo = function(id) {
    const section = document.querySelector(`#${id}`)
    window.scrollTo(0, `${section.getBoundingClientRect().top + window.pageYOffset - 100}`);
  }
  
  scrollingArrow.addEventListener('click', function() {
    scrollTo('about-us');
  });
})();


// IMPORTANT Adding class 'active' to navigation bar link
(function() {
  const navItems = document.querySelectorAll('.nav-item');
  const navAnchors = document.querySelectorAll('.nav-anchor');
  const navigation = document.querySelector('#nav-link');
  const allElements = navigation.querySelectorAll('*');

  let topElementsNumber = [];

  for (let i = 0; i < navAnchors.length; i++) {
    topElementsNumber.push(navAnchors[i].getBoundingClientRect().top);
  }
  const closestFromTop = topElementsNumber.indexOf(Math.min(...topElementsNumber));
  const furthestFromTop = topElementsNumber.indexOf(Math.max(...topElementsNumber));

  const makeActive = function(id) {
    allElements.forEach(element => element.classList.remove('active'));
    navItems.forEach(e => {
      let hash = e.hash.substring(1);
      if (id === hash) e.classList.add('active')
    })
  }

  const checkTop = function() {

    if (navAnchors[closestFromTop].getBoundingClientRect().top > 200) {
      allElements.forEach(element => element.classList.remove('active'));
    }

    navAnchors.forEach(e => {
      if (e.getBoundingClientRect().top < 500){
        makeActive(e.id);
      }

      else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        makeActive(navAnchors[furthestFromTop].id);
      }
    })
  }

  window.addEventListener('scroll', checkTop)
})();



// (function(){
//   let map = L.map('map').setView([40.718972147967, -73.89191347322442], 18);
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 18,
//       minZoom: 18,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   }).addTo(map);
  
//   let myIcon = L.icon({
//     iconUrl: '../img/marker.svg',
  
//     iconSize:     [70, 100], // size of the icon
//     iconAnchor:   [-505, -280], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//   });
  
//   L.marker([-505, -280], {icon: myIcon}).addTo(map);
// })();

// function getResolution() {
//   alert("Your screen resolution is: " + screen.width + "x" + screen.height);
// }

// getResolution();

//   let map = L.map('map').setView([40.718972147967, -73.89191347322442], 18);
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 18,
//       minZoom: 18,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   }).addTo(map);

// var greenIcon = L.icon({
//   iconUrl: '../img/marker.svg',
//   // shadowUrl: 'leaf-shadow.png',

//   iconSize:     [38, 95], // size of the icon
//   // shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   // shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);


// IMPORTANT modal
const modal = function() {
  const openers = document.querySelectorAll('.modal-open');
  const modalElement = document.querySelector('#modal');
  const modalContent = document.querySelector('#modal-content');
  const modalClose = document.querySelector('#modal-close');

  const mainFormValidated = document.querySelector("#modal-validated")

  const openingModal = function () {
    modalElement.style.display = 'flex';
  }

  const closingModal = function (e) {
    // preventing from closing modal when click on content
    // X button is now only element out of modalContent
    if (modalElement.style.display === 'flex' && !modalContent.contains(e.target)) {
      modalElement.style.display = 'none';
    }

    if (mainFormValidated.style.display === 'flex' && !modalContent.contains(e.target)) {
      // hiding after closing modal
      mainFormValidated.style.display = "none";
    }
  }

  const closingModalEscape = function(e) {
    if (modalElement.style.display === 'flex' && e.key === 'Escape') {
      modalElement.style.display = 'none';
    }

    if (mainFormValidated.style.display === 'flex' && e.key === 'Escape') {
      mainFormValidated.style.display = "none";
    }
  }

  openers.forEach(e => e.addEventListener('click', openingModal))

  modalElement.addEventListener('click', closingModal);
  modalClose.addEventListener('click', closingModal);
  document.addEventListener('keydown', closingModalEscape);
}

modal();

(function() {

  const mainForm = document.querySelector("#registration-form");
  const selected = document.querySelector("#dance-courses");
  const selectedOption = document.querySelector("#selected-opt");

  const mainFormValidated = document.querySelector("#modal-validated")


  mainForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedOptionContent = selected.options[selected.selectedIndex].value;
    selectedOption.textContent = selectedOptionContent;
    
    mainFormValidated.style.display = "flex";

  });
})();

// IMPORTANT
// usunąć slick .js, bo jest z linku