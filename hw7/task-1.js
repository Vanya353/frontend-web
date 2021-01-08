// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.
                                                            // 2
// function GetNumbers(){
//     let from = +prompt("From?",1);
//     let to = +prompt("to?",1);
//     let result=[];
//     for(let i=from;i<to;i++){
//         result.push(i);
//     }
//     return result;
// }
// console.log(GetNumbers())


// // 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home
// function isSimple() {
//     let from = +prompt("From?",1);
//     let to = +prompt("to?",1);
//     let result = [];
//     for(let i=from;i<=to;i++)
//     if(i%2===0){
//       result.push(i);
//     }
//     return result
//   }
//   console.log(isSimple(1,20))
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.
function foreverFunc(){
    let result=[];
    for(let i=0;true;i++){
        let a = prompt("tell something",0);
        if(a!== "Stop"){
            result.push(i);
        }else{
            break;
        }
        console.log(i);
    }
  }

