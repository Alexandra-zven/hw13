function calc(){
    const firstvalue = document.getElementById("first_value").value;
    const secondvalue = document.getElementById("second_value").value;
    const operator = document.getElementById("operator").value;
    let res = 0;

    switch (operator) {
        case "-":
            res = +firstvalue - +secondvalue;
            document.getElementById("res_calc").innerHTML = res;
                break;
        case "/":
            res = +firstvalue / +secondvalue;
            document.getElementById("res_calc").innerHTML = res;
            break;
        case "*":
            res = +firstvalue * +secondvalue;
            document.getElementById("res_calc").innerHTML = res;
            break;
        default:
            res = +firstvalue + +secondvalue;
            document.getElementById("res_calc").innerHTML = res;
            break;
    }
}

let arr = [];
let sum_items = 0;
function addItem(){
    let item = document.getElementById("item_input").value;
    arr.push(item);
    sum_items += +item;
    document.getElementById("sum_item").innerHTML = sum_items;
    document.getElementById("array_result").innerHTML = JSON.stringify(arr);
}

function reverseNumber(){
    let number = document.getElementById("number_input").value;
    let reverse_result = number.split("").reverse().join("");
    document.getElementById("reverse_result").innerHTML = reverse_result;
}