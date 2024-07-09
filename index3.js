// Program to find the sum of odd numbers from the given array

const numbers = [2,4,5,8,9,1,11,10]

let sum = 0;

for(let i=0; i<numbers.length; i++){
    if(numbers[i] %2==1){
        sum+= numbers[i]
    }
}
console.log(`sum: ${sum}`)