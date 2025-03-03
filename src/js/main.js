import { getData } from "./fetchData.js";
import { UpdateUI } from "./updateUI.js";
const url1 = "https://dummyjson.com/products";
getData(url1)
  .then((data) => UpdateUI(data))
  .catch((error) => {
    console.log(error.message);
  });
