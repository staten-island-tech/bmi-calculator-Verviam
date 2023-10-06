// const date = new Date();
// let year = date.getFullYear();

// const test = {
//     firstName: "test",
//     lastName: "unknown",
//     graduated: false,
//     DOB: 2007,
//     age: function () {
//         return year- this.DOB
//     },
//     siblings: [],
//     spouse: null,
// };

// console.log(test.firstName);


// let nums = [1, 2, 3, 4, 5];

// console.log(nums[0]);


// nums.forEach((num) => console.log(num));

let students = [
    {
        firstName: "asdfasdf",
        lastName: "hello",
        graduated: false
    },
    {
        firstName: "Jason",
        lastName: "He",
        graduated: true
    },
    {
        firstName: "yes"
    }
];

students.forEach((student) => console.log(student.firstName));

//filter
const graduates = students.filter((students) => students.graduated === true);
console.log(graduates);