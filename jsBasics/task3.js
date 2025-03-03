// варіант зі зміними

let maxAge = 27; //зміна вік для юзера 1
let annaAge = 17; //зміна вік для юзера 2

console.log(maxAge >= 18); // перевірка чи юзеру1 більше 18

console.log(annaAge >= 18); // перевірка чи юзеру2 більше 18





// зробив через об'єкт, хотів попробувати)
class PersonInfo {
    name = ""
    age = 0
}

let max = new PersonInfo();
max.name = "Maksym";
max.age = 27;

let anna = new PersonInfo();
anna.name = "Anna";
anna.age = 16;
    

console.log(max.age >=18);

console.log (anna.age >=18);