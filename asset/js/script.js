document.addEventListener('DOMContentLoaded', function() {
        const typewriter = new Typewriter('.fade-in-out', {
            loop: false,
            delay: 75,
        });
    
        typewriter
            .pauseFor(1000)
            .typeString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac lectus arcu. Nam elementum imperdiet neque eu sagittis.')
            .pauseFor(1000)
            .start();
    });
    