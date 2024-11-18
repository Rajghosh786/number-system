const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  for(let i = 1; i < numbers.length;i++){
    let even = ''
    let odd = ''
    // console.log(numbers)
    if(numbers[i]%2 === 0){
        // even += numbers[i] + " "
        console.log(numbers[i],"Even number")
    }else if(numbers[i]%2 !== 0){
        // odd += numbers[i] + " "
        console.log(numbers[i],"Odd number")
    }
    // console.log(even)
    // console.log(odd)
  }