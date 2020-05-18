const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple
} = {
    name: "Nikola",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, "Author"]
}

//enum example
// const dogs = 1
// const cats = 0
// enum Pets { dogs, cats};
// console.log("dogo", Pets.dogs)



// for (const hobby of person.hobbies){
    //     console.log(hobby)
// }

console.log(person);