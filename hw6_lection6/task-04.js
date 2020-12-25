function love(){
    let firstFlower = prompt("Первый лепесток",0);
    let secondFlower = prompt("Второй лепесток",0);
    let result = firstFlower % 2;
    let result2 = secondFlower % 2;
    if(result==0 && result2!=0){
        alert("по моему кто то влюбился");
    }
    if(result2==0 && result!==0){
        alert("Тоже влюблены");
    }if(result2==0 && result==0){
        alert("Сегодня не судьба")
    }
    }