import {readFileSync} from "fs";

const getCountries = (res,req) => {
  const content = readFileSync("./models/countries.json", "utf8");
  const countries = JSON.parse(content);
  res.send(countries);
};
)
