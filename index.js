// Program to find the largest number from the given array

const age = [75,43,65,73,54,23]
let largest = age[0]
for (const num of age)
{
    if(num > largest)
    {
        largest = num
    }
}
console.log(`highest age: ${largest}`)