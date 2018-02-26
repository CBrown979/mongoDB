/* global db use */
//to create monsters collection
db.createCollection("monsters");

//new mongo db called myGame
use myGame

//insert 2 documents
db.monsters.insert(
    [{
        "Name": "Trump",
        "Health": "Sick",
        "Last Fought": new Date(2018,1,25),
        "Attacks": ["Lie", "Cheat", "Steal"],
        "Stats": {"Attack": 1, "Defense": 0}
    },
    {
        "Name": "GunFoo",
        "Health": "Sick",
        "LastFought": new Date(2017,1,20),
        "Attacks": ["Stealth", "PD", "Ninja"],
        "Stats": {"Attack": 9, "Defense": 9}
    },
    {
        "Name": "KravMaga",
        "Health": "Great",
        "LastFought": new Date(2018,2,15),
        "Attacks": ["Stealth", "Pro", "Ninja"],
        "Stats": {"Attack": 9, "Defense": 9}
    }]
)

function attacks(Name,Health,LastFought,Attacks,Stats,db){
    db.monsters.insert({
        "Name": "Trump",
        "Health": "Sick",
        "Last Fought": new Date(2018,1,25),
        "Attacks": ["Lie", "Cheat", "Steal"],
        "Stats": {"Attack": 1, "Defense": 0}
    })
}

//to find all documents
db.monsters.find();

//find monster based on name
db.monsters.find({
    "Name": "Krav Maga"
})

//find monster based on attack
db.monsters.find({
    "Attacks.Stealth"
})

//find monster based on defense
db.monsters.find({
    "Stats.Defense":9
})