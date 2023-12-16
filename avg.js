//find avg of given numbers 85,97,
//44, 37, 76,60

let num = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let i = 0; i <num.length; i++) {
   sum += num[i];
}
console.log(sum);

let avg = sum/num.length;
console.log(avg);