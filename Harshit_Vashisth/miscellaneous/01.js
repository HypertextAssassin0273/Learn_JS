/* How to use map and filter simultaneously on an array ? */

let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" }
];

let basketballPlayers = students.filter(({sports : s}) => s === "Basketball")
                                .map(({name : n}) => n);

console.log("Basketball Players are:");
basketballPlayers.forEach(players => { console.log(players) });