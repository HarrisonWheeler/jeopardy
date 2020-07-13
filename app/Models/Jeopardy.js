export default class Jeopardy {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.value = data.value
    }

    get Template() {
        return /*html*/ ` 

        <div class="col-8 pt-3">
                <div class="card">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body bg-light">
                        <h4 class="card-title">Question: ${this.question}</h4>
                        <p class="card-text">Difficulty: ${this.value}</p>
                        <button class="btn btn-rounded btn-danger" onclick="app.jeopardiesController.getAnswer()">Get Answer!</button>
                        <button class="btn btn-rounded btn-success float-right" onclick="window.location.reload()">Get New Question!</button>
                        <h3 class="card-text text-center hidden" id="show">Answer: ${this.answer}</h3>
                    </div>
                </div>
            </div>
        `

    }
}