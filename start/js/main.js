window.addEventListener("DOMContentLoaded", function() {
  
	var fishInfoBtn = document.querySelectorAll(".fish-info__btn");

	fishInfoBtn.forEach.call( fishInfoBtn, function (item) {
		item.addEventListener('click', function() {
			this.parentNode.parentNode.classList.toggle("fish-info--show")
		});

	});

	$('.review-block').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		speed: 500,
		centerMode: true,
		centerPadding: 0,
		responsive: [{
			  breakpoint: 1285,
			  settings: {
			    arrows: false,
			  }
		  	},
		  	{
			  breakpoint: 1023,
			  settings: {
			    slidesToShow: 2,
			    arrows: false,
			    centerMode: false
			  },
			},
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 1,
			    arrows: false,
			    centerMode: false
			  },
			}
		  ]
	});

	/* more btn */
	var allbtn = document.querySelectorAll(".review__more");

	[].forEach.call( allbtn, function (item) {
		item.addEventListener('click', function() {
			if (!item.parentNode.querySelector(".review__info").classList.contains("review__info_full")){
				item.parentNode.querySelector(".review__info").classList.add("review__info_full");
				item.innerHTML = "-";
			}else{
				item.parentNode.querySelector(".review__info").classList.remove("review__info_full");
				item.innerHTML = "+";
			}
		});
	});

});
