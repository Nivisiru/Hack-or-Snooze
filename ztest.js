async function getData() {
  const zRes = await axios.get("https://swapi.co./api.planets/");
  console.log(zRes);
}
getData();
console.log("LINKED TEST");

async function getData() {
  const zRes = await axios.get(
    "https://hack-or-snooze-v3.herokuapp.com/stories"
  );
  console.log(zRes);
}
getData();
console.log("LINKED TEST");
