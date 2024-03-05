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
    slidesToShow: 6,
    slidesToScroll: 1,
    loop: true, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1600,
          settings: {
              slidesToShow: 5
          }
        },
        {
          breakpoint: 1350,
          settings: {
              slidesToShow: 4
          }
        },
        {
          breakpoint: 1100,
          settings: {
              slidesToShow: 3
          }
        },
        {
            breakpoint: 865,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

$(carouselContainer).slick(options);
