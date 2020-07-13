import _jeopardiesService from "../Services/JeopardiesService.js";
import store from "../store.js";

//Private
function _draw() {
  let jeopardies = store.State.jeopardies;
  let template = ''
  jeopardies.forEach(jeopardies => template += jeopardies.Template)
  document.getElementById("jeopardy").innerHTML = template
  console.log("draw worked");
}


//Public
export default class JeopardiesController {
  constructor() {
    store.subscribe("jeopardies", _draw);
    _jeopardiesService.getQuestion()
  }
  getAnswer() {
    _jeopardiesService.getAnswer()
  }
}
