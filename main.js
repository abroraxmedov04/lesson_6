var elForm = document.querySelector(".js-form");
var elInputFirst = elForm.querySelector(".js-input-first");
var elInputSecond = elForm.querySelector(".js-input-second");
var elTextarea = elForm.querySelector(".js-teaxtarea");
var jsResult = document.querySelector(".js-result");

// task1

// elForm.addEventListener("submit", function (eve) {
//   eve.preventDefault();
//   var inputValue = elInputFirst.value;
//   var res = inputValue.replaceAll(" ", "");
//   jsResult.textContent = res;
// });

// task 2

// elForm.addEventListener("submit", function (evet) {
//   evet.preventDefaulte();
//   var inpValue = elInputFirst.value.trim();
//   var teatareaValue = elTextarea.value.trim();
//   var res = teatareaValue.indexOf(inpValue);
//   jsResult.textContent = res;
//   console.log(inpValue);
// });

// task 3

// elForm.addEventListener("submit", function (evet) {
//   evet.preventDefaulte();
//   var inpValue = elInputFirst.value.trim();
//   var teatareaValue = elTextarea.value.trim();
//   var res = teatareaValue.includes(inpValue);
//   jsResult.textContent = res;
//   console.log(inpValue);
// });

// task 4

elForm.addEventListener("submit", function (eve) {
  eve.preventDefault();
  var textareaValue = elTextarea.value.trim();
  var inputFirst = elInputFirst.value.trim();
  var inputSecond = elInputSecond.value.trim();
  var result = "";
  if (inputFirst.trim().length && textareaValue.trim().length) {
    result = textareaValue.slice(
      textareaValue.indexOf(inputFirst),
      textareaValue.indexOf(inputSecond)
    );
  }
  jsResult.textContent = result;
});
