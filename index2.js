// $(function() {
//     $(window).scroll(function() { 
//         if($(this).scrollTop()>100){
//             $('.to-up').addClass('hidden');
//             $('.navbar').addClass('discoloration');
//             console.log('abc');
//         }else{
//             $('.to-up').removeClass('hidden');
//             $('.navbar').removeClass('discoloration');
//         }
//     })
//     $('.to-up').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1000);
//         return true;
//     })
// });
// document.addEventListener('DOMContentLoaded', function() {
//     var menu = document.querySelector('.navbar');
//     var top = document.querySelector('.toup');
//     // console.log(menu);
//     window.addEventListener('scroll', function() {
//         if (window.pageYOffset > 100) {
//             menu.classList.add('discoloration');
//             console.log(menu);
//         } else {
//             menu.classList.remove('discoloration');
//         }
//     })
// }, false)
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.navbar');
    var top = document.querySelector('.toup');
    // console.log(menu);
    window.addEventListener('scroll', (event) => {
        if (window.pageYOffset > 100) {
            menu.classList.add('discoloration');
            console.log(menu);
        } else {
            menu.classList.remove('discoloration');
        }
    });
}, false)

function dongho() {
    var time = new Date();
    var gio = time.getHours();
    var phut = time.getMinutes();
    var giay = time.getSeconds();
    if(gio < 10)
        gio = '0' + gio;
    if(phut < 10)
        phut = '0' + phut;
    if(giay < 10) 
        giay = '0' + giay;    
    document.getElementById("time").innerHTML = gio + ':' + phut + ':' + giay;
    setTimeout('dongho()', 1000);
}
dongho();

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