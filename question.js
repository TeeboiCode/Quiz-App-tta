// // HTML
// const quizQuestions = [
//     {
//       id: 1,
//       question: "What does HTML stand for?",
//       options: [
//         "Hyperlinks and Text Markup Language",
//         "Home Tool Markup Language",
//         "Hyper Text Markup Language",
//         "High Text Markup Language",
//       ],
//       correct: "Hyper Text Markup Language",
//     },
//     {
//       id: 2,
//       question: "Which HTML tag is used to define an internal stylesheet?",
//       options: ["<style>", "<css>", "<script>", "<link>"],
//       correct: "<style>",
//     },
//     {
//       id: 3,
//       question:
//         "Which HTML element is used to specify a header for a document or section?",
//       options: ["<header>", "<section>", "<head>", "<title>"],
//       correct: "<header>",
//     },
//     {
//       id: 4,
//       question: "What is the correct HTML element for inserting a line break?",
//       options: ["<br>", "<lb>", "<break>", "<hr>"],
//       correct: "<br>",
//     },
//     {
//       id: 5,
//       question: "Which HTML tag is used to create an unordered list?",
//       options: ["<ul>", "<ol>", "<li>", "<list>"],
//       correct: "<ul>",
//     },
//     {
//       id: 6,
//       question: "What is the correct syntax for creating a hyperlink in HTML?",
//       options: [
//         '<a href="https://example.com">Visit</a>',
//         '<a src="https://example.com">Visit</a>',
//         '<link href="https://example.com">Visit</link>',
//         "<a>Visit https://example.com</a>",
//       ],
//       correct: '<a href="https://example.com">Visit</a>',
//     },
//     {
//       id: 7,
//       question: "What is the purpose of the <alt> attribute in the <img> tag?",
//       options: [
//         "To specify the image size",
//         "To provide an alternative text for the image",
//         "To define the image source",
//         "To set the image alignment",
//       ],
//       correct: "To provide an alternative text for the image",
//     },
//     {
//       id: 8,
//       question: "Which HTML tag is used to define a table row?",
//       options: ["<td>", "<tr>", "<th>", "<table-row>"],
//       correct: "<tr>",
//     },
//     {
//       id: 9,
//       question: "What is the correct way to specify a background color in HTML?",
//       options: [
//         '<body style="background-color:blue;">',
//         '<background-color="blue">',
//         '<body color="blue">',
//         '<body background="blue">',
//       ],
//       correct: '<body style="background-color:blue;">',
//     },
//     {
//       id: 10,
//       question:
//         "Which HTML element is used to display a scalar measurement within a range?",
//       options: ["<meter>", "<progress>", "<range>", "<input>"],
//       correct: "<meter>",
//     },
//     {
//       id: 11,
//       question: "What is the correct HTML element for the largest heading?",
//       options: ["<h1>", "<h6>", "<header>", "<heading>"],
//       correct: "<h1>",
//     },
//     {
//       id: 12,
//       question: "Which HTML tag is used to create a dropdown list?",
//       options: ["<select>", "<dropdown>", "<option>", "<list>"],
//       correct: "<select>",
//     },
//     {
//       id: 13,
//       question: "What is the correct HTML for making a checkbox?",
//       options: [
//         '<input type="checkbox">',
//         '<input type="check">',
//         "<checkbox>",
//         "<check>",
//       ],
//       correct: '<input type="checkbox">',
//     },
//     {
//       id: 14,
//       question: "Which attribute specifies the destination of a link in HTML?",
//       options: ["href", "src", "link", "destination"],
//       correct: "href",
//     },
//     {
//       id: 15,
//       question: "Which HTML tag is used to define an inline frame?",
//       options: ["<iframe>", "<frame>", "<inline>", "<iFrame>"],
//       correct: "<iframe>",
//     },
//     {
//       id: 16,
//       question: "What is the correct way to write a comment in HTML?",
//       options: [
//         "<!-- This is a comment -->",
//         "// This is a comment",
//         "'This is a comment",
//         "** This is a comment **",
//       ],
//       correct: "<!-- This is a comment -->",
//     },
//     {
//       id: 17,
//       question:
//         "Which HTML attribute specifies an input field that must be filled out?",
//       options: ["required", "validate", "mandatory", "placeholder"],
//       correct: "required",
//     },
//     {
//       id: 18,
//       question: "What is the correct HTML element to embed a video?",
//       options: ["<video>", "<media>", "<movie>", "<embed>"],
//       correct: "<video>",
//     },
//     {
//       id: 19,
//       question: "Which HTML tag is used to define a description list?",
//       options: ["<dl>", "<list>", "<dt>", "<dd>"],
//       correct: "<dl>",
//     },
//     {
//       id: 20,
//       question: "Which input type is used for entering a date in HTML?",
//       options: ["date", "datetime-local", "text", "calendar"],
//       correct: "date",
//     },
//     {
//       id: 21,
//       question: "Which HTML attribute specifies the source file of a script?",
//       options: ["src", "href", "script", "file"],
//       correct: "src",
//     },
//     {
//       id: 22,
//       question: "What is the purpose of the <fieldset> element in HTML?",
//       options: [
//         "To group related elements in a form",
//         "To create a box around text",
//         "To define a section in a document",
//         "To apply a border to images",
//       ],
//       correct: "To group related elements in a form",
//     },
//     {
//       id: 23,
//       question: "What is the correct HTML element for playing audio files?",
//       options: ["<audio>", "<sound>", "<music>", "<media>"],
//       correct: "<audio>",
//     },
//     {
//       id: 24,
//       question: "What is the purpose of the <legend> tag in HTML?",
//       options: [
//         "To define a caption for a <fieldset>",
//         "To create a legend for an image",
//         "To add a title to a table",
//         "To format text as bold",
//       ],
//       correct: "To define a caption for a <fieldset>",
//     },
//     {
//       id: 25,
//       question: "Which tag is used to define an ordered list in HTML?",
//       options: ["<ol>", "<ul>", "<list>", "<order>"],
//       correct: "<ol>",
//     },
//     {
//       id: 26,
//       question: "Which HTML tag is used to insert an image?",
//       options: ["<img>", "<picture>", "<src>", "<image>"],
//       correct: "<img>",
//     },
//     {
//       id: 27,
//       question: "What does the <noscript> tag define?",
//       options: [
//         "Alternate content for users without JavaScript",
//         "An additional script to execute",
//         "No JavaScript usage",
//         "A warning for deprecated JavaScript",
//       ],
//       correct: "Alternate content for users without JavaScript",
//     },
//     {
//       id: 28,
//       question: "What is the correct HTML element for emphasizing text?",
//       options: ["<em>", "<italic>", "<i>", "<strong>"],
//       correct: "<em>",
//     },
//     {
//       id: 29,
//       question:
//         "Which HTML tag is used to define a container for external content?",
//       options: ["<div>", "<container>", "<section>", "<iframe>"],
//       correct: "<iframe>",
//     },
//     {
//       id: 30,
//       question: "What is the purpose of the <nav> tag in HTML?",
//       options: [
//         "To define a navigation section",
//         "To create a menu",
//         "To define a navigation link",
//         "To embed a map",
//       ],
//       correct: "To define a navigation section",
//     },
//   ];