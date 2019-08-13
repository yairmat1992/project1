//arrow function, filter, map, find,this


//arrow function

function startGame() {
    this.lives = 0;
    this.addLives = () => {
        this.oneUp
        setInterval(() => {
            console.log(this.lives++);

        }, 2000)
    }
}
const mario = new startGame();
mario.addLives();



//filter&map


const numbers = [1, -1, 2, 3, 4, 5, -8]
const filtered = numbers.filter(n => n >= 0)
console.log(filtered);


filtered.map(n => '<li>' + n + '</li>')
const html = '<ul>' + filtered.join('') + '</ul>'
console.log(html);



//find
const people = [{
    name: "Yair",
    occupation: "student"
},
{
    name: "Odel",
    occupation: "officer"
}
]
console.log(people);
function isAGENT(person) {
    return person.occupation === "agent"

}
console.log(people.find(isAGENT).name)
