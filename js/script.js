// Scroll to Block
function scrollTo(element) {
	window.scroll({
		left:0,
		top: element.offsetTop,
		behavior: 'smooth',
	})
}

const buttonScroll = document.querySelectorAll('.menu__list-link');
const positionBlock = document.querySelectorAll('section');

buttonScroll.forEach (item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		
		positionBlock.forEach(block => {
			console.log(block.id);
			if(item.hash == (`#${block.id}`)) {
				scrollTo(block)
			}
			
		})
	} )
})


// Show menu

const menuBtn = document.querySelector('.burger'),
		menuList =  document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu__list--active');
	if (menuList.classList.contains('menu__list--active')) {
		console.log(document.body);
		document.body.style.overflow ='hidden';
		
	}else  {
		document.body.style.overflow ="";
		
	}
})
