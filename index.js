$(document).ready(function() {
    $(".icon").on("click", function() {
        var $questions = $(".questions");
        var $clickedQuestion = $(this).closest(".questions");
        var $clickedAnswer = $clickedQuestion.find(".answer p");
        var $clickedIcon = $clickedQuestion.find(".icon svg");
        var $clickedHeader = $clickedQuestion.find(".header");
        
        // Close all other dropdowns
        $questions.not($clickedQuestion).find(".answer p").slideUp();
        $questions.find(".icon").removeClass("active");
        $questions.not($clickedQuestion).find(".header").removeClass("active");
        $questions.not($clickedQuestion).find(".icon svg").removeClass("active");

        // Toggle the clicked dropdown
        $clickedAnswer.slideToggle();
        $(this).toggleClass("active");
        
        // Toggle the headers and icon states
        $clickedHeader.toggleClass("active");
        $clickedIcon.toggleClass("active");
    });
});