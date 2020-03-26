let myName = “Otiora Mac - Anthony ";
let myCourses = ["HTML", "CSS", "JavaScript", "UI/UX"];

console.log(myName);
console.log(myCourses);

function checkEvenAndOdd(arr) {
    let courses = []
    let lengthOfArr = arr.length;
    if (lengthOfArr % 2 === 0) {
        for (let i = 0; i <= 200; i++) {
            if (i % 2 === 0) {
                courses.push(i);
            }
        }
    } else {
        for (let i = 0; i <= 200; i++) {
            if (i % 2 !== 0) {
                courses.push(i);
            }
        }
    }

    console.log(courses);
}
checkEvenAndOdd(myCourses)