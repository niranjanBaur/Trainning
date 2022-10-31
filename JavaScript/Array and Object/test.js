let users = [
    user1 = {
        firstName : "Olivia",
        lastName : "Sen",
        gen : "F"
    },
    user2 = {
        firstName : "Aakash",
        lastName : "Das",
        gen : "M"
    },
    user3 = {
        firstName : "Shreya",
        lastName : "Halder",
        gen : "F"
    },
    user4 = {
        firstName : "Shivam",
        lastName : "Chowdhury",
        gen : "M"
    },
    user5 = {
        firstName : "Rakesh",
        lastName : "Sarkar",
        gen : "M"
    },      
    user6 = {
        firstName : "Reemita",
        lastName : "Sen",
        gen : "F"
    }
]

const male = []
const female = []

const op = users.reduce(function(prev,curr){
    if(curr.gen == "M"){
        male.push(`${curr.firstName} ${curr.lastName}`)
    }
    else{
        female.push(`${curr.firstName} ${curr.lastName}`)
    }
},0)

console.log(male)
console.log(female)