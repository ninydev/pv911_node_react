class User {
    name: string;

    constructor(_name:string) {
        this.name = _name;
    }
}

const Alex: User = new User("Alex");
const main = document.getElementById("main");
main.innerText = Alex.name;