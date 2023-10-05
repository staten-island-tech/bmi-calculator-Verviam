const date = new Date();
let year = date.getFullYear();

const test = {
    firstName: "test",
    lastName: "unknown",
    graduated: false,
    DOB: 2007,
    age: function () {
        return year- this.DOB
    },
    siblings: [],
    spouse: null,
};

console.log(test.firstName);