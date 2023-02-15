    const $$ = document.querySelectorAll.bind(document)
    const $ = document.querySelector.bind(document)

    const next = $('#app__slider-section-icon1')
    const pre = $('#app__slider-section-icon2')    
    const slides = $('.app__image-list')
    let slidesImage = $$('.app__image-item');
    let headerBar = $('.header')
    const textLeft= $$('.header__left-list span');
    const iconLeft= $('.header__left-list');
    const textRight = $('.header__right-list')
    const navlist = $$('.app__nav-list .app__nav-item')
    const numberPaginations = $$('.app__nav-item')

    const panelItem = $$('.section__panel-item')
    const contentShow = $$('.section__panel-item-show')





    handleEvent = () =>{
        let counter = 1;
        let index = 1;
        const firstSlide = slidesImage[0].cloneNode(true)
        const lastSlide = slidesImage[slidesImage.length - 1].cloneNode(true)
        firstSlide.id = 'first-clone';
        lastSlide.id = 'last-clone';
        slides.append(firstSlide);
        slides.prepend(lastSlide);
        const slideWidth = slidesImage[counter].clientWidth;
        slides.style.transform = `translateX(${- slideWidth * counter}px)`

        // Start Auto Slide Banner
        const startSlide = () =>{
            setInterval(() => {
                moveToNextSlide();
                startBullets();
                swiperWrapper()
            },4000);
        };
        startSlide();
        // swiper-wrapper image 
        var count = 1
        const swiperWrapper = () =>{
            var image = ['./assets/img/img5/image3.webp','./assets/img/img5/image2.webp','./assets/img/img5/image1.webp','./assets/img/img5/image4.webp','./assets/img/img5/image5.webp']
            document.querySelector('.imgs').src = image[count];
            count++;
            if(count === 5) {
                count = 0
            }
        }
        // Auto pagination 
        const startBullets = () =>{
            for(let i = 0 ; i < numberPaginations.length ; i++){
                numberPaginations[i].className = numberPaginations[i].className.replace("active-text","");
            }
            index++;
            numberPaginations[index - 1].className += "active-text";
            if(index >= numberPaginations.length ) {
                index = 0;
            }
        }

        // Restart Banner 
        slides.addEventListener("transitionend", ()=>{
            slidesImage = $$('.app__image-item');
            if(slidesImage[counter].id == firstSlide.id){
                    slides.style.transition = 'none'
                    counter = 1 ;
                    slides.style.transform = `translateX(${- slideWidth * counter}px)`;
            }
            if(slidesImage[counter].id == lastSlide.id){
                slides.style.transition = 'none'
                counter = slidesImage.length - 2  ;
                slides.style.transform = `translateX(${- slideWidth * counter}px)`;
            }
        })
        // Click to next - pre Slider Banner
        const moveToNextSlide = () =>{
            slidesImage = $$('.app__image-item');
            if(counter >=slidesImage.length -1 ) return;
                counter++;
                slides.style.transform = `translateX(${- slideWidth * counter}px)`;
                slides.style.transition = '.7s'
        }
        const moveToPreSlide = () =>{
            slidesImage = $$('.app__image-item');
            if(counter <= 0) return;
                counter--;
                slides.style.transform = `translateX(${- slideWidth * counter}px)`;
                slides.style.transition = '.7s'
        }
        pre.addEventListener('click', moveToPreSlide);
        next.addEventListener('click', moveToNextSlide);

        // Event Scroll
        window.addEventListener("scroll", () =>{
            const scrolled = window.scrollY;
            if(scrolled > 50 ){
                headerBar.style.background = 'white';
                for(let i = 0; i< textLeft.length ;i++){
                    textLeft[i].style.color = 'black';
                }
                iconLeft.style.color= 'black';
                textRight.style.color = 'var(--orange-icon)'
            } else {
                headerBar.style.background = 'transparent';
                for(let i = 0; i< textLeft.length ;i++){
                    textLeft[i].style.color = 'white';
                }
                iconLeft.style.color= 'white';
                textRight.style.color = 'white'
            }
        })
    }
    function App(){
        this.handleEvent();
    }
    App();


