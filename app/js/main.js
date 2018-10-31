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

	$('.adaptiv-table__slick').slick({
		dots: true,
		slidesToShow: 1
		
		
		
	});

	/* ban to input letters in phone box */
	String.prototype.removeSpaces = function() {
        return this.replace(/[^\d/]+/g, '');
	}
	document.querySelector("#add-review__phone").addEventListener("input", function(event) { this.value = this.value.removeSpaces(); });

	/* add review button */
	var addReview = document.querySelector("#add-review__btn");
	console.log(addReview);

	addReview.addEventListener('click', function () {
		
		const addName = document.querySelector("#add-review__name");
		const addPhone = document.querySelector("#add-review__phone");
		const addReview = document.querySelector("#add-review__review");
		const addForm = document.querySelector("#add-review__form");

		if (addName.value.trim().length > 2 && addPhone.value.trim().length > 10 && addReview.value.trim().length > 10){

			addForm.innerHTML = "<p class='add-review__desc add-review__desc_answer'>Спасибо за отклик, ваш отзыв на модерации.</p>"
			addForm.classList.add("add-review__bottom-indent");
		}

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
