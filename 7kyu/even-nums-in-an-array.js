function evenNumbers(array, number) {
   
    let newArr =[]
    for(let i=array.length;i>=0;i--){
      if(array[i]%2==0 ){
        newArr.push(array[i])
      }
    }
    return newArr.slice(0,number).reverse()
  }




  const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);