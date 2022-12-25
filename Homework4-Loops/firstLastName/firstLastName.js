let firstName = ["Monika", "Stefan", "Bistra"];
let lastName = ["Belluci", "Pernik", "Bistrova"];

function firstLastName (firstName, lastName){
    let arrayone;
    let arraytwo;

    for (let i = 0; i<firstName.length; i++){
        arrayone = (i+1) + ". " + firstName[i];
        arraytwo = lastName[i];
        console.log(arrayone, arraytwo);
    }
    return string=`${firstName} + ${lastName}`;
}
firstLastName(firstName, lastName);