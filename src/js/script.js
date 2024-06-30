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
