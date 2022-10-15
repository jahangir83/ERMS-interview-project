
  let a = [1,2,3,4,5]

const r = (arr , d) => {
let result ;
  let temp
  let j
  let i
  for ( i = 0 ; i < arr.length; i++){
    temp = arr[i]
    for( j = 0; j < arr.length -1; j++){
      result[j + 1] = arr[j + 1]
    }
    result[j] = temp
  }

  return result;
}


console.log(  r[a, 4]);