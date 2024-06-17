/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _js_html_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/html-builder */ \"./src/js/html-builder.js\");\n/* harmony import */ var _js_answer_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/answer-builder */ \"./src/js/answer-builder.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/answer-builder.js":
/*!**********************************!*\
  !*** ./src/js/answer-builder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   answers: () => (/* binding */ answers),\n/* harmony export */   getQuestion: () => (/* binding */ getQuestion),\n/* harmony export */   questions: () => (/* binding */ questions)\n/* harmony export */ });\nlet fullAnswer;\r\nlet questionare = [\r\n   {\"question\": \"What is the capital of Italy?\", \"answer\": \"Rome\"},\r\n    {\"question\": \"Which planet is known as the 'Red Planet'?\", \"answer\": \"Mars\"},\r\n    {\"question\": \"Who painted the Mona Lisa?\", \"answer\": \"DaVinci\"},\r\n    {\"question\": \"What is the largest mammal on Earth?\", \"answer\": \"Bluewhale\"},\r\n    {\"question\": \"Which gas do plants absorb from the atmosphere?\", \"answer\": \"Carbon\"},\r\n    {\"question\": \"What is the currency of China?\", \"answer\": \"Yuan\"},\r\n    {\"question\": \"Who wrote 'Harry Potter'?\", \"answer\": \"Rowling\"},\r\n    {\"question\": \"Which ocean is the largest?\", \"answer\": \"Pacific\"},\r\n    {\"question\": \"What is the main ingredient in sushi?\", \"answer\": \"Rice\"},\r\n    {\"question\": \"What is the capital of Brazil?\", \"answer\": \"Brasilia\"},\r\n    {\"question\": \"Who invented the telephone?\", \"answer\": \"Bell\"},\r\n    {\"question\": \"What is the currency of India?\", \"answer\": \"Rupee\"},\r\n    {\"question\": \"Which element has the chemical symbol 'O'?\", \"answer\": \"Oxygen\"},\r\n    {\"question\": \"What is the largest ocean mammal?\", \"answer\": \"Bluewhale\"},\r\n    {\"question\": \"What is the currency of Japan?\", \"answer\": \"Yen\"},\r\n    {\"question\": \"What is the main ingredient in guacamole?\", \"answer\": \"Avocado\"},\r\n    {\"question\": \"Which color is a mixture of red and blue?\", \"answer\": \"Purple\"},\r\n    {\"question\": \"What is the capital of Australia?\", \"answer\": \"Canberra\"},\r\n    {\"question\": \"Who is the lead singer of the band 'Queen'?\", \"answer\": \"Freddie\"},\r\n    {\"question\": \"What is the currency of Russia?\", \"answer\": \"Ruble\"},\r\n    {\"question\": \"Which gas makes up the majority of Earth's atmosphere?\", \"answer\": \"Nitrogen\"},\r\n    {\"question\": \"What is the smallest prime number?\", \"answer\": \"Two\"},\r\n    {\"question\": \"Who wrote 'To Kill a Mockingbird'?\", \"answer\": \"Lee\"},\r\n    {\"question\": \"What is the currency of South Korea?\", \"answer\": \"Won\"},\r\n    {\"question\": \"Which country is known as the 'Land of the Rising Sun'?\", \"answer\": \"Japan\"},\r\n    {\"question\": \"What is the capital of Canada?\", \"answer\": \"Ottawa\"},\r\n    {\"question\": \"Who discovered penicillin?\", \"answer\": \"Fleming\"},\r\n    {\"question\": \"What is the currency of Mexico?\", \"answer\": \"Peso\"},\r\n    {\"question\": \"Which mammal can fly?\", \"answer\": \"Bat\"},\r\n    {\"question\": \"Who is the author of '1984'?\", \"answer\": \"Orwell\"},\r\n    {\"question\": \"What is the capital of Spain?\", \"answer\": \"Madrid\"},\r\n    {\"question\": \"Which planet is known as the 'Morning Star'?\", \"answer\": \"Venus\"},\r\n    {\"question\": \"Who painted 'Starry Night'?\", \"answer\": \"VanGogh\"},\r\n    {\"question\": \"What is the currency of Egypt?\", \"answer\": \"Pound\"},\r\n    {\"question\": \"Which element has the chemical symbol 'Fe'?\", \"answer\": \"Iron\"},\r\n    {\"question\": \"What is the capital of Germany?\", \"answer\": \"Berlin\"},\r\n    {\"question\": \"What is the currency of Turkey?\", \"answer\": \"Lira\"},\r\n    {\"question\": \"Which gas do plants release during photosynthesis?\", \"answer\": \"Oxygen\"},\r\n    {\"question\": \"What is the capital of South Africa?\", \"answer\": \"Pretoria\"},\r\n    {\"question\": \"Who invented the light bulb?\", \"answer\": \"Edison\"},\r\n    {\"question\": \"What is the currency of Argentina?\", \"answer\": \"Peso\"},\r\n    {\"question\": \"Which ocean is the smallest?\", \"answer\": \"Arctic\"},\r\n    {\"question\": \"What is the main ingredient in chocolate?\", \"answer\": \"Cocoa\"}\r\n]\r\nlet answerField = document.querySelector('.quiz-answer');\r\nlet answers; \r\nlet questions;\r\nlet previous = ''\r\n\r\nfunction getQuestion() {\r\n  \r\n  let random = Math.floor(Math.random() * 39);\r\n  if (random === previous) {\r\n    return getQuestion();\r\n  }\r\n    fullAnswer = questionare[random];\r\n   \r\n    console.log('Answer is ' + fullAnswer.answer);\r\n      \r\n    answers = getAnswerField(fullAnswer);\r\n    questions = getQuestionFill(fullAnswer);\r\n    previous = random;\r\n\r\n}\r\ngetQuestion();\r\nfunction getRandomQuestion(fullAnswer) {\r\n  return fullAnswer.question;\r\n}\r\n\r\nfunction getAnswerField(data) {\r\n  let answerArray = data.answer.toUpperCase().split('');\r\n  return answerArray;\r\n  }\r\n\r\nfunction getQuestionFill(data) {\r\n  return data.question;\r\n  }\r\n\n\n//# sourceURL=webpack:///./src/js/answer-builder.js?");

/***/ }),

/***/ "./src/js/html-builder.js":
/*!********************************!*\
  !*** ./src/js/html-builder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-functions */ \"./src/js/service-functions.js\");\n/* harmony import */ var _keyboard_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard-builder */ \"./src/js/keyboard-builder.js\");\n/* harmony import */ var _answer_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-builder */ \"./src/js/answer-builder.js\");\n\r\n\r\n\r\n\r\n\r\nlet attemptCounter = 0;\r\nlet correctletter = 0;\r\nlet resArr = [];\r\nlet disabledLetters = [];\r\nlet buttons;\r\nlet res;\r\nlet quizAnswer;\r\nlet modalBG;\r\nlet modalContainer;\r\nlet modalPic;\r\nlet modalResult;\r\nlet modalAnswer;\r\nlet modalButton;\r\nlet attemptCounters;\r\nlet gallows;\r\n\r\nconsole.log('Здраствуй проверяющий!) Все ответы на тест на английском языке!');\r\nconsole.log('Но не переживай, даже если у тебя включена раскладка на другом языке - все будет работать корректно.0');\r\nconsole.log('Так же обрати внимание что эти сообщения выводятся при загрузке страницы и далее при смене вопроса не появляются');\r\nconsole.log('Это значит что смена вопроса происходит без перезагрузки страницы!');\r\nconsole.log('Так же если у тебя есть вопросы/комментарии по работе - пожалуйста, свяжись со мной в Discord');\r\nconsole.log('Успехов на курсе и хорошего дня!');\r\nfunction startingGame() {\r\nlet answers = _answer_builder__WEBPACK_IMPORTED_MODULE_2__.answers;\r\n  fetch('../../index.html')\r\n    .then(responce => responce.text())\r\n    .then(data => {\r\n\r\n      let container = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      container.classList.add('container');\r\n  \r\n      let playZone = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      playZone.classList.add('play-zone');\r\n\r\n      let quizZone = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      quizZone.classList.add('quiz-zone');\r\n\r\n      let heading = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('h1');\r\n      heading.innerText = 'Hangman';\r\n      heading.classList.add('quiz-heading');\r\n\r\n      quizAnswer = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      quizAnswer.classList.add('quiz-answer');\r\n      fillAnswer(answers, quizAnswer);\r\n\r\n      let quizQuestion = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      quizQuestion.classList.add('quiz-question');\r\n      fillQuestion(answers, quizQuestion);\r\n\r\n      attemptCounters = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      attemptCounters.classList.add('quiz-attempt-counter');\r\n      attemptCounters.innerText = 'Chance 0/6'\r\n      quizQuestion.appendChild(attemptCounters);\r\n\r\n\r\n      quizZone.appendChild(heading);\r\n      quizZone.appendChild(quizAnswer);\r\n      quizZone.appendChild(quizQuestion);\r\n\r\n      let keyboard = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      keyboard.classList.add('keyboard');\r\n\r\n      gallows = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      gallows.classList.add('gallows');\r\n      playZone.appendChild(gallows);\r\n\r\n      (0,_keyboard_builder__WEBPACK_IMPORTED_MODULE_1__.keyboardBuilder)(keyboard);\r\n      \r\n      modalBG = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      modalBG.classList.add('modal-background');\r\n      modalContainer = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      modalContainer.classList.add('modal-container');\r\n      modalPic = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n      modalPic.classList.add(\"modal-pic\");\r\n      modalResult = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('p');\r\n      modalResult.classList.add('modal-result');\r\n      modalAnswer = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('p');\r\n      modalAnswer.classList.add('modal-answer');\r\n      modalButton = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('button');\r\n      modalButton.classList.add('modal-button');\r\n      modalButton.innerText = \"Play again\";\r\n      modalButton.addEventListener('click', e => {\r\n        reboot();\r\n      });\r\n\r\n      modalContainer.appendChild(modalPic);\r\n      modalContainer.appendChild(modalResult);\r\n      modalContainer.appendChild(modalAnswer);\r\n      modalContainer.appendChild(modalButton);\r\n      modalBG.appendChild(modalContainer);\r\n      document.body.appendChild(modalBG);\r\n      \r\n      quizZone.appendChild(keyboard);\r\n      container.appendChild(playZone);\r\n      container.appendChild(quizZone);\r\n      document.body.appendChild(container);\r\n\r\n      buttons = document.querySelectorAll('.button');\r\n      res = document.querySelectorAll('.quiz-answer_letter');\r\n\r\n      checkLetter(\r\n        answers,\r\n        attemptCounters,\r\n        buttons,\r\n        quizAnswer,\r\n        gallows,\r\n        modalBG,\r\n        modalPic,\r\n        modalResult,\r\n        modalAnswer,\r\n        res\r\n      );\r\n\r\n      window.addEventListener('keydown', e => {\r\n        keyboardListner(\r\n          answers,\r\n          attemptCounters,\r\n          buttons,\r\n          quizAnswer,\r\n          gallows,\r\n          modalBG,\r\n          modalPic,\r\n          modalResult,\r\n          modalAnswer,\r\n          res,\r\n          e\r\n        )\r\n      })\r\n    \r\n\r\n    });\r\n    \r\n}\r\nwindow.addEventListener('DOMContentLoaded', e => {\r\nstartingGame();\r\n})\r\n\r\n\r\nfunction fillAnswer(answers, quizAnswer) {\r\n  for (let i = 0; i < answers.length; i++) {\r\n    let letter = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('div');\r\n    letter.classList.add('quiz-answer_letter');\r\n    quizAnswer.appendChild(letter);\r\n  }\r\n}\r\n\r\nfunction fillQuestion(answers, pane) {\r\n  pane.innerText = `Hint: ${_answer_builder__WEBPACK_IMPORTED_MODULE_2__.questions}`;\r\n}\r\n\r\nfunction checkLetter(\r\n    answer\r\n  , attemptPane\r\n  , button\r\n  , quizAnswer\r\n  , gallow\r\n  , modalBG\r\n  , modalPic\r\n  , modalResult\r\n  , modalAnswer\r\n  ,res\r\n) {\r\n  button.forEach(item => {\r\n    item.addEventListener('click', e => {\r\n      disabledLetters.push('Key'+item.textContent);\r\n        let correctCounter = 0;\r\n        for (let i = 0; i < answer.length; i++) {\r\n          if (e.target.innerText == answer[i]) {\r\n            correctCounter++;\r\n            correctletter++;\r\n            quizAnswer.childNodes[i].innerText = answer[i];\r\n            quizAnswer.childNodes[i].style.border = 'none';\r\n            if (pair(answer,res)) {\r\n              modalBG.classList.add('show');\r\n              modalPic.style.backgroundImage = 'url(\"./dist/images/win.svg\")';\r\n              modalResult.innerText = \"You WIN. Congrats!!!\"\r\n              modalAnswer.innerText = \"Correct answer is \" + answer.join('');\r\n              modalBG.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';\r\n            }\r\n          }\r\n        }\r\n\r\n        if (correctCounter == 0) {\r\n          if (attemptCounter < 5) {\r\n            attemptCounter++;\r\n            gallow.style.backgroundImage = `url(\"./dist/images/hangman-${attemptCounter}.svg\")`;\r\n            attemptPane.innerText = `Chance ${attemptCounter}/6`;\r\n          } else {\r\n             modalBG.classList.add('show');\r\n              modalPic.style.backgroundImage = 'url(\"./dist/images/loose.svg\")';\r\n              modalResult.innerText = \"You LOOSE =( Never give up! Try Again\"\r\n            modalAnswer.innerText = \"Correct answer is \" + answer.join('');\r\n          }\r\n        }\r\n\r\n        item.classList.add('pressed');\r\n        item.disabled = true;\r\n\r\n    })\r\n  })\r\n}\r\n\r\n\r\nfunction reboot() {\r\n\r\n  document.body.innerHTML = '';\r\n  attemptCounter = 0;\r\n  correctletter = 0;\r\n  resArr = [];\r\n  disabledLetters = [];\r\n  (0,_answer_builder__WEBPACK_IMPORTED_MODULE_2__.getQuestion)();\r\n  startingGame();\r\n}\r\n\r\nfunction keyboardListner(\r\n    answer\r\n  , attemptPane\r\n  , buttons\r\n  , quizAnswer\r\n  , gallows\r\n  , modalBG\r\n  , modalPic\r\n  , modalResult\r\n  , modalAnswer\r\n  , res\r\n  , e\r\n) {\r\n     answer = _answer_builder__WEBPACK_IMPORTED_MODULE_2__.answers;\r\n    if (!disabledLetters.includes(e.code)) {\r\n      disabledLetters.push(e.code);\r\n      let pressedKey = e.code[3];\r\n     \r\n      let lettersPosition = answer.reduce((acc, val, search) => {\r\n        if (pressedKey === val) {\r\n          acc.push(search);\r\n          correctletter++;\r\n        }\r\n        return acc;\r\n      }, []);\r\n      buttons.forEach(button => {\r\n        if (button.innerText === pressedKey && button.disabled != true) {\r\n          button.disabled = true;\r\n          for (let i = 0; i < lettersPosition.length; i++) {\r\n            quizAnswer.childNodes[lettersPosition[i]].innerText = answer[lettersPosition[i]];\r\n            quizAnswer.childNodes[lettersPosition[i]].style.border = 'none';\r\n          }\r\n        }\r\n      \r\n      });\r\n      if (pair(answer, res)) {\r\n        modalBG.classList.add('show');\r\n        modalPic.style.backgroundImage = 'url(\"./dist/images/win.svg\")';\r\n        modalResult.innerText = \"You WIN. Congrats!!!\"\r\n        modalAnswer.innerText = \"Correct answer is \" + answer.join('');\r\n        modalBG.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';\r\n      }\r\n      if (!answer.includes(e.code[3]) && e.code.length === 4) {\r\n        if (attemptCounter < 5) {\r\n          attemptCounter++;\r\n          gallows.style.backgroundImage = `url(\"./dist/images/hangman-${attemptCounter}.svg\")`;\r\n          attemptPane.innerText = `Chance ${attemptCounter}/6`;\r\n        } else {\r\n          gallows.style.backgroundImage = `url(\"./dist/images/hangman-6.svg\")`;\r\n          attemptPane.innerText = `Chance 6/6`;\r\n          modalBG.classList.add('show');\r\n          modalPic.style.backgroundImage = 'url(\"./dist/images/loose.svg\")';\r\n          modalResult.innerText = \"You LOOSE =( Never give up! Try Again\"\r\n          modalAnswer.innerText = \"Correct answer is \" + answer.join('');\r\n        }\r\n      }\r\n    }\r\n}\r\n\r\nfunction pair(arr, res) { \r\n  resArr = [];\r\n  res.forEach(item => {\r\n    if (item.textContent != '') {\r\n      resArr.push(item.textContent);\r\n    }\r\n  });\r\n  return arr.join('') === resArr.join('');\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/html-builder.js?");

/***/ }),

/***/ "./src/js/keyboard-builder.js":
/*!************************************!*\
  !*** ./src/js/keyboard-builder.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keyboardBuilder: () => (/* binding */ keyboardBuilder)\n/* harmony export */ });\n/* harmony import */ var _service_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-functions */ \"./src/js/service-functions.js\");\n\r\n\r\n\r\nlet keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\r\n\r\nfunction keyboardBuilder(keyboard) {\r\n\r\n  for (let i = 0; i < keys.length; i++) {\r\n    let button = (0,_service_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)('button');\r\n    button.classList.add('button');\r\n    button.id = `Key${keys[i]}`;\r\n    button.innerText = keys[i];\r\n    keyboard.appendChild(button);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/keyboard-builder.js?");

/***/ }),

/***/ "./src/js/service-functions.js":
/*!*************************************!*\
  !*** ./src/js/service-functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElem: () => (/* binding */ createElem)\n/* harmony export */ });\nfunction createElem(tag) {\r\n  return document.createElement(tag);\r\n}\n\n//# sourceURL=webpack:///./src/js/service-functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;