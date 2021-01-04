let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')

let slideControl = document.getElementById('slide-control')

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')


slider.style.marginTop = '-' + slideIndex + '00vh'

setTimeout(() => {
	slideControlItems[slideIndex].classList.add('active')
	slides[slideIndex].classList.add('active')
}, 500)


chooseProduct = (index) => {
	if (index === slideIndex) return

	slideIndex = index

	let currSlideControl = slideControl.querySelector('.slide-control-item.active')
	currSlideControl.classList.remove('active')

	let currSlide = slider.querySelector('.slide.active')
	currSlide.classList.remove('active')

	setTimeout(() => {
		slider.style.marginTop = '-' + slideIndex + '00vh'
		slideControlItems[slideIndex].classList.add('active')
		slides[slideIndex].classList.add('active')
	}, 1500)
	
}

Array.from(slideControlItems).forEach((el, index) => {
	el.onclick = function() {
		chooseProduct(index)
	}
})

let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')

closeBtn.onclick = () => {
	modal.style.display = 'none'
}

let moreImages = document.getElementsByClassName('more-images-item')

let previewImages = document.getElementsByClassName('img-preview')

Array.from(moreImages).forEach((el) => {
	el.onclick = () => {
		let imgItems = el.parentNode.getElementsByTagName('img')

		Array.from(imgItems).forEach((item, index) => {
			previewImages[index].src = item.src
		})

		let img = el.querySelector('img')
		modal.style.display = 'block'

		let modalContent = modal.querySelector('.modal-content')
		modalContent.src = img.src

		let temp = modalContent.cloneNode(true)
		modalContent.parentNode.replaceChild(temp, modalContent)
	}
})

// -----------------------------------------------------------------------------------------
$(function() {
    // console.log('abc');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.to-up').addClass('show');
        } else {
            $('.to-up').removeClass('show');
        }
	});
	
    $('.to-up').click(function() {
        $('html,body').animate({ scrollTop: 0}, 1000);
		return false;	
    });
});


// function dongho() {
//     var time = new Date();
//     var gio = time.getHours();
//     var phut = time.getMinutes();
//     var giay = time.getSeconds();
//     if(gio < 10)
//         gio = '0' + gio;
//     if(phut < 10)
//         phut = '0' + phut;
//     if(giay < 10) 
//         giay = '0' + giay;    
//     document.getElementById("time").innerHTML = gio + ':' + phut + ':' + giay;
//     setTimeout('dongho()', 1000);
// }
// dongho();

// //////////////////////////////////////////////////////////////////////////////////////
// function ngaythangnam() {
//     var today = new Date();
//     var ngay = today.getDate();
//     var thang = today.getMonth();
//     var nam = today.getFullYear();
//     if(ngay < 10)
//         ngay = '0' + ngay;
//     if(thang < 10)
//         thang = '0' + thang;
//     document.getElementById('day').innerHTML = ngay + '/' + thang + '/'+ nam;
// }
// ngaythangnam();