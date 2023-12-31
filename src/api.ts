import { SuperheroResponse } from "./types";

const API_KEY = 10223009321394258;
// const API_KEY=2705085199724900;
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${API_KEY}`;

export const fetchSuperheroes = async (name: string): Promise<SuperheroResponse> => {
  const response = await fetch(`${BASE_URL}/search/${name}`);
  return response.json();
};

const mock = {
  response: "success",
  "results-for": "bat",
  results: [
    {
      id: "63",
      name: "Batgirl",
      powerstats: {
        intelligence: "88",
        strength: "11",
        speed: "33",
        durability: "40",
        power: "34",
        combat: "90",
      },
      biography: {
        "full-name": "Barbara Gordon",
        "alter-egos": "Oracle",
        aliases: ["Oracle", "Bluebelle"],
        "place-of-birth": "-",
        "first-appearance": "Detective Comics #359",
        publisher: "Oracle",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "Human",
        height: ["5'7", "170 cm"],
        weight: ["126 lb", "57 kg"],
        "eye-color": "Green",
        "hair-color": "Red",
      },
      work: {
        occupation: "-",
        base: "Gotham City, formerly Metropolis, Platinum Flats",
      },
      connections: {
        "group-affiliation": "-",
        relatives:
          "James Gordon (father) � Barbara Eileen (mother) � James Gordon, Jr. (brother)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg",
      },
    },
    {
      id: "64",
      name: "Batgirl",
      powerstats: {
        intelligence: "null",
        strength: "27",
        speed: "null",
        durability: "null",
        power: "null",
        combat: "null",
      },
      biography: {
        "full-name": "Mary Elizabeth Kane",
        "alter-egos": "Hawkfire",
        aliases: ["Bette Kane", "Bat-Girl"],
        "place-of-birth": "-",
        "first-appearance": "Batman #139",
        publisher: "Hawkfire",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "null",
        height: ["-", "0 cm"],
        weight: ["- lb", "0 kg"],
        "eye-color": "-",
        "hair-color": "-",
      },
      work: {
        occupation: "Crime-fighter",
        base: "Gotham City",
      },
      connections: {
        "group-affiliation":
          "Former associated partner of Batman and Robin of Earth-One; Partner of Katherine Kane",
        relatives: "Katherine Kane (Batwoman I,  Aunt)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/638.jpg",
      },
    },
    {
      id: "65",
      name: "Batgirl III",
      powerstats: {
        intelligence: "null",
        strength: "43",
        speed: "null",
        durability: "null",
        power: "null",
        combat: "null",
      },
      biography: {
        "full-name": "Helena Rosa Bertinelli",
        "alter-egos": "Huntress",
        aliases: ["-"],
        "place-of-birth": "-",
        "first-appearance": "-",
        publisher: "Huntress",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "null",
        height: ["-", "0 cm"],
        weight: ["- lb", "0 kg"],
        "eye-color": "-",
        "hair-color": "-",
      },
      work: {
        occupation: "-",
        base: "-",
      },
      connections: {
        "group-affiliation": "-",
        relatives: "-",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1112.jpg",
      },
    },
    {
      id: "66",
      name: "Batgirl IV",
      powerstats: {
        intelligence: "69",
        strength: "12",
        speed: "27",
        durability: "56",
        power: "46",
        combat: "100",
      },
      biography: {
        "full-name": "Cassandra Cain",
        "alter-egos": "No alter egos found.",
        aliases: ["Kasumi", "various mundane persona,"],
        "place-of-birth": "League of Assassins (exact base is unknown)",
        "first-appearance": "Batman: Legends of the Dark Knight #120",
        publisher: "DC Comics",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "Human",
        height: ["5'5", "165 cm"],
        weight: ["115 lb", "52 kg"],
        "eye-color": "Green",
        "hair-color": "Black",
      },
      work: {
        occupation: "-",
        base: "Gotham City; Bl�dhaven; Tibet; New York City",
      },
      connections: {
        "group-affiliation":
          "Titans East, League of Assassins, Batman Family, Justice League Elite, Young Justice",
        relatives:
          "David Cain (father), Lady Shiva (mother), Carolyn (aunt, deceased), Annalea (sibling, deceased), 'The Mad Dog' (sibling)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1113.jpg",
      },
    },
    {
      id: "67",
      name: "Batgirl V",
      powerstats: {
        intelligence: "null",
        strength: "null",
        speed: "null",
        durability: "null",
        power: "null",
        combat: "null",
      },
      biography: {
        "full-name": "Charlotte Gage-Radcliffe",
        "alter-egos": "Misfit",
        aliases: ["-"],
        "place-of-birth": "-",
        "first-appearance": "-",
        publisher: "Misfit",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "null",
        height: ["-", "0 cm"],
        weight: ["- lb", "0 kg"],
        "eye-color": "-",
        "hair-color": "-",
      },
      work: {
        occupation: "-",
        base: "-",
      },
      connections: {
        "group-affiliation": "-",
        relatives: "-",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1115.jpg",
      },
    },
    {
      id: "68",
      name: "Batgirl VI",
      powerstats: {
        intelligence: "75",
        strength: "10",
        speed: "23",
        durability: "28",
        power: "22",
        combat: "80",
      },
      biography: {
        "full-name": "Stephanie Brown",
        "alter-egos": "Spoiler",
        aliases: ["Steph", "Robin", "Marion Todd", "Spoiler"],
        "place-of-birth": "-",
        "first-appearance":
          "Detective Comics #647. As Batgirl in Batgirl (Volume 3) #1. (2009)",
        publisher: "Spoiler",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "null",
        height: ["5'6", "168 cm"],
        weight: ["135 lb", "61 kg"],
        "eye-color": "Blue",
        "hair-color": "Blond",
      },
      work: {
        occupation: "College student at Gotham University",
        base: "Gotham Heights, Gotham City",
      },
      connections: {
        "group-affiliation":
          "The Batman Family, formerly the Birds of Prey, Tim Drake (on-and-off boyfriend)",
        relatives:
          "Arthur Brown (The Cluemaster, father), Crystal Brown (mother), unnamed daughter (given up for adoption)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1398.jpg",
      },
    },
    {
      id: "69",
      name: "Batman",
      powerstats: {
        intelligence: "81",
        strength: "40",
        speed: "29",
        durability: "55",
        power: "63",
        combat: "90",
      },
      biography: {
        "full-name": "Terry McGinnis",
        "alter-egos": "No alter egos found.",
        aliases: [
          "Batman II",
          "The Tomorrow Knight",
          "The second Dark Knight",
          "The Dark Knight of Tomorrow",
          "Batman Beyond",
        ],
        "place-of-birth": "Gotham City, 25th Century",
        "first-appearance": "Batman Beyond #1",
        publisher: "DC Comics",
        alignment: "good",
      },
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["5'10", "178 cm"],
        weight: ["170 lb", "77 kg"],
        "eye-color": "Blue",
        "hair-color": "Black",
      },
      work: {
        occupation: "-",
        base: "21st Century Gotham City",
      },
      connections: {
        "group-affiliation": "Batman Family, Justice League Unlimited",
        relatives:
          "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
      },
    },
    {
      id: "70",
      name: "Batman",
      powerstats: {
        intelligence: "100",
        strength: "26",
        speed: "27",
        durability: "50",
        power: "47",
        combat: "100",
      },
      biography: {
        "full-name": "Bruce Wayne",
        "alter-egos": "No alter egos found.",
        aliases: ["Insider", "Matches Malone"],
        "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
        "first-appearance": "Detective Comics #27",
        publisher: "DC Comics",
        alignment: "good",
      },
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["6'2", "188 cm"],
        weight: ["210 lb", "95 kg"],
        "eye-color": "blue",
        "hair-color": "black",
      },
      work: {
        occupation: "Businessman",
        base: "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower",
      },
      connections: {
        "group-affiliation":
          "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
        relatives:
          "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
      },
    },
    {
      id: "71",
      name: "Batman II",
      powerstats: {
        intelligence: "88",
        strength: "11",
        speed: "33",
        durability: "28",
        power: "36",
        combat: "100",
      },
      biography: {
        "full-name": "Dick Grayson",
        "alter-egos": "Nightwing, Robin",
        aliases: ["Dick Grayson"],
        "place-of-birth": "-",
        "first-appearance": "-",
        publisher: "Nightwing",
        alignment: "good",
      },
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["5'10", "178 cm"],
        weight: ["175 lb", "79 kg"],
        "eye-color": "Blue",
        "hair-color": "Black",
      },
      work: {
        occupation: "-",
        base: "Gotham City; formerly Bludhaven, New York City",
      },
      connections: {
        "group-affiliation": "Justice League Of America, Batman Family",
        relatives:
          "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg",
      },
    },
    {
      id: "72",
      name: "Battlestar",
      powerstats: {
        intelligence: "50",
        strength: "53",
        speed: "35",
        durability: "74",
        power: "48",
        combat: "74",
      },
      biography: {
        "full-name": "Lemar Hoskins",
        "alter-egos": "No alter egos found.",
        aliases: ["Bucky"],
        "place-of-birth": "Chicago, Illinois",
        "first-appearance": "Captain America #323 (1986); (as Bucky)",
        publisher: "Marvel Comics",
        alignment: "good",
      },
      appearance: {
        gender: "Male",
        race: "null",
        height: ["6'6", "198 cm"],
        weight: ["295 lb", "133 kg"],
        "eye-color": "Brown",
        "hair-color": "Black",
      },
      work: {
        occupation: "Former wrestler, federal operative",
        base: "-",
      },
      connections: {
        "group-affiliation":
          "Formerly Wild Pack, Bold Urban Commandos (Buckies), former partner of U.S.Agent, operative of the Commission on Superhuman Activities",
        relatives: "-",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/231.jpg",
      },
    },
    {
      id: "73",
      name: "Batwoman V",
      powerstats: {
        intelligence: "81",
        strength: "8",
        speed: "29",
        durability: "25",
        power: "27",
        combat: "80",
      },
      biography: {
        "full-name": "Katherine Rebecca Kane",
        "alter-egos": "No alter egos found.",
        aliases: ["-"],
        "place-of-birth": "-",
        "first-appearance": "52 #7 (June, 2006)",
        publisher: "DC Comics",
        alignment: "good",
      },
      appearance: {
        gender: "Female",
        race: "Human",
        height: ["5'10", "178 cm"],
        weight: ["- lb", "0 kg"],
        "eye-color": "Green",
        "hair-color": "Red",
      },
      work: {
        occupation: "-",
        base: "Gotham City",
      },
      connections: {
        "group-affiliation": "Batman Family (unofficially), D.E.O, Unknowns",
        relatives:
          'Jacob Kane (father), Gabi Kane (mother; deceased), Beth Kane (twin sister), Mary Elizabeth "Bette" Kane (cousin), Catherine Hamilton-Kane (stepmother), Philip Kane (uncle), Kane Family',
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/10234.jpg",
      },
    },
    {
      id: "427",
      name: "Man-Bat",
      powerstats: {
        intelligence: "38",
        strength: "18",
        speed: "50",
        durability: "70",
        power: "33",
        combat: "30",
      },
      biography: {
        "full-name": "Robert Kirkland Langstrom",
        "alter-egos": "No alter egos found.",
        aliases: ["Kirk Langstrom"],
        "place-of-birth": "Chicago, Illinois",
        "first-appearance": "Detective Comics #400 (June, 1970)",
        publisher: "DC Comics",
        alignment: "neutral",
      },
      appearance: {
        gender: "Male",
        race: "Human",
        height: ["-", "0 cm"],
        weight: ["- lb", "0 kg"],
        "eye-color": "Brown",
        "hair-color": "Brown",
      },
      work: {
        occupation: "Zoologist",
        base: "Gotham City",
      },
      connections: {
        "group-affiliation": "Formerly Spirit Squad, The Network",
        relatives:
          "Francine Langstrom (wife), Rebecca Elizabeth Langtrom (daughter); Aaron Langstrom (son); Britt Langstrom (sister); Ted Friedel (brother-in-law)",
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/731.jpg",
      },
    },
  ],
};
