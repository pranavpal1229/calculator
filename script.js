let answer_box = document.querySelector(".text-box")
let buttonss = document.getElementsByClassName("button")
let buttons = Array.from(buttonss)
let opOn = false
let addButton = document.getElementById("+")
let subButton = document.getElementById("-")
let multButton = document.getElementById("X")
let divButton = document.getElementById("/")
let clearButton = document.querySelector("#clear")
let listOfOperations = [addButton, subButton, multButton, divButton]
let currOp = " "
let var1 = 0
let var2 = 0

clearButton.addEventListener('click', clearAnswer)
buttons.forEach(button => {
    button.addEventListener('click', displayButton)
    
});

function displayButton(){
    if(this.value == '='){
        resetButton(listOfOperations)
        answer_box.textContent = evalOperation(var1, var2, currOp)
    }
    else if(this.value == '+' || this.value == '-' || this.value == 'X'|| this.value == "/"){
        resetButton(listOfOperations)
        this.style.color = "orange"
        this.style.backgroundColor = 'white'
        opOn = true
        currOp = this.value
    }
    else if(opOn && answer_box.textContent.length >= 0){
        answer_box.textContent = this.value
        resetButton(listOfOperations)
        var2 = answer_box.textContent
        opOn = false


    }
    else if(opOn == false && var1 > 0){
        answer_box.textContent += this.value
        var2 =  answer_box.textContent
    }
    else{
        answer_box.textContent = answer_box.textContent + this.value
        var1 = answer_box.textContent
    }
}

function evalOperation(firstvar, var2, op){
    let answer = 0
    console.log("var1", firstvar)
    console.log("var2", var2)
    console.log("op", op)
    if (op == '+'){
        answer = Number(firstvar) + Number(var2)
    }

    else if (op == "-"){
        answer = firstvar - var2
    }
    else if(op == "X"){
        answer = (firstvar* var2).toFixed(3)
    }
    else if (op == "/"){
        answer = (firstvar/ var2).toFixed(2)
    }
    console.log(answer)
    var1 = answer
    return answer

}

function clearAnswer(){
    answer_box.textContent = " "
    opOn = false
    resetButton(listOfOperations)
}

function resetButton(buttonList){
    buttonList.forEach(element => {
        element.style.backgroundColor = 'black'
        element.style.color = "white"
    });
}