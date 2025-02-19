const preload = document.querySelector(".preload");
const startBtn = document.querySelector("#btn_start");
const quizRulesCard = document.querySelector("#quiz_rules");
const continueBtn = document.querySelector("#continueBtn");
const countdownContainer = document.querySelector(".count-down-container ");
const exitBtn = document.querySelector("#exitBtn");
let quizCard = document.querySelector("#quiz_card");
let countdownText = document.getElementById("countdownText");
let countdownNum = document.getElementById("countdownNum");
let countdownTime = document.querySelector(".tym");
let questions = document.querySelector("#question");
let optionAnswerBtn = document.querySelector("#answer-option");
let complete = document.querySelector("#complete");
let correctScore = document.querySelector(".correct-score");
let totalQuestion = document.querySelector(".total-question");
let totalQuestion2 = document.querySelector(".total-question2");
let nextQuestion = document.querySelector(".next-question");
let replayBtn = document.querySelector(".replay-btn");
let quitBtn = document.querySelector(".quit-btn");
let questionNextNum = document.querySelector(".questionNextNum");
let percentageScore = document.querySelector(".percentage-score");
let percentageContainer = document.querySelector("#percentage");
const playerForm = document.getElementById("playerForm");
const playerNameInput = document.getElementById("playerName");
const nameContainer = document.querySelector("#nameContainer");
let playerName = "";

// form
let userForm = document.querySelector("#userForm");
let firstName = document.querySelector("#firstNameInput");
let lastName = document.querySelector("#lastNameInput");
let isEventDisabled;

// setting setTimeout for preloading
stopLoad();
function stopLoad() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preload.classList.add("hidden");
      nameContainer.classList.remove("hidden");
      // startBtn.classList.remove("hidden");
    }, 2000);
  });
}

// name submit
playerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  playerName = playerNameInput.value.trim();

  if (playerName === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter your name!",
    });
    return;
  }

  nameContainer.classList.add("hidden");
  startBtn.classList.remove("hidden");

  Swal.fire({
    icon: "success",
    title: `Welcome ${playerName}!`,
    text: "Click Start Quiz when you're ready to begin.",
    confirmButtonText: "OK",
  });
});

function saveQuizResult(score) {
  let results = JSON.parse(localStorage.getItem("quizResults")) || [];

  const newResult = {
    name: playerName,
    score: correctPicked,
    total: quizQuestions.length,
    percentage: ((correctPicked / quizQuestions.length) * 100).toFixed(1),
    date: new Date().toLocaleDateString(),
  };

  results.push(newResult);

  results.sort((a, b) => b.percentage - a.percentage);

  localStorage.setItem("quizResults", JSON.stringify(results));

  // window.location.href = "results.html";
}

// adding Event Listener to start btn
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  preload.style.display = "flex";
  setTimeout(() => {
    preload.classList.add("hidden");
    quizRulesCard.classList.remove("hidden");
  }, 2000);
});

// Start Quiz
continueBtn.addEventListener("click", continueGo);

function continueGo() {
  countdownContainer.classList.remove("hidden");
  quizRulesCard.classList.add("hidden");

  let countdown = 3;
  countdownText.textContent = "Get ready... The game starts in ";
  countdownNum.textContent = "3";

  const interval = setInterval(() => {
    if (countdown > 1) {
      countdown--;
      countdownText.textContent = `Get ready... The game starts in `;
      countdownNum.textContent = countdown;
    } else {
      clearInterval(interval);
      countdownText.textContent = "Go!";
      countdownNum.classList.add("hidden");
      countdownContainer.classList.add("hidden");
      quizCard.classList.remove("hidden");
      startCountDown();
      //   const goInterval = setInterval(() => {

      //   }, 500);
    }
  }, 1000);
}

// Exit Button
exitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to exit?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      // window.close();
      preload.style.display = "flex";
      quizRulesCard.classList.add("hidden");
      window.setTimeout(() => {
        preload.style.display = "none";
        startBtn.classList.remove("hidden");
      }, 1000);
    }
  });
});

// Next question counting down
let isClicked = false;
function startCountDown() {
  countingDown = 30;

  countdownTime.innerHTML = countingDown;

  let countingDownInterval = setInterval(() => {
    countingDown--;
    // console.log(countingDown);

    countdownTime.innerHTML = countingDown;
    if (countingDown === 0) {
      // isClicked = false;
      clearInterval(countingDownInterval);
      load();
      // next();
      return;
    } else if (isClicked) {
      isClicked = false;
      clearInterval(countingDownInterval);
      next();
      return;
    }
  }, 2000);
}

// ======================
// ======================
// Questions
// ======================
// ======================

// HTML

const quizQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which tag is used to define the body of an HTML document?",
    options: ["<head>", "<body>", "<html>", "<title>"],
    correct: "<body>",
  },
  {
    id: 3,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    correct: "<a>",
  },
  {
    id: 4,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    correct: "<br>",
  },
  {
    id: 5,
    question: "Which tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correct: "<ul>",
  },
  {
    id: 6,
    question: "Which attribute is used to specify an image source in HTML?",
    options: ["href", "src", "link", "alt"],
    correct: "src",
  },
  {
    id: 7,
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correct: "<h1>",
  },
  {
    id: 8,
    question: "Which tag is used to define a table row?",
    options: ["<th>", "<tr>", "<td>", "<table>"],
    correct: "<tr>",
  },
  {
    id: 9,
    question: "Which tag is used to create a numbered list?",
    options: ["<ul>", "<list>", "<ol>", "<li>"],
    correct: "<ol>",
  },
  {
    id: 10,
    question: "Which attribute provides alternative text for an image?",
    options: ["alt", "title", "src", "description"],
    correct: "alt",
  },
  {
    id: 11,
    question: "Which HTML tag is used to create a form?",
    options: ["<form>", "<input>", "<fieldset>", "<button>"],
    correct: "<form>",
  },
  {
    id: 12,
    question: "What does the `<meta>` tag provide?",
    options: [
      "Metadata about an HTML document",
      "A way to add comments",
      "Links to external stylesheets",
      "A way to create a footer",
    ],
    correct: "Metadata about an HTML document",
  },
  {
    id: 13,
    question: "Which tag is used to define a paragraph?",
    options: ["<p>", "<par>", "<pg>", "<para>"],
    correct: "<p>",
  },
  {
    id: 14,
    question: "Which tag is used to create a checkbox?",
    options: ["<checkbox>", "<check>", "<input type='checkbox'>", "<box>"],
    correct: "<input type='checkbox'>",
  },
  {
    id: 15,
    question: "What does the `<title>` tag define?",
    options: [
      "The title of the document in the browser tab",
      "A heading in the body",
      "A tooltip for links",
      "A footer title",
    ],
    correct: "The title of the document in the browser tab",
  },
  {
    id: 16,
    question: "Which attribute is used to open a link in a new tab?",
    options: [
      "target='_self'",
      "target='_blank'",
      "newtab='true'",
      "open='new'",
    ],
    correct: "target='_blank'",
  },
  {
    id: 17,
    question: "Which HTML element is used to play audio files?",
    options: ["<sound>", "<audio>", "<music>", "<media>"],
    correct: "<audio>",
  },
  {
    id: 18,
    question: "Which HTML tag is used to define a footer?",
    options: ["<foot>", "<bottom>", "<footer>", "<end>"],
    correct: "<footer>",
  },
  {
    id: 19,
    question: "Which tag is used to define a clickable button?",
    options: ["<button>", "<click>", "<press>", "<input>"],
    correct: "<button>",
  },
  {
    id: 20,
    question: "Which tag is used to define a section of navigation links?",
    options: ["<nav>", "<menu>", "<navigation>", "<links>"],
    correct: "<nav>",
  },
  {
    id: 21,
    question: "Which tag is used to embed a video in HTML?",
    options: ["<media>", "<video>", "<movie>", "<embed>"],
    correct: "<video>",
  },
  {
    id: 22,
    question: "Which tag is used to define an inline frame?",
    options: ["<iframe>", "<frame>", "<window>", "<inline>"],
    correct: "<iframe>",
  },
  {
    id: 23,
    question: "Which tag is used to define an input field for a user?",
    options: ["<input>", "<text>", "<form>", "<field>"],
    correct: "<input>",
  },
  {
    id: 24,
    question: "Which HTML tag is used to define a caption for a table?",
    options: ["<caption>", "<head>", "<title>", "<legend>"],
    correct: "<caption>",
  },
  {
    id: 25,
    question: "What is the correct way to add a comment in HTML?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "' This is a comment",
    ],
    correct: "<!-- This is a comment -->",
  },
  {
    id: 26,
    question: "Which attribute is used to define the URL of a link?",
    options: ["link", "href", "src", "url"],
    correct: "href",
  },
  {
    id: 27,
    question: "Which tag is used to group block elements in HTML?",
    options: ["<div>", "<span>", "<group>", "<section>"],
    correct: "<div>",
  },
  {
    id: 28,
    question: "Which tag is used to create a dropdown list?",
    options: ["<select>", "<dropdown>", "<list>", "<option>"],
    correct: "<select>",
  },
  {
    id: 29,
    question: "Which tag is used to define emphasized text?",
    options: ["<strong>", "<em>", "<b>", "<i>"],
    correct: "<em>",
  },
  {
    id: 30,
    question: "Which HTML tag is used to display preformatted text?",
    options: ["<pre>", "<code>", "<tt>", "<format>"],
    correct: "<pre>",
  },
];

const cssBootstrapQuestions = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    id: 2,
    question: "Which property is used to change the background color in CSS?",
    options: ["background-color", "color", "bgcolor", "background"],
    correct: "background-color",
  },
  {
    id: 3,
    question: "What is the correct syntax to apply an external stylesheet?",
    options: [
      '<link rel="stylesheet" type="text/css" href="styles.css">',
      "<stylesheet>styles.css</stylesheet>",
      '<style src="styles.css">',
      '<css src="styles.css">',
    ],
    correct: '<link rel="stylesheet" type="text/css" href="styles.css">',
  },
  {
    id: 4,
    question: "Which property is used to change the text color in CSS?",
    options: ["color", "text-color", "font-color", "foreground-color"],
    correct: "color",
  },
  {
    id: 5,
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "font-style", "text-transform", "font-bold"],
    correct: "font-weight",
  },
  {
    id: 6,
    question:
      "Which CSS property is used to add space inside an element’s border?",
    options: ["padding", "margin", "border-spacing", "spacing"],
    correct: "padding",
  },
  {
    id: 7,
    question: "Which CSS property controls the stacking order of elements?",
    options: ["z-index", "stack", "order", "position"],
    correct: "z-index",
  },
  {
    id: 8,
    question: "What is the default position property value for HTML elements?",
    options: ["static", "relative", "absolute", "fixed"],
    correct: "static",
  },
  {
    id: 9,
    question: "Which unit is NOT relative in CSS?",
    options: ["px", "em", "rem", "%"],
    correct: "px",
  },
  {
    id: 10,
    question: "What is the correct syntax for adding a shadow to a box in CSS?",
    options: [
      "box-shadow: 10px 10px 5px grey;",
      "shadow-box: 10px 10px 5px grey;",
      "shadow: 10px 10px 5px grey;",
      "box-shadow: grey 10px 10px 5px;",
    ],
    correct: "box-shadow: 10px 10px 5px grey;",
  },
  {
    id: 11,
    question:
      "Which property is used to control the layout direction of flex items?",
    options: ["flex-direction", "flex-flow", "align-items", "direction"],
    correct: "flex-direction",
  },
  {
    id: 12,
    question: "What is the correct syntax to add a comment in CSS?",
    options: [
      "/* This is a comment */",
      "// This is a comment",
      "<!-- This is a comment -->",
      "** This is a comment **",
    ],
    correct: "/* This is a comment */",
  },
  {
    id: 13,
    question:
      "Which property is used to make an element invisible without removing it from the layout?",
    options: ["visibility", "display", "opacity", "hidden"],
    correct: "visibility",
  },
  {
    id: 14,
    question: "Which Bootstrap class is used to make an element responsive?",
    options: [".img-fluid", ".responsive", ".img-responsive", ".image-fluid"],
    correct: ".img-fluid",
  },
  {
    id: 15,
    question:
      "Which Bootstrap class is used to create a button with rounded corners?",
    options: [".btn-rounded", ".btn-circle", ".btn-round", ".btn-pill"],
    correct: ".btn-pill",
  },
  {
    id: 16,
    question: "Which class is used to create a Bootstrap grid layout?",
    options: [".row", ".grid", ".container", ".col"],
    correct: ".row",
  },
  {
    id: 17,
    question: "What is the purpose of the Bootstrap class .container?",
    options: [
      "To create a responsive fixed-width container",
      "To create a full-width container",
      "To center text within an element",
      "To create padding for a row",
    ],
    correct: "To create a responsive fixed-width container",
  },
  {
    id: 18,
    question: "Which Bootstrap class is used to create a dropdown menu?",
    options: [".dropdown", ".menu", ".dropdown-menu", ".dropdown-toggle"],
    correct: ".dropdown",
  },
  {
    id: 19,
    question: "What is the purpose of the Bootstrap class .btn-primary?",
    options: [
      "To apply the primary button style",
      "To make a button full width",
      "To center a button",
      "To make a button responsive",
    ],
    correct: "To apply the primary button style",
  },
  {
    id: 20,
    question: "Which Bootstrap class is used to make an image circular?",
    options: [
      ".rounded-circle",
      ".img-circle",
      ".circle-image",
      ".img-rounded",
    ],
    correct: ".rounded-circle",
  },
  {
    id: 21,
    question:
      "Which CSS property is used to set the distance between lines of text?",
    options: ["line-height", "spacing", "letter-spacing", "text-spacing"],
    correct: "line-height",
  },
  {
    id: 22,
    question: "What is the purpose of the Bootstrap .card class?",
    options: [
      "To create a flexible and extensible content container",
      "To add padding around an image",
      "To style buttons",
      "To create forms",
    ],
    correct: "To create a flexible and extensible content container",
  },
  {
    id: 23,
    question: "Which Bootstrap class is used to float elements to the right?",
    options: [".float-right", ".pull-right", ".right-float", ".float-end"],
    correct: ".float-right",
  },
  {
    id: 24,
    question: "Which CSS property is used to change the font of an element?",
    options: ["font-family", "font-style", "font", "font-type"],
    correct: "font-family",
  },
  {
    id: 25,
    question:
      "Which Bootstrap class is used to hide an element on small screens?",
    options: [".d-none d-sm-block", ".hidden-xs", ".d-hide-sm", ".hide-sm"],
    correct: ".d-none d-sm-block",
  },
  {
    id: 26,
    question: "What is the purpose of the CSS property 'position: relative'?",
    options: [
      "To position an element relative to its normal position",
      "To position an element relative to the viewport",
      "To remove an element from the layout",
      "To center an element within its parent",
    ],
    correct: "To position an element relative to its normal position",
  },
  {
    id: 27,
    question: "Which Bootstrap class is used to align text to the center?",
    options: [".text-center", ".align-center", ".text-middle", ".center-text"],
    correct: ".text-center",
  },
  {
    id: 28,
    question: "What is the default value of the CSS 'flex-wrap' property?",
    options: ["nowrap", "wrap", "inherit", "initial"],
    correct: "nowrap",
  },
  {
    id: 29,
    question: "Which Bootstrap class is used for a responsive navigation bar?",
    options: [".navbar", ".navigation-bar", ".nav-responsive", ".nav-bar"],
    correct: ".navbar",
  },
  {
    id: 30,
    question: "What is the purpose of the Bootstrap .alert class?",
    options: [
      "To create alert messages with predefined styles",
      "To add notifications to forms",
      "To style headings",
      "To format buttons",
    ],
    correct: "To create alert messages with predefined styles",
  },
  {
    id: 31,
    question: "Which CSS property is used to control overflow in an element?",
    options: ["overflow", "scroll", "visible", "wrap"],
    correct: "overflow",
  },
  {
    id: 32,
    question: "What is the Bootstrap grid system based on?",
    options: ["12 columns", "10 columns", "16 columns", "8 columns"],
    correct: "12 columns",
  },
  {
    id: 33,
    question: "Which CSS pseudo-class targets the first child element?",
    options: [":first-child", "::first", ":child", ":first"],
    correct: ":first-child",
  },
  {
    id: 34,
    question: "Which Bootstrap class adds spacing between elements?",
    options: [".m-2", ".spacing-2", ".space", ".padding-2"],
    correct: ".m-2",
  },
  {
    id: 35,
    question: "What is the purpose of the Bootstrap .modal class?",
    options: [
      "To create a dialog box or popup window",
      "To style buttons",
      "To add dropdown menus",
      "To create image carousels",
    ],
    correct: "To create a dialog box or popup window",
  },
  {
    id: 36,
    question: "Which CSS property is used to align flex items?",
    options: ["align-items", "justify-items", "align-content", "align"],
    correct: "align-items",
  },
  {
    id: 37,
    question:
      "Which Bootstrap class creates a responsive fixed-width container?",
    options: [
      ".container",
      ".container-fluid",
      ".fixed-container",
      ".container-fixed",
    ],
    correct: ".container",
  },
  {
    id: 38,
    question: "Which CSS property changes the speed of animation effects?",
    options: ["transition-duration", "animation-speed", "speed", "delay"],
    correct: "transition-duration",
  },
  {
    id: 39,
    question: "Which CSS pseudo-class selects an element that is hovered over?",
    options: [":hover", "::hover", ":focus", ":target"],
    correct: ":hover",
  },
  {
    id: 40,
    question: "What is the purpose of Bootstrap’s .progress class?",
    options: [
      "To create progress bars",
      "To format forms",
      "To create dropdown menus",
      "To align flex items",
    ],
    correct: "To create progress bars",
  },
];

let remainingQuestion = [...quizQuestions];
// console.log(remainingQuestion);

let wrongPicked = 0;
let correctPicked = 0;
let askedQuestionIndex = [];
totalQuestion2.textContent = quizQuestions.length;

function getRandomNumber() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * remainingQuestion.length);
  } while (askedQuestionIndex.includes(randomIndex));
  askedQuestionIndex.push(randomIndex);

  return randomIndex;
}

displayQuestion();
function displayQuestion() {
  if (askedQuestionIndex.length === remainingQuestion.length) {
    quizCard.classList.add("hidden");
    preload.style.display = "flex";
    setTimeout(() => {
      preload.classList.add("hidden");
      complete.classList.remove("hidden");
    }, 3000);

    // Calculate scores
    const correctPercentage = (
      (correctPicked / remainingQuestion.length) *
      100
    ).toFixed(1);
    correctScore.textContent = correctPicked;
    totalQuestion.textContent = quizQuestions.length;
    percentageScore.textContent = correctPercentage;

    if (correctPercentage >= 70) {
      percentageContainer.style.color = "#00cc00";
    } else if (correctPercentage >= 50) {
      percentageContainer.style.color = "#cca300";
    } else {
      percentageContainer.style.color = "#e62e00";
    }

    console.log("Complete!" + correctPercentage);
    console.log("Wrong Answers: " + wrongPicked);
    console.log("Correct Answers: " + correctPicked);

    // Save results
    saveQuizResult();

    return;
  }

  let randomOptionIndex = [0, 1, 2, 3];
  randomOptionIndex.sort(() => Math.random() - 0.5);
  randomOptionIndex.forEach((num) => {
    num;
  });

  const currentQuestionIndex = getRandomNumber();
  const currentQuestion = remainingQuestion[currentQuestionIndex];
  questions.textContent = currentQuestion.question;
  optionAnswerBtn.innerHTML = "";

  currentQuestion.options.forEach((option, i) => {
    const button = document.createElement("p");
    button.textContent = option;
    button.classList.add("answer-option");
    optionAnswerBtn.appendChild(button);
    button.textContent = currentQuestion.options[randomOptionIndex[i]];

    isEventDisabled = true;

    button.addEventListener("click", () => {
      if (isEventDisabled) {
        if (button.textContent === currentQuestion.correct) {
          correctAns();
          correctPicked++;
        } else {
          correctAns();
          wrongPicked++;
          button.classList.add("wrong");
        }
        isEventDisabled = false;
      }
    });
  });

  let optionAnswerBtnNew = document.querySelectorAll(".answer-option");
  // ====================
  // Correct Function
  // ====================
  function correctAns() {
    optionAnswerBtnNew.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add("success");
      }
    });
    isClicked = true;
  }

  questionNextNum.textContent = `${askedQuestionIndex.length}. `;
  nextQuestion.textContent = askedQuestionIndex.length;
  console.log(askedQuestionIndex);
}

function next() {
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  load();
});

function load() {
  displayQuestion();
  startCountDown();
  nextBtn.classList.add("hidden");
}

replayBtn.addEventListener("click", () => {
  // complete.classList.add("hidden");
  window.location.reload();
});

// Quit Button
quitBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure you want to quit the game?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a69ed",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../ttaJavaScript.html";
    }
  });
});
