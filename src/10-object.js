// 객체 생성
// 객체 생성자 방식
const me = new Object();
console.log(me);

// 객체 리터럴 방식
const me2 = {};
console.log(me2);

const this_is_object = {
  key: "value",
  name: "kim",
  age: 21,
  isMarried: true,
  children: ["Bryan", "Tae-ho"],
  play: function () {
    console.log("게임 중");
  },
  null: undefined
};

const children = "children";

console.log(this_is_object.key);
console.log(this_is_object.name);
console.log(this_is_object["children"]);
console.log(this_is_object[children]);
console.log(this_is_object.children);
console.log(this_is_object.play());

console.log(this_is_object["name"]);

const person = {
  name: "kim",
  age: 20
};

const getValue = (key) => {
  return person[key];
};

const result = getValue("name");
console.log(result);