function populateCardNumbers() {
  const numberElements = document.querySelectorAll('.bonus-card__number');
  const numberElementsArray = Array.from(numberElements);

  numberElementsArray.forEach((element, index) => {
    const number = index + 1;
    // Вставляем число в содержимое тега <i>
    element.textContent = number;
  });
}

populateCardNumbers();


document.addEventListener('DOMContentLoaded', function() {
  var openBtns = document.querySelectorAll('.bonus-card__open-btn');

  openBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var bonusCard = btn.closest('.bonus-card');

      var infoBlock = bonusCard.querySelector('.bonus-card__info');

      if (infoBlock.classList.contains('hidden')) {
        infoBlock.classList.remove('hidden');
        btn.textContent = 'Hide info';
        btn.classList.add('active');
      } else {
        infoBlock.classList.add('hidden');
        btn.textContent = 'More info';
        btn.classList.remove('active');
      }
    });
  });
});