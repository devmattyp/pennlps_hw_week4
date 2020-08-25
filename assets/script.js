function createQuiz(questions, quizContainer, resultsContainer, submitButton){
    function displayQuestions(questions, quizContainer){
        //add code here
    }
    function displayResults(questions, quizContainer, resultsContainer){
        //add code here
    }
    //questions are shown
    displayQuestions(questions, quizContainer);

    //user clicks the submit button, results are displayed
    submitButton.onclick = function(){
        displayResults(questions, quizContainer, resultsContainer);
    }
}