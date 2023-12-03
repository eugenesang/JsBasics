// if we want to perform some operation with an object's attribute:
// it is safe to check if the attribute exists to avoid grinding to halts

let obj = {
  name: {
    first: "Kiprop",
    middle: "Eugene",
    sur: "Sang"
  },
  gender: "male",
  age: 20
};
function printPersonalInfo(person) {
  let info = ``;

  if (person) {

    if (person.name) {
      info += `name : ${person.name.first} ${person.name.middle} ${person.name.sur}`;
    }
    if (person.gender) {
      info += `
      gender: ${person.gender}
      `;
    }
    if (person.age) {
      info += ` age : ${person.age}`;
    }
  }
  console.log(info);
}

// a more neater way to do it is
function printInfo(person) {
  console.log("name : ", person?.name?.first, person?.name?.middle, person?.name?.sur);
  console.log("gender : ", person?.gender);
  console.log("age : ", person?.age);
}
