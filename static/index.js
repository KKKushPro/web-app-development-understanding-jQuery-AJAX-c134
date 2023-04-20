//Create date variable
var date = new Date()
let display_date = "Date:"+date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function(){
    $("#display_date").html(display_date)

})

//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML
let predicted_emotion 
//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        let input_data={
            "text":$("#text").val()
        }
        $.ajax({
            type:"POST",
            URL:"/predict-emotion",
            data:JSON.stringify(input_data),
            data:"json",
            content:"application/json",
            success:function(Result)
            
              {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = Result.data.predicted_emotion
                emo_url = Result.data.predicted_emotion_img_url
                // Display Result Using JavaScript----->HTML
                $("prediction").html(predicted_emotion)
                $("prediction").html(css("display","block"))
            },
            //Error function
            error:function(Result){
                alert(result.responsejson.message)
            }
        });
    });
})

