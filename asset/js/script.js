const descriptionDynamic = document.getElementById('typewriter');

let typewriter = new Typewriter(descriptionDynamic, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('écologique')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('équitable')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('recyclé')
  .pauseFor(1000)
  .deleteChars(7)
  .start();


const carouselContainer = document.querySelector('.carousel');

const options = {
    slidesToShow: 4,
    slidesToScroll: 1,
    loop: true, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

$(carouselContainer).slick(options);
