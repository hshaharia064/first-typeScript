console.log(Math.floor(0.7));

const name: string = "shaharia";

console.log(name);

function add(a: number, b: number): number {
  let sum = a + b;
  return sum;
}
console.log(add(5, 34));

////////////////////////////////////////////

function addALl(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (result !== undefined) {
      result += nums[i]!;
    }
  }
  return result;
}

console.log(addALl(1, 2, 3, 4, 5, +true));

let my: string | number;
my = 5;
console.log("my : ", my);

my = "shaharia";
console.log("my : ", my);

// type aliases

type studentType = {
  name: string;
  age: number;
  role: string;
  email: string;
};

let student: studentType = {
  name: "shaharia",
  age: 25,
  role: "developer",
  email: "shaharia@example.com",
};
console.log(student);
