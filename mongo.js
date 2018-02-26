//Mongo Level 1 

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

//Mongo Level 3 
//Sample Database
{
    "name": "Bat",
    "Level": 4,
    "health": 25,
    "type": "Flying",
    "attacks": ["scratch", "bite"],
    "stats": {
        "attack": 5,
        "defense": 2
    }
    "style": "cool"
}

var mongo = function(db){
    //find all monsters with attack < 10
    db.monster.find({
        "Level": {
            "$lt": 10
        }
    })
    
    //find all monsters with levels above 5 but below 15 inclusive
    db.monster.find({
        "Level": {
            "$gt": 5,
            "$lte": 15
        }
    })
    
    //find monsters that don't have bite attack
    db.monster.find({
        "attack": {
            "$ne": "bite"
        }
    })
    
    //find monsters with levels < 6 but only return the name, level & health attributes
    db.monster.find({
        "Level": {
            "$lt": 6
        }
    },
    {
        "name": true,
        "Level": true,
        "health": true
    })
    
    //find all monsters whose attack is between 10 & 20 - but doesn't include monster health or style
    db.monster.find({
        "Level": {
            "$gte": 10,
            "$lte": 20
        }
    },
    {
       "health": false,
       "style": false
    })
    
    //find out how many monsters are in the collection
    db.monster.find().count()
    
    //sort the collection by the monsters level w/ the highest level at the top and the lowest at the bottom
    db.monster.find().sort({
        "Level": 1
    })
    
}