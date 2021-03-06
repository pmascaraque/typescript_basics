//Variables

var myNum: number = 5.321;

interface MyObject {
    x: number;
    y: number;
    z?: number;
}

const obj: MyObject = {
    x: 5.321,
    y: 6
};

obj.z = 123;

console.log(obj);

const myArray: string[] = ["Blue", "Green", "Red"];

for (const item of myArray) {
    console.log(item.toUpperCase());
}

//Functions

type AddFunc = (x: number, y: number) => number;

var add: AddFunc = (x: number, y: number): number => x + y;

var add2 = ({ a, b }: { a: number, b: number }) => a + b;

add(123, obj.x);

//Unions

var maybeNum: number | string | AddFunc = 5;
maybeNum = "Hello";
maybeNum = add;

interface Dog {
    bark: string;
}

interface Cat {
    purr: string;
}

type DogCat = Dog & Cat | number | string;

var dogCat: DogCat = {
    bark: "bark",
    purr: "purr"
};

dogCat = 5;

if (typeof dogCat === "number") {
    console.log("number: " + dogCat);
}

//Casting

add(dogCat as number, dogCat as any);

//Any

var logAnything = (x: any) => {
    console.log(x);
}

logAnything(() => 5);