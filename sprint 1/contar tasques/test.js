const fs = require("fs/promises")

const readFile = async (file) => await fs.readFile(file, 'utf8')

const processData = (arr) => {
    arr = arr.split("\r\n")
    for (let i = 0; i < arr.length; i++) arr[i] = arr[i].split(" ")
    return arr
}

const countStudents = (arr) => arr.length

const countTasks = (arr) => {
    let taskCount = 0
    for (const student of arr) {
        taskCount += parseInt(student[1])
    }
    return taskCount
}

readFile("comments.txt")
.then(res => {
    res = processData(res)
    console.log({
        students: countStudents(res), 
        tasks: countTasks(res)
    })
})