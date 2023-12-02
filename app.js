const sectionElement = document.querySelectorAll('.box');

sectionElement.forEach(question => {

  const btn = question.querySelector('.question-button');

  btn.addEventListener('click' , function() {

    sectionElement.forEach(item => {
      question.classList.toggle('show-text');

      if (item !== question) {
        item.classList.remove('show-text');
      }

    });
    
    
  });

});