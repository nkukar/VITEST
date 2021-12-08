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
