let msg="Hello";

document.getElementById("btn").addEventListener("click", printMessage());

function randomMessage(){
    let num = Math.floor(Math.random()*6);

    return `Today we have ${num} guests for dinner!`

}

function printMessage(){

    document.getElementById("message").innerText=randomMessage();
}