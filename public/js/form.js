
//login falso
$("#usuario form").submit(function(){
    var form_name = $("#nombre").val();
    localStorage.setItem("form_name", form_name);


});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
    $("#appear p").html("Bienvenido"+ form_name);
    $("#usuario").hide();
}