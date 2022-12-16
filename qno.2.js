let even=0 
let odd=0
for(i=1;i<=100;i++)
{
  if(i%2==0)
  {
    even+=i
  }
  if(i%2!=0){
    odd+=i
  }
}
console.log("Proofhub_technical task Qno.2 -Manish")
console.log("The Sum of even Number Between 1-100 is :- " , even)
console.log("The Sum of odd Number Between 1-100 is :- " , odd)
console.log("The Sum Of Odd and Even Numbers Between 1-100 is ",odd+even)