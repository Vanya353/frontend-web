function lovefunc(flower1, flower2){
    // moment of truth
    let result = flower1 % 2;
    let result2 = flower2 % 2;
    if(result==0 && result2!=0){
      return true
      }
      if(result2==0 && result!==0){
          return true;
      }if(result2==0 && result==0){
          return false;
      }
  }
  