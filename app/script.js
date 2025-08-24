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


// new
const quizQuestions = [
  {
    id: 1,
    question: "What is the purpose of the <head> element in an HTML document?",
    options: [
      "The <head> element is used to define the main content displayed to users.",
      "The <head> element holds metadata and links to external resources like CSS and scripts.",
      "The <head> element creates a visible header section on the page.",
      "The <head> element defines the footer and page ending metadata."
    ],
    correct: "The <head> element holds metadata and links to external resources like CSS and scripts."
  },
  {
    id: 2,
    question: "Which element should be used to create a clickable link in HTML?",
    options: [
      "The <link> element is used to create a hyperlink that users can click.",
      "The <a> element is used to create a clickable link that navigates to another page.",
      "The <href> element is used to define a clickable anchor.",
      "The <button> element is the primary way to create a link to another page."
    ],
    correct: "The <a> element is used to create a clickable link that navigates to another page."
  },
  {
    id: 3,
    question: "Why is the alt attribute important when using an <img> tag?",
    options: [
      "It specifies the image resolution in case the image fails to load.",
      "It links the image to another resource if it doesn't appear.",
      "It provides alternative text for screen readers and when images cannot load.",
      "It allows the browser to cache the image more efficiently."
    ],
    correct: "It provides alternative text for screen readers and when images cannot load."
  },
  {
    id: 4,
    question: "What does CSS primarily control in a web page?",
    options: [
      "CSS is mainly used to manage user interactions and form validation.",
      "CSS defines the document structure and content flow.",
      "CSS is used to style the layout, colors, and fonts of web pages.",
      "CSS generates dynamic content and handles server requests."
    ],
    correct: "CSS is used to style the layout, colors, and fonts of web pages."
  },
  {
    id: 5,
    question: "Which HTML element is semantically appropriate to group content that could stand alone?",
    options: [
      "The <div> element is always the best choice for stand-alone content.",
      "The <section> element is used for grouping related content that can stand on its own.",
      "The <span> element is meant for standalone content blocks.",
      "The <article> element is used to define headings and page layout."
    ],
    correct: "The <section> element is used for grouping related content that can stand on its own."
  },
  {
    id: 6,
    question: "What is the default position of an HTML element with no CSS positioning applied?",
    options: [
      "Elements are absolutely positioned by default with no specific offset.",
      "Elements are relatively positioned to their closest ancestor by default.",
      "Elements follow static positioning which flows naturally in the document.",
      "Elements are always fixed unless styled otherwise with CSS."
    ],
    correct: "Elements follow static positioning which flows naturally in the document."
  },
  {
    id: 7,
    question: "How does the class attribute work in HTML?",
    options: [
      "It uniquely identifies a single element for CSS styling and JavaScript.",
      "It applies styles to a group of elements sharing the same class name.",
      "It only works with internal CSS and not external stylesheets.",
      "It prevents styles from affecting the tagged element."
    ],
    correct: "It applies styles to a group of elements sharing the same class name."
  },
  {
    id: 8,
    question: "Which unit is relative to the font size of the parent element in CSS?",
    options: [
      "The rem unit adjusts based on the height of the viewport.",
      "The px unit changes depending on the screen resolution.",
      "The em unit scales based on the font size of its parent element.",
      "The % unit is based on the global document size only."
    ],
    correct: "The em unit scales based on the font size of its parent element."
  },
  {
    id: 9,
    question: "Why would a developer use an external CSS file?",
    options: [
      "To keep styles visible in the HTML file for easier debugging.",
      "To apply consistent styling across multiple HTML pages efficiently.",
      "To write JavaScript code in a separate file alongside the styles.",
      "To reduce the need for using semantic HTML elements."
    ],
    correct: "To apply consistent styling across multiple HTML pages efficiently."
  },
  {
    id: 10,
    question: "What is the difference between id and class in HTML?",
    options: [
      "Both id and class can be reused on multiple elements equally.",
      "An id is used for styling text content only, while class is for layout.",
      "An id is unique to one element, while a class can be shared by many elements.",
      "An id creates clickable links, while class helps with list formatting."
    ],
    correct: "An id is unique to one element, while a class can be shared by many elements."
  },
  {
    id: 11,
    question: "What does the display: flex CSS rule do?",
    options: [
      "It removes all spacing and hides elements in a flexbox.",
      "It arranges child elements in a single column by default.",
      "It enables a flexible layout model for aligning items in rows or columns.",
      "It makes elements fixed to the viewport dimensions."
    ],
    correct: "It enables a flexible layout model for aligning items in rows or columns."
  },
  {
    id: 12,
    question: "Which CSS property controls the space inside the element but before the border?",
    options: [
      "Margin controls the space within the element and its contents.",
      "Border defines the internal spacing between child elements.",
      "Padding adds space between the content and the element’s border.",
      "Spacing adjusts both margin and padding together."
    ],
    correct: "Padding adds space between the content and the element’s border."
  },
  {
    id: 13,
    question: "How does a <form> element function in an HTML page?",
    options: [
      "It creates a fixed layout for input fields and labels.",
      "It structures a list of clickable elements without functionality.",
      "It defines an area to collect and submit user data to a server.",
      "It is used only for styling groups of text inputs."
    ],
    correct: "It defines an area to collect and submit user data to a server."
  },
  {
    id: 14,
    question: "Why is it better to use semantic HTML elements like <nav>, <main>, and <footer>?",
    options: [
      "They are required for the CSS to render styles correctly.",
      "They help browsers display content in different screen sizes automatically.",
      "They provide meaningful structure, improving accessibility and SEO.",
      "They load content faster because they are HTML5 specific."
    ],
    correct: "They provide meaningful structure, improving accessibility and SEO."
  },
  {
    id: 15,
    question: "What is the effect of setting 'position: absolute' on an HTML element?",
    options: [
      "It places the element in the document flow relative to its siblings.",
      "It makes the element fixed at the top of the page permanently.",
      "It removes the element from the document flow and positions it relative to its nearest positioned ancestor.",
      "It ensures the element always stays within the boundaries of its parent."
    ],
    correct: "It removes the element from the document flow and positions it relative to its nearest positioned ancestor."
  },
  {
    id: 16,
    question: "What does the <meta charset='UTF-8'> tag do in HTML?",
    options: [
      "It sets the language used in the browser's developer tools.",
      "It specifies the maximum size of the content in the HTML page.",
      "It defines the character encoding used to display text correctly.",
      "It creates automatic translation rules for the browser."
    ],
    correct: "It defines the character encoding used to display text correctly."
  },
  {
    id: 17,
    question: "How does the box model work in CSS?",
    options: [
      "It represents HTML elements as layers of text and data.",
      "It defines how height and width affect only the content area.",
      "It shows how content, padding, border, and margin make up an element’s total size.",
      "It describes the relationship between display properties and animation effects."
    ],
    correct: "It shows how content, padding, border, and margin make up an element’s total size."
  },
  {
    id: 18,
    question: "Which selector targets all paragraph elements inside a div?",
    options: [
      "The selector div p targets all p elements that are descendants of a div.",
      "The selector p div selects all divs inside a paragraph element.",
      "The selector div > p targets paragraphs that follow a div.",
      "The selector div.p selects divs that contain paragraphs."
    ],
    correct: "The selector div p targets all p elements that are descendants of a div."
},{
    id: 19,
    question: "What is the role of the <label> element in an HTML form?",
    options: [
      "The <label> element groups related form fields under one heading.",
      "The <label> element connects a text description to a form input for better accessibility.",
      "The <label> element submits the associated input value to the server.",
      "The <label> element stores placeholder values for text inputs."
    ],
    correct: "The <label> element connects a text description to a form input for better accessibility."
  },
  {
    id: 20,
    question: "Why might a developer use a reset or normalize CSS file?",
    options: [
      "To ensure that every browser applies its default styling for a consistent look.",
      "To add additional built-in animations across all browsers.",
      "To standardize how HTML elements are styled across different browsers.",
      "To overwrite semantic HTML structures and re-style them manually."
    ],
    correct: "To standardize how HTML elements are styled across different browsers."
  }
];



// // HTML
const quizQuestions60 = [
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
      question: "Which HTML tag is used to define an internal stylesheet?",
      options: ["<style>", "<css>", "<script>", "<link>"],
      correct: "<style>",
    },
    {
      id: 3,
      question:
        "Which HTML element is used to specify a header for a document or section?",
      options: ["<header>", "<section>", "<head>", "<title>"],
      correct: "<header>",
    },
    {
      id: 4,
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<hr>"],
      correct: "<br>",
    },
    {
      id: 5,
      question: "Which HTML tag is used to create an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: "<ul>",
    },
    {
      id: 6,
      question: "What is the correct syntax for creating a hyperlink in HTML?",
      options: [
        '<a href="https://example.com">Visit</a>',
        '<a src="https://example.com">Visit</a>',
        '<link href="https://example.com">Visit</link>',
        "<a>Visit https://example.com</a>",
      ],
      correct: '<a href="https://example.com">Visit</a>',
    },
    {
      id: 7,
      question: "What is the purpose of the <alt> attribute in the <img> tag?",
      options: [
        "To specify the image size",
        "To provide an alternative text for the image",
        "To define the image source",
        "To set the image alignment",
      ],
      correct: "To provide an alternative text for the image",
    },
    {
      id: 8,
      question: "Which HTML tag is used to define a table row?",
      options: ["<td>", "<tr>", "<th>", "<table-row>"],
      correct: "<tr>",
    },
    {
      id: 9,
      question: "What is the correct way to specify a background color in HTML?",
      options: [
        '<body style="background-color:blue;">',
        '<background-color="blue">',
        '<body color="blue">',
        '<body background="blue">',
      ],
      correct: '<body style="background-color:blue;">',
    },
    {
      id: 10,
      question:
        "Which HTML element is used to display a scalar measurement within a range?",
      options: ["<meter>", "<progress>", "<range>", "<input>"],
      correct: "<meter>",
    },
    {
      id: 11,
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h1>", "<h6>", "<header>", "<heading>"],
      correct: "<h1>",
    },
    {
      id: 12,
      question: "Which HTML tag is used to create a dropdown list?",
      options: ["<select>", "<dropdown>", "<option>", "<list>"],
      correct: "<select>",
    },
    {
      id: 13,
      question: "What is the correct HTML for making a checkbox?",
      options: [
        '<input type="checkbox">',
        '<input type="check">',
        "<checkbox>",
        "<check>",
      ],
      correct: '<input type="checkbox">',
    },
    {
      id: 14,
      question: "Which attribute specifies the destination of a link in HTML?",
      options: ["href", "src", "link", "destination"],
      correct: "href",
    },
    {
      id: 15,
      question: "Which HTML tag is used to define an inline frame?",
      options: ["<iframe>", "<frame>", "<inline>", "<iFrame>"],
      correct: "<iframe>",
    },
    {
      id: 16,
      question: "What is the correct way to write a comment in HTML?",
      options: [
        "<!-- This is a comment -->",
        "// This is a comment",
        "'This is a comment",
        "** This is a comment **",
      ],
      correct: "<!-- This is a comment -->",
    },
    {
      id: 17,
      question:
        "Which HTML attribute specifies an input field that must be filled out?",
      options: ["required", "validate", "mandatory", "placeholder"],
      correct: "required",
    },
    {
      id: 18,
      question: "What is the correct HTML element to embed a video?",
      options: ["<video>", "<media>", "<movie>", "<embed>"],
      correct: "<video>",
    },
    {
      id: 19,
      question: "Which HTML tag is used to define a description list?",
      options: ["<dl>", "<list>", "<dt>", "<dd>"],
      correct: "<dl>",
    },
    {
      id: 20,
      question: "Which input type is used for entering a date in HTML?",
      options: ["date", "datetime-local", "text", "calendar"],
      correct: "date",
    },
    {
      id: 21,
      question: "Which HTML attribute specifies the source file of a script?",
      options: ["src", "href", "script", "file"],
      correct: "src",
    },
    {
      id: 22,
      question: "What is the purpose of the <fieldset> element in HTML?",
      options: [
        "To group related elements in a form",
        "To create a box around text",
        "To define a section in a document",
        "To apply a border to images",
      ],
      correct: "To group related elements in a form",
    },
    {
      id: 23,
      question: "What is the correct HTML element for playing audio files?",
      options: ["<audio>", "<sound>", "<music>", "<media>"],
      correct: "<audio>",
    },
    {
      id: 24,
      question: "What is the purpose of the <legend> tag in HTML?",
      options: [
        "To define a caption for a <fieldset>",
        "To create a legend for an image",
        "To add a title to a table",
        "To format text as bold",
      ],
      correct: "To define a caption for a <fieldset>",
    },
    {
      id: 25,
      question: "Which tag is used to define an ordered list in HTML?",
      options: ["<ol>", "<ul>", "<list>", "<order>"],
      correct: "<ol>",
    },
    {
      id: 26,
      question: "Which HTML tag is used to insert an image?",
      options: ["<img>", "<picture>", "<src>", "<image>"],
      correct: "<img>",
    },
    {
      id: 27,
      question: "What does the <noscript> tag define?",
      options: [
        "Alternate content for users without JavaScript",
        "An additional script to execute",
        "No JavaScript usage",
        "A warning for deprecated JavaScript",
      ],
      correct: "Alternate content for users without JavaScript",
    },
    {
      id: 28,
      question: "What is the correct HTML element for emphasizing text?",
      options: ["<em>", "<italic>", "<i>", "<strong>"],
      correct: "<em>",
    },
    {
      id: 29,
      question:
        "Which HTML tag is used to define a container for external content?",
      options: ["<div>", "<container>", "<section>", "<iframe>"],
      correct: "<iframe>",
    },
    {
      id: 30,
      question: "What is the purpose of the <nav> tag in HTML?",
      options: [
        "To define a navigation section",
        "To create a menu",
        "To define a navigation link",
        "To embed a map",
      ],
      correct: "To define a navigation section",
    },
  {
  id: 31,
  question: "What does CSS stand for?",
  options: [
    "Creative Style Sheets",
    "Cascading Style Sheets",
    "Colorful Style Sheets",
    "Computer Style Sheets",
  ],
  correct: "Cascading Style Sheets",
},
{
  id: 32,
  question: "Which property is used to change the text color in CSS?",
  options: ["color", "text-color", "font-color", "foreground-color"],
  correct: "color",
},
{
  id: 33,
  question: "How do you add an external CSS file to an HTML document?",
  options: [
    "<link rel='stylesheet' href='styles.css'>",
    "<style src='styles.css'>",
    "<stylesheet href='styles.css'>",
    "<css-link href='styles.css'>",
  ],
  correct: "<link rel='stylesheet' href='styles.css'>",
},
{
  id: 34,
  question: "Which property is used to set the background color of an element?",
  options: ["background", "bg-color", "background-color", "color"],
  correct: "background-color",
},
{
  id: 35,
  question: "What is the default value of the `position` property in CSS?",
  options: ["static", "absolute", "relative", "fixed"],
  correct: "static",
},
{
  id: 36,
  question: "Which property controls the font size of an element?",
  options: ["font-size", "font-style", "text-size", "font-weight"],
  correct: "font-size",
},
{
  id: 37,
  question: "How do you select an element with the ID `header` in CSS?",
  options: ["#header", ".header", "header", "id=header"],
  correct: "#header",
},
{
  id: 38,
  question: "Which property is used to create space inside an element's border?",
  options: ["padding", "margin", "spacing", "border-spacing"],
  correct: "padding",
},
{
  id: 39,
  question: "Which property is used to create space outside an element's border?",
  options: ["margin", "padding", "gap", "border-spacing"],
  correct: "margin",
},
{
  id: 40,
  question: "What is the correct syntax for a CSS comment?",
  options: [
    "// This is a comment",
    "<!-- This is a comment -->",
    "/* This is a comment */",
    "### This is a comment ###",
  ],
  correct: "/* This is a comment */",
},
{
  id: 41,
  question: "Which property is used to make text italic in CSS?",
  options: ["font-style", "font-variant", "text-style", "font-weight"],
  correct: "font-style",
},
{
  id: 42,
  question: "What is the correct order of the box model in CSS?",
  options: [
    "Content > Padding > Border > Margin",
    "Content > Margin > Border > Padding",
    "Padding > Content > Border > Margin",
    "Margin > Border > Padding > Content",
  ],
  correct: "Content > Padding > Border > Margin",
},
{
  id: 43,
  question: "Which property is used to set the underline of text?",
  options: ["text-decoration", "font-style", "underline", "text-transform"],
  correct: "text-decoration",
},
{
  id: 44,
  question: "Which CSS property is used to make text bold?",
  options: ["font-weight", "font-style", "text-weight", "bold"],
  correct: "font-weight",
},
{
  id: 45,
  question: "Which CSS unit is relative to the font-size of the root element?",
  options: ["em", "rem", "px", "pt"],
  correct: "rem",
},
{
  id: 46,
  question: "Which property is used to set the space between lines of text?",
  options: ["letter-spacing", "line-height", "text-spacing", "text-indent"],
  correct: "line-height",
},
{
  id: 47,
  question: "How do you apply a class called 'main' in CSS?",
  options: [".main", "#main", "main", "@main"],
  correct: ".main",
},
{
  id: 48,
  question: "Which CSS property is used to align text horizontally?",
  options: [
    "text-align",
    "text-style",
    "horizontal-align",
    "justify-content",
  ],
  correct: "text-align",
},
{
  id: 49,
  question: "Which pseudo-class is used to target an element when hovered over?",
  options: [":hover", ":focus", ":target", ":active"],
  correct: ":hover",
},
{
  id: 50,
  question: "Which property is used to specify the width of a border?",
  options: [
    "border-width",
    "border-size",
    "border-thickness",
    "border-height",
  ],
  correct: "border-width",
},
{
  id: 51,
  question: "What does the `@keyframes` rule do in CSS?",
  options: [
    "Defines an animation",
    "Applies animations to elements",
    "Controls transition timing",
    "Sets media queries",
  ],
  correct: "Defines an animation",
},
{
  id: 52,
  question: "Which CSS property is used to create a flexible layout?",
  options: ["display: flex", "position: relative", "float", "align-items"],
  correct: "display: flex",
},
{
  id: 53,
  question: "What is the purpose of the `z-index` property in CSS?",
  options: [
    "Controls stacking order of elements",
    "Adjusts element size",
    "Applies 3D transformations",
    "Sets opacity",
  ],
  correct: "Controls stacking order of elements",
},
{
  id: 54,
  question: "What is the `grid-template-columns` property used for?",
  options: [
    "Defines the structure of columns in a grid layout",
    "Aligns grid items vertically",
    "Controls the gap between grid items",
    "Specifies column text alignment",
  ],
  correct: "Defines the structure of columns in a grid layout",
},
{
  id: 55,
  question: "Which property is used to apply 3D transformations to an element?",
  options: ["transform", "perspective", "translate3d", "rotate3d"],
  correct: "transform",
},
{
  id: 56,
  question: "What does the `clip-path` property do?",
  options: [
    "Clips an element to a specified shape",
    "Aligns an element",
    "Changes background size",
    "Sets text overflow",
  ],
  correct: "Clips an element to a specified shape",
},
{
  id: 57,
  question: "What is the default value of `flex-direction` in CSS flexbox?",
  options: ["row", "column", "row-reverse", "column-reverse"],
  correct: "row",
},
{
  id: 58,
  question: "Which property is used to apply a gradient background in CSS?",
  options: [
    "background-gradient",
    "background",
    "gradient",
    "linear-gradient",
  ],
  correct: "background",
},
{
  id: 59,
  question: "Which property is used to control the speed of a transition?",
  options: [
    "transition-duration",
    "transition-speed",
    "animation-duration",
    "speed",
  ],
  correct: "transition-duration",
},
{
  id: 60,
  question: "Which value of `position` property is used to fix an element to the viewport?",
  options: ["fixed", "absolute", "relative", "sticky"],
  correct: "fixed",
}
  ];

// HTML

const quizQuestions23 = [
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
