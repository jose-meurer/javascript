const numberInput = document.getElementById("txtNumber");
const divForm = document.querySelector(".formSearch");

const arr = [1, 3, 5, 13, 16, 22, 33, 36, 37, 42, 47, 51, 55, 59, 60, 61, 64, 69, 71, 73, 77, 80, 84, 85, 87, 89, 90, 92, 93, 95, 97, 99, 100];

const arrayPrint = document.createElement("h4");
arrayPrint.className = "arrayPrint";
arrayPrint.innerHTML = `Elementos do array: <br />` + arr.join(" - ")
divForm.insertBefore(arrayPrint, divForm.firstElementChild);



function numberSearch() {
  let x = parseInt(numberInput.value);
  let result = numberSearchInTree(x);
  result < 0 ? (result = "Não contem esse numero na lista.") : (result = `O numero está na posição ${result} da lista.`);

  printInHtml(result, divForm, "resultSearch");
}

function numberSearchInTree(x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let suggestion = arr[mid];
    if (suggestion === x) {
      return mid;
    } else if (suggestion > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

function printInHtml(x, div, nameClass) {
  const editClass = document.querySelector("." + nameClass);
  let txtResult = "";

  if (editClass) {
    txtResult = document.querySelector("." + nameClass);
  } else {
    txtResult = document.createElement("h3");
    txtResult.className = nameClass;
    div.appendChild(txtResult);
  }

  txtResult.style.color = `rgb(${rgbRandomColor(null, 200)} ,${rgbRandomColor(null, 200)} ,${rgbRandomColor(null, 200)})`;
  txtResult.textContent = x;
}

function rgbRandomColor(min, max) {
  max = max || 255;
  min = min || 0;
  return Math.random() * (max - min) + min;
}
