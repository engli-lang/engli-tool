console.log("Hello via Bun!");

import convertToIPA from "./convertToIPA";

// Example usage:
const engliWord = 'haw wuz yr dey';
const ipaString = convertToIPA(engliWord);
console.log(ipaString);

const englishIPA = 'ˈwelkəm';
import englishIPAToEngli from "./englishIPAToEngli";
const engliString = englishIPAToEngli(englishIPA);
console.log(engliString);







let engli = await englishToEngli(`agree`);
console.log(engli);