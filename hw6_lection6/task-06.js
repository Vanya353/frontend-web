function rentalCarCost(d) {
    // Your solution here
    let price = 40;
    let total = d * price;
    if (d >= 7){
      total = total - 50;
      return total;
      } else if (d >= 3){
          total= total - 20;
        return total
          }else{
          return total
          }
      }
  
   