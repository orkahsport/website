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
