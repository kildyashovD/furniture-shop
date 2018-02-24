// SLIDER RANGE FILTER 

if (document.getElementById('slider-range')) {

	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	});
}

// TIMER FOR HOT DEALS
// обновляем счетчик каждую секунду



if (document.getElementById('countOfHotDeals')) { //если страница
	// не находит нужный id, то ф-ия не 
	//выполняется
	// установили дату окончания акции
	var countDownDate = new Date("March 30, 2018 00:00:00").getTime();

	var b = setInterval(function () {

		// получаем текущую дату
		var now = new Date().getTime();

		//задаем разницу
		var distance = countDownDate - now;

		// считае дни, часы, минуты и секунды
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		//записываем результат 

		document.getElementById('day').textContent = days;
		document.getElementById('hours').textContent = hours;
		document.getElementById('min').textContent = minuts;
		document.getElementById('sec').textContent = seconds;

	}, 1000);

}



// SLIDESHOW

if (document.getElementById('slideShow')) {

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	var prev = document.getElementsByClassName('special-offer__slideshow-prev');

	var next = document.getElementsByClassName('special-offer__slideshow-next');

	prev[0].onclick = function () {
		plusSlides(-1);
	};
	next[0].onclick = function () {
		plusSlides(1);
	};

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName('slideshow__item');

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[slideIndex - 1].style.display = "block";

	}

}


// LIKE TOGGLE 

function heartIconToggle(x) {
	x.classList.toggle("like-icon__active");
}

// RATING  doesn't work for all element
/*
var ratngIndex = 0;
var ratingAttr = document.getElementsByClassName('rating');
ratingText(ratngIndex); 


function ratingText(ratngIndex) {
	for (var i = 0; i < ratingAttr.length; i++) { 

		var rating = document.getElementsByClassName('rating')[i];
		var	ratingItem = rating.children;

		console.log(rating);
		console.log(ratingItem);

		rating.onclick = function (e) {
			var target = e.target; //кликаем и выбираем элемент
			if (target.classList.contains('rating__item')) {
				removeRatingClass(ratingItem, 'rating__item_current-active');
				target.classList.add('rating__item_active', 'rating__item_current-active'); //присваиваем класс эл-ту
			} // по которому кликнули
		}

		rating.onmouseover = function (e) {
			var target = e.target;
			if (target.classList.contains('rating__item')) {
				removeRatingClass(ratingItem, 'rating__item_active');
				target.classList.add('rating__item_active');
				mouseOverActiveClass(ratingItem);
			}
		}

		rating.onmouseout = function () {
			addRatingClass(ratingItem, 'rating__item_active');
			mouseOutActiveClass(ratingItem);
		}

		function removeRatingClass(arr) {
			for (var i = 0, iLen = arr.length; i < iLen; i++) {
				for (var j = 1; j < arguments.length; j++) {
					ratingItem[i].classList.remove(arguments[j]);
				}
			}
		}

		function addRatingClass(arr) {
			for (var i = 0, iLen = arr.length; i < iLen; i++) {
				for (var j = 1; j < arguments.length; j++) {
					ratingItem[i].classList.add(arguments[j]);
				}
			}
		}

		function mouseOverActiveClass(arr) {
			for (var i = 0, iLen = arr.length; i < iLen; i++) {
				if (arr[i].classList.contains('rating__item_active')) {
					break;
				} else {
					arr[i].classList.add('rating__item_active');
				}
			}
		}

		function mouseOutActiveClass(arr) {
			for (var i = arr.length - 1; i >= 1; i--) {
				if (arr[i].classList.contains('rating__item_current-active')) {
					break;
				} else {
					arr[i].classList.remove('rating__item_active');
				}
			}
		}

	}
}
*/


// GALLERY SLIDESHOW

if (document.getElementById('gallerySlideShow')) {

	var slideIndex = 1;
	slideShow(slideIndex);

	// NEXT & PREVIOUS CONTROL

	function plusSlides(n) {
		slideShow(slideIndex += n);
	}

	// THUMNAIL CONTROL

	function currentSlide(n) {
		slideShow(slideIndex = n);
	}

	var thumbnailItem = document.getElementsByClassName('thumbnail__item');

	thumbnailItem[0].onclick = function () {
		currentSlide(1)
	};
	thumbnailItem[1].onclick = function () {
		currentSlide(2)
	};
	thumbnailItem[2].onclick = function () {
		currentSlide(3)
	};
	thumbnailItem[3].onclick = function () {
		currentSlide(4)
	};
	thumbnailItem[4].onclick = function () {
		currentSlide(5)
	};
	if (document.getElementsByClassName('thumbnail__item')[5]) {
		thumbnailItem[5].onclick = function () {
			currentSlide(6)
		};
	}

	var prev = document.getElementsByClassName('slideshow-gallery__prev');

	var next = document.getElementsByClassName('slideshow-gallery__next');

	prev[0].onclick = function () {
		plusSlides(-1);
	};
	next[0].onclick = function () {
		plusSlides(1);
	};

	function slideShow(n) {
		var i;
		var slides = document.getElementsByClassName('slideshow-gallery__slide');
		var dots = document.getElementsByClassName('thumbnail__item');

		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' thumbnail__active', '');
		}

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " thumbnail__active";

	}

}

// FILTERING

if (document.getElementById('filterBlock')) {

	filterSelection("all"); // Execute the function and show all columns
	function filterSelection(c) {
		var x, i;
		x = document.getElementsByClassName("product-tile");
		if (c == "all") c = "";
		// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
		for (i = 0; i < x.length; i++) {
			w3RemoveClass(x[i], "filter-show");
			if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filter-show");
		}
	}

	// Show filtered elements
	function w3AddClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
		for (i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {
				element.className += " " + arr2[i];
			}
		}
	}

	// Hide elements that are not selected
	function w3RemoveClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
		for (i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
		}
		element.className = arr1.join(" ");
	}

	// Add active class to the current button (highlight it)
	var btnContainer = document.getElementById("furnitureContainer");
	var btns = btnContainer.getElementsByClassName("filter-menu__button");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}

// SHOW MAIN MENU 

function showMenu() {
	var x = document.getElementById("mainNav");

	if (x.className === "main-navigation flex-row col-6") {
		x.className += " responsive_menu";
	} else {
		x.className = "main-navigation flex-row col-6";
	}
}


function showNav() {
	document.getElementById("menuResponsiveButton").classList.toggle("change");
}

// SHOW FILTER MENU

function openFilterBlock() {
	var x = document.getElementById("filterBlockShow");
	var y = document.body;
	x.classList.toggle("filter-block_show-mode");
	y.classList.toggle("main-content__item_margin-l_250");
}
