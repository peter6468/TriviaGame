$("#start").on("click", function() {
    game.start();
})

$(document).on("click","#end", function() {
    game.done();
})

var questions = [{
    question:"Who created Gravity Falls?",
    answers: ["Matt Groening", "Alex Hirsch", "Seth Rogen", "Seth McFarlane"],
    correctAnswer: "Alex Hirsch"
}, {
    question:"What is the Dipper's sister's name?",
    answers: ["Marble", "Alexa", "Maple", "Mable"],
    correctAnswer: "Mable"
}, {
    question:"What is the loveable man-child who works at he Mystery Shack?",
    answers: ["Grunkle Stan", "Dipper", "Soos", "Manly Dan"],
    correctAnswer: "Soos"
}, {
    question:"Who is a powerful dream demon from another plane of existence that can influence or control citizens of Gravity Falls through a trans-dimensional mindscape?",
    answers: ["Old Man", "Bill Cipher", "Manly Dan", "Lazy Susan"],
    correctAnswer: "Bill Cipher"
}, {
    question:"What is a child pyshic and self promoter of his own tourist trap?",
    answers: ["Lil Gideon", "Bill Cipher", "Manly Dan", "Soos"],
    correctAnswer: "Bill Cipher"
}, {
    question:"What is the owner of Greasy's Diner who always has one eye closed, and is Stan's crush?",
    answers: ["Shandra Jimenez", "Candy Chiu", "Tambry", "Lazy Susan"],
    correctAnswer: "Lazy Susan" 
}, {
    question:"Who is the mayor?",
    answers: ["Bud Gleeful", "Tyler Cutebiker", "Manly Dan", "Bill Cipher"],
    correctAnswer: "Tyler Cutebiker"

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#start").remove();
        for(var i=0; i < questions.length; i++){
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            //sub loop here, append each and every ? w/a radio type, a name = to the # of question and a value = to the answer that 
            //we can store the values in the buttons themselves
            for (var j=0; j<questions[i].answers.length; j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='" + questions[i].answers[j] + "'>"+questions[i].answers[j])
            }
    }
    $("#subwrapper").append("<br><button id='end'>Done</button>");
  },
  done: function() {
      //looks for each element in these ()
      //looking for any input w/question 0 and is currently checked
      $.each($("input[name='question-0']:checked"), function() {
          if($(this).val()==questions[0].correctAnswer){
              game.correct++;
          } else { 
              game.incorrect++;
          }
         });
      $.each($("input[name='question-1']:checked"), function(){
          if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else { 
                game.incorrect++;
            }
            });
        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else { 
                game.incorrect++;
            }
            });
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else { 
                game.incorrect++;
            }
            });
        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else { 
                game.incorrect++;
            }
            });
        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else { 
                game.incorrect++;
            }
            });
        $.each($("input[name='question-6']:checked"), function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else { 
                game.incorrect++;
            }
            });

        this.result();
        },

        result: function(){
            clearInterval(timer);
            $("#subwrapper h2").remove();

            $("#subwrapper h2").html("<h2>All Done</h2>");
            $("#subwrapper").append("<h3>Correct Answers: "+this.correct+ "</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+ "</h3>");
            $("#subwrapper").append("<h3>UnAanswered: "+(questions.length-(this.incorrect + this.correct))+ "</h3>");
            
        }
  }
