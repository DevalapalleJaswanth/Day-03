let students=[{name:"John",marks:80},{name:"Doe",marks:85},{name:"Dove",marks:75}];

//"for" loop
  for(let i=0;i<students.length;i++){
      console.log(`Name:${students[i].name}  Marks:${students[i].marks}`);
  }

//"for in"  loop   
  for(let index in students){
      console.log(`Name:${students[index].name}  Marks:${students[index].marks}`);
  }

//"for of"  loop   
for(let element of students){
    console.log(`Name:${element.name}  Marks:${element.marks}`);
}  

//"forEach" loop
students.forEach(function(value,index,array){
    console.log(`Name:${value.name}  Marks:${value.marks}`);
})