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
const menuBtn = document.querySelector('.burger'),
		menuList =  document.querySelector('.menu__list');
buttonScroll.forEach (item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		if (menuList.classList.contains('menu__list--active')) {
			document.querySelector('.menu__list').classList.remove('menu__list--active');
			document.body.style.overflow ="";
		}
		positionBlock.forEach(block => {
			if(item.hash == (`#${block.id}`)) {
				scrollTo(block)
				
			}
			
		})
	} )
})


// Show menu



menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu__list--active');
	if (menuList.classList.contains('menu__list--active')) {
		document.body.style.overflow ='hidden';
	}else  {
		document.body.style.overflow ="";
		
	}
})

