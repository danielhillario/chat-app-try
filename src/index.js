const React = require("react");
const { render } = require("react-dom");
const App = require("./components/app.js");

let target = document.querySelector("#app");

render(<App />, target);