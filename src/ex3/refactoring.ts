/**
 * Prints stuff
 * 
 * 1. Refactor to remove parameters from function and only say hello
 */
const printHello = (name: string, location: string) => {
  console.log(`Hello ${name} from ${location}`);
  trolled();
}

type Car = {
  model: string;
  make: string;
  year: number;
  mileage?: number;
  isSecondHand: boolean;
};

const cars: Car[] = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    isSecondHand: false
  },
  {
    make: 'Nissa',
    model: 'Skyline R34',
    year: 1998,
    mileage: 201948,
    isSecondHand: true
  },
  {
    make: 'Chevrolet',
    model: 'Corvette C5',
    year: 2002,
    mileage: 154977,
    isSecondHand: true
  },
];

/**
 * Print all the models of the cars in the showroom
 * 
 * 1. Extract the logic of print into a separate function. This function will
 * Print the cars make, model and year
 * @param {Cars[]} cars - An array of cars
 */
const prinCars = (cars: Car[]): void => {
  cars.forEach((car) => console.log(car.make));
}

/**
 * 1. He says 'Never gonna' too many times. Delete the lines where it begins with
 * 'Never gonna'
 * 
 * 2. Change the function name 
 * We're no strangers to love
 * You know the rules and so do I (do I)
 * A full commitment's what I'm thinking of
 * You wouldn't get this from any other guy
 * 
 * I just wanna tell you how I'm feeling
 * Gotta make you understand
 * 
 * We've known each other for so long
 * Your heart's been aching, but you're too shy to say it (say it)
 * Inside, we both know what's been going on (going on)
 * We know the game and we're gonna play it
 * 
 * And if you ask me how I'm feeling
 * Don't tell me you're too blind to see
 * 
 * Never gonna give you up
 * Never gonna let you down
 * Never gonna run around and desert you
 * Never gonna make you cry
 * Never gonna say goodbye
 * Never gonna tell a lie and hurt you
 * Never gonna give you up
 * Never gonna let you down
 * Never gonna run around and desert you
 * Never gonna make you cry
 * Never gonna say goodbye
 * Never gonna tell a lie and hurt you
 * 
 * We've known each other for so long
 * Your heart's been aching, but you're too shy to say it (to say it)
 * Inside, we both know what's been going on (going on)
 * We know the game and we're gonna play it
 * I just wanna tell you how I'm feeling
 * Gotta make you understand
 * 
 * Never gonna give you up
 * Never gonna let you down
 * Never gonna run around and desert you
 * Never gonna make you cry
 * Never gonna say goodbye
 * Never gonna tell a lie and hurt you
 * Never gonna give you up
 * Never gonna let you down
 * Never gonna run around and desert you
 * Never gonna make you cry
 * Never gonna say goodbye
 * Never gonna tell a lie and hurt you
 * Never gonna give you up
 * Never gonna let you down
 * Never gonna run around and desert you
 * Never gonna make you cry
 * Never gonna say goodbye
 * Never gonna tell a lie and hurt you
 */
const trolled = () => {
  console.log("Never gonna give you up");
}