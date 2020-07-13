import JeopardiesController from "./Controllers/JeopardiesController.js";

class App {
  jeopardiesController = new JeopardiesController();
}

window["app"] = new App();
