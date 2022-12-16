const input = parseInt(prompt('Enter The Number:-  '));
let firstnum = 0, secondnum = 1;
console.log('Proofhubh_technical_task_qn0.1_Manish');
console.log(firstnum);
console.log(secondnum); 
let nextnumb = firstnum + secondnum;
while (nextnumb <= input) {
    console.log(nextnumb);

    firstnum = secondnum;
    secondnum = nextnumb;
    nextnumb = firstnum + secondnum;
}