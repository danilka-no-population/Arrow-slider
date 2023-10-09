const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')

const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')
const countOfSlides = mainSlide.querySelectorAll('div').length

let activeSlide = 0;

sidebar.style.top = `-${(countOfSlides - 1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowUp"){
        changeSlide('up')
    } else if(event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

const changeSlide = (direction) => {
    if(direction === 'down'){
        activeSlide++
        if(activeSlide === countOfSlides){
            activeSlide = 0;
        }
    }else if(direction === 'up'){
        activeSlide--
        if(activeSlide < 0){
            activeSlide = countOfSlides - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${height * activeSlide}px)`
    sidebar.style.transform = `translateY(${height * activeSlide}px)`
}