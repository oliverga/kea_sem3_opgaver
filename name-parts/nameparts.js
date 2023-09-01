"use strict";

const name = "Oliver Gredsted Torvald Baldoni Clinton Reagan Andersen";

// fornavn er alt før første mellemrum
const firstName = name.slice(0, name.indexOf(" "));

// efternavn er alt efter sidste mellemrum
const lastName = name.slice(name.lastIndexOf(" ") + 1);

// mellemnavn er alt mellem første og sidste mellemrum
const middleName = name.slice(name.indexOf(" ") + 1, name.lastIndexOf(" "));

console.log(firstName);
console.log(middleName);
console.log(lastName);