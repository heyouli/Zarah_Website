/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
  var overlay = document.getElementById("header__navigation__menu__overlay");
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
    document.body.classList.remove('noscroll');
  } else {
    overlay.style.display = "block";
    document.body.classList.add('noscroll');
  }
}

/* Toggle between showing and hiding the event inquiery form */
function toggleInquieryFormEvents() {
  var overlay = document.getElementById("inquiery_form__overlay_events");
  if (overlay.style.display === "grid") {
    overlay.style.display = "none";
    document.body.classList.remove('noscroll');
  } else {
    overlay.style.display = "grid";
    document.body.classList.add('noscroll');
  }
}

/* Toggle between showing and hiding the exhibition form */
function toggleInquieryFormExhibitions() {
  var overlay = document.getElementById("inquiery_form__overlay_exhibitions");
  if (overlay.style.display === "grid") {
    overlay.style.display = "none";
    document.body.classList.remove('noscroll');
  } else {
    overlay.style.display = "grid";
    document.body.classList.add('noscroll');
  }
}

/* Toggle between showing and hiding the wechat form */
function toggleInquieryFormWechat() {
  var overlay = document.getElementById("inquiery_form__overlay_wechat");
  if (overlay.style.display === "grid") {
    overlay.style.display = "none";
    document.body.classList.remove('noscroll');
  } else {
    overlay.style.display = "grid";
    document.body.classList.add('noscroll');
  }
}

var footerItems = document.getElementsByClassName("footer__item");
var maxWidth = 0;
// read
for (i = 0; i < footerItems.length; ++i) {
    maxWidth = Math.max(maxWidth, footerItems[i].offsetWidth)
};

// write
for (i = 0; i < footerItems.length; ++i) {
    footerItems[i].style.width = maxWidth + "px";
};


/* Tab navigation */

window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("nav.tab-menu > a");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".text-image-container--50");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});

/* Auto stage slider */

window.addEventListener("load", function () {

  var stageIndex = 0;
  stageSlider();

  function stageSlider() {
    var i;
    var x = document.getElementsByClassName("header__stage__img");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    stageIndex++;
    if (stageIndex > x.length) { stageIndex = 1 }
    x[stageIndex - 1].style.display = "block";
    setTimeout(stageSlider, 5000); // Change image every 5 seconds
  }

});

/* Carousel */

window.addEventListener("load", function() {

  var btns = document.querySelectorAll(".slideBtn");
  var backBtn = document.querySelector(".backBtn");
  var fwdBtn = document.querySelector(".fwdBtn");
  var slides = document.querySelectorAll(".slide");
  var intervalId = 0;

  var activeSlide = 0;
  function advanceSlides(count) {
    if (!count) {
      count = 1;
    }
    activeSlide = activeSlide + count;
    if (activeSlide == slides.length) {
      activeSlide = 0;
    }
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }
    showSlide(activeSlide);
  }

  function showSlide(slideIndex) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      btns[i].classList.remove("active");
    }
    btns[slideIndex].classList.add("active");
    slides[slideIndex].classList.add("active");

  }

  var handleClick = function(evt) {
    var slideNumber = evt.target.getAttribute("data-slide-target");
    var slideIndex = slideNumber - 1;
    //if this is the first click stop the auto slide
    if (intervalId) {
      window.clearInterval(intervalId);
    }
    showSlide(slideIndex);
    return false;
  };

  var fwdClick = function(evt) {
    if (intervalId) {
      window.clearInterval(intervalId);
    }
    advanceSlides();
  };

  var backClick = function(evt) {
    if (intervalId) {
      window.clearInterval(intervalId);
    }
    advanceSlides(-1);
  };

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
  }

  backBtn.addEventListener("click", backClick);
  fwdBtn.addEventListener("click", fwdClick);

});

/* Date picker */

const scroll = document.querySelector('#inquiery_form__overlay_events')

Array.from(document.querySelectorAll('[data-date]')).forEach(elm=>{
  var inst = new Pikaday({
  field: elm,
  firstDay: 1,
  minDate: new Date(),
  onOpen: function(){
    const el = this.el;
    const { scroll, style } = el;

    Object.assign(style, {

      top: `${elm.offsetTop + 30}px`
    });

  }
});
scroll.appendChild(inst.el);
})
