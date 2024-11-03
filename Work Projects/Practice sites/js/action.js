
 function checkButtonPress () {
    const name = document.getElementById("name").Value;
    if(name){
        alert("Button Was pressed! Form will be submitted.");
        document.getElementById("main title").submit();
    }else{
        alert ("Please enter your name before submitting.");
    }
}