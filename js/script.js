//  Показ модального окна

const modalBtns = document.querySelectorAll('.modal-active'),
		modalContent = document.querySelector('.modal');

console.log(modalBtns);

modalBtns.forEach(item => {
	item.addEventListener('click', () => {
		modalContent.style.display = 'block';
		document.body.style.overflow = 'hidden';
	})
	modalContent.addEventListener('click', (e) => {
		if(e.target.classList.contains('modal__inner')) {
			modalContent.style.display = '';
			document.body.style.overflow = '';
		}
		
	})
})







// Слайдер в  products

const sliderBtns = document.querySelectorAll('.products-btn'),
		sliderContents = document.querySelectorAll('.products__item');

function hide () {
		sliderBtns.forEach(item => {
			item.classList.remove('products-btn--active');

		})
		sliderContents.forEach(items => {
			items.style.display = 'none';
		})

};


function showContent (i = 0) {
	sliderContents[i].style.display = 'block';
	sliderBtns[i].classList.add('products-btn--active');
	
}
showContent();
sliderBtns.forEach ((item,index) => {
	item.addEventListener('click', () => {
		hide();
		showContent(index)
	})
})

// Работа стрелок
if(screen.width < 1020) {
	const arrowLeft = document.querySelector('.arrow-left'),
	arrowRight = document.querySelector('.arrow-right'),
	arrowAll = document.querySelectorAll('.products-btn--arrow');
	let count = 0;

	if(count == 0) {
		arrowLeft.style.display = 'none';
	}
	function hideArr () {
		sliderBtns.forEach(item => {
			item.style.display = 'none';

		})
		sliderContents.forEach(items => {
			items.style.display = 'none';
		})

	};
	function showContentArr (i = 0) {
		sliderContents[i].style.display = 'block';
		sliderBtns[i].style.display = 'block';
		
	}
	hideArr ();
	showContentArr(0)

	arrowAll.forEach(item => {
		item.addEventListener('click', (e) => {
			hideArr ();
			if(e.target.classList.contains('arrow-right')) {
				count++;
				showContentArr(count)
				arrowAll.forEach(arrow => {
					arrow.style.display = 'block';
				})
				if(count == (sliderContents.length -1)) {
					arrowRight.style.display = 'none';
				}
			}
			if(e.target.classList.contains('arrow-left')) {
				count--;
				showContentArr(count)
				arrowAll.forEach(arrow => {
					arrow.style.display = 'block';
				})
				if(count == 0) {
					arrowLeft.style.display = 'none';
				}
			}
			
		})
	})
}




// Отступ блока 

	const blockMargin1 = window.screen.availWidth;
	const sliderMargin1 = document.querySelector('.slider__items');
	sliderMargin1.style.width = blockMargin1+'px';

	const blockMargin = document.querySelector('.about__items').offsetLeft;
	sliderMargin1.style.paddingLeft = blockMargin+'px';

	console.log(blockMargin);












