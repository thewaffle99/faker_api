const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;
console.log("this is an id :", faker.datatype.uuid());
/*
user object
_id
firstName
lastName
phoneNumber
email
password
*/

const genUser = () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

// Company Object
// _id
// name
// address
// street
// city
// state
// zipCode
// country

const genCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

app.get("/api/users/new", (req, res) => {
  const newUser = genUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = genCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = genUser();
  const newCompany = genCompany();
  const newUserAndComp = {
    newUser: newUser,
    newCompany: newCompany,
  };
  res.json(newUserAndComp);
});

console.log(genUser());
console.log(genCompany());

app.listen(port, () => console.log(`express server sunning on port ${port}`));
