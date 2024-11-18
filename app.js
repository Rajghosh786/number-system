const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

for(let i = 1; i<numbers.length;i++){
    let primeArray = []
    let bag = 0
    if(numbers[i] === 2){
        primeArray.push(numbers[i])
        bag += numbers[i]
    }else if(numbers[i]%5 !== 0 || numbers[i]%7 !== 0){
        primeArray.push(numbers[i])
        bag += numbers[i]
    }
    console.log(bag)
}  