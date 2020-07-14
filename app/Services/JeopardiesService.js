import _store from "../store.js";
import Jeopardy from "../Models/Jeopardy.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "https://jservice.io/api/random",
  timeout: 3000
})

class JeopardiesService {


  getQuestion() {
    // debugger
    _api.get().then(res => {
      console.log(res.data);
      let jeopardies = res.data.map(rawJeopardyData => new Jeopardy(rawJeopardyData))
      _store.commit("jeopardies", jeopardies)
    }).catch(err => console.error(err))
  }

  getAnswer() {
    document.getElementById("show").classList.remove("hidden")
  }
}

const service = new JeopardiesService();
export default service;
