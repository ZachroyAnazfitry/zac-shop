// select all the icons

const icons =document.querySelectorAll('.section-1-icons i')
// to fix error after ending of icon
let i=1

// run functions repeatedly in interval
setInterval(() =>{

    i++
    // select class change
    const icon = document.querySelector('.section-1-icons .change')

    // all classes of the element
    icon.classList.remove('change')

    // to fix error after ending of icon
    if (i>icons.length) {
        icons[0].classList.add('change')
        i=1
    } else {
        icon.nextElementSibling.classList.add('change')
    }   
}, 2000)