// This is the actual function that assigns a random family member
const personPicker = (family, personArr) => {
  personArr.forEach(person => {
    const currentAvailableFamilyArray = person.availableFamilyArray()
    let randomIndex = (Math.floor(Math.random() * currentAvailableFamilyArray.length));
    const nextPerson = currentAvailableFamilyArray[randomIndex ? randomIndex -1 : randomIndex];
    for (let sirname in family) {
      for (let i = 0; i < family[sirname].length; i++) {
        if (family[sirname][i].name === person.firstName) {
          family[sirname][i].nextPerson = nextPerson.name;
          nextPerson.beenPicked = true;
        }
      }
    }
  });
};

// This is the class and constructor that is used to create an individual family member and input who they were assigned last year
class Christmas2021 {
  constructor(firstName, lastName, prevPerson) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prevPerson = prevPerson;
    this.availableFamilyArray = () => {
      let arr = []
      for (const sirname in family) {
        if (this.lastName !== sirname) {
          arr = [...arr, ...family[sirname]]
        }
      }
    return arr.filter(({name, beenPicked}) => name !== this.prevPerson && !beenPicked);
    }
  }
}

// This is all of the individual family members, their first name, their last name, and the person they were assigned last year
const Scott = new Christmas2021('Scott', 'Romonosky', 'Steve');
const Amy = new Christmas2021('Amy', 'Romonosky', 'Mary Lafreniere');
const Dana = new Christmas2021('Dana', 'Romonosky', 'Kate');
const Clair = new Christmas2021('Clair', 'Romonosky', 'Emily');

const MylesSr = new Christmas2021('Myles Sr.', 'Laffey', 'Denix');
const Jenny = new Christmas2021('Jenny', 'Laffey', 'Paul');
const MaryLaffey = new Christmas2021('Mary Laffey', 'Laffey', 'Ian');
const MylesJr = new Christmas2021('Myles Jr.', 'Laffey', 'Anna');
const Kate = new Christmas2021('Kate', 'Laffey', 'Clair');

const Denis = new Christmas2021('Denis', 'Lafreniere', 'Mary Laffey');
const MaryLafreniere = new Christmas2021('Mary Lafreniere', 'Lafreniere', 'Dana');
const Anna = new Christmas2021('Anna', 'Lafreniere', 'Myles Sr.');
const Emily = new Christmas2021('Emily', 'Lafreniere', 'Lily');
const Paul = new Christmas2021('Paul', 'Lafreniere', 'Julie');

const John = new Christmas2021('John', 'KirklandOR', 'Erin');
const Kathryn = new Christmas2021('Kathryn', 'KirklandOR', 'Myles Jr.');
const Ian = new Christmas2021('Ian', 'KirklandOR', 'Jenny');
const Noel = new Christmas2021('Noel', 'KirklandOR', '');

const Steve = new Christmas2021('Steve', 'KirklandUT', 'Scott');
const Julie = new Christmas2021('Julie', 'KirklandUT', 'Kathryn');
const Erin = new Christmas2021('Erin', 'KirklandUT', 'Amy');
const Lily = new Christmas2021('Lily', 'KirklandUT', 'John');

// This is an array of all the above family members
const personArr = [
  Scott, Amy, Dana, Clair,
  MylesSr, Jenny, MaryLaffey, MylesJr, Kate,
  Denis, MaryLafreniere, Anna, Emily, Paul,
  John, Kathryn, Ian,
  Steve, Julie, Erin, Lily
];

// This is the global vaiable that will be used assign the random person
var family = {
	Romonosky: [
    { 
      name: 'Scott',
      nextPerson: '',
      beenPicked: false
    },
    { 
      name: 'Amy',
      nextPerson: '',
      beenPicked: false
    },
    { 
      name: 'Dana',
      nextPerson: '',
      beenPicked: false
    },
    { 
      name: 'Clair',
      nextPerson: '',
      beenPicked: false
    },
  ],
  Laffey: [
    {
      name: 'Myles Sr.',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Jenny',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Mary Laffey',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Myles Jr.',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Kate',
      nextPerson: '',
      beenPicked: false
    },
  ],
  Lafreniere: [
    {
      name: 'Denis',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Mary Lafreniere',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Anna',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Emily',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Paul',
      nextPerson: '',
      beenPicked: false
    },
  ],
  KirklandOR: [
    {
      name: 'John',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Kathryn',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Ian',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Noel',
      nextPerson: '',
      beenPicked: false
    },
  ],
  KirklandUT: [
    {
      name: 'Steve',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Julie',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Erin',
      nextPerson: '',
      beenPicked: false
    },
    {
      name: 'Lily',
      nextPerson: '',
      beenPicked: false
    },
  ]
}

// The results of this function are hidden and are not accessable to visitor of this page
