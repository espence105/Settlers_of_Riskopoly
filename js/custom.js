/**
 * Created by Eric on 4/18/2015.
 */
function submitSell(){
    $.post(
           'http://posttestserver.com/post.php?dir=lookHERE',
        {
            resourceID: $("#resourceNumber").val(),
            quantity:   $("#number").val(),
            user:       $("#user").val()
        },
        function(data){
            alert("Data: " + data + "\nStatus: " + status);
        });
}