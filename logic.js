//Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible.

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide(2000);
    });
    $("#show").click(function(){
      $("p").show(2000);
    })
  });

//Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page.


$(document).ready(function(){
$("#btn").click(function(){
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos/12",
    type:"GET",
    success:function(data){
      console.log(data);
      document.getElementById("heading").innerText=data["title"];
    }
  })
})
})