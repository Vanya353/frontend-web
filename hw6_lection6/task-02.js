function ChooseNumber(){
    let userChoice = prompt("Введите число",0);
    if (userChoice>0){
        let result = userChoice * -1;
        alert(result);
    }if(userChoice<0){
        let result = userChoice * -1 * -1;
        alert(result);
    }else{
        alert(0)
    }

    }
    ChooseNumber()