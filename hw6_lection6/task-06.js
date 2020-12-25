function order(){
    let arenda = prompt("на сколько времени арендуем автомобиль");
    let price = 40;
    let total = arenda * price;
    if (arenda >= 7){
        alert(total - 50);
    } else if (arenda >= 3){
        alert(total - 20);
        }else{
        alert(total)
        }
    }
    order()