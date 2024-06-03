import List from './List.jsx'
import './App.css'

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: "52" },
    { id: 2, name: "Banana", calories: "96" },
    { id: 3, name: "Cherry", calories: "530" },
    { id: 4, name: "Date", calories: "282" },
    { id: 5, name: "Elderberry", calories: "143" },
    { id: 6, name: "Fig", calories: "74" },
    { id: 7, name: "Grape", calories: "619" },
    { id: 8, name: "Honeydew", calories: "36" },
    { id: 9, name: "Indian Fig", calories: "41" },
    { id: 10, name: "Jackfruit", calories: "95" }
];
const vegetables = [
  { id: 1, name: "Carrot", calories: "41" },
  { id: 2, name: "Broccoli", calories: "55" },
  { id: 3, name: "Spinach", calories: "23" },
  { id: 4, name: "Potato", calories: "77" },
  { id: 5, name: "Tomato", calories: "18" },
  { id: 6, name: "Cucumber", calories: "16" },
  { id: 7, name: "Bell Pepper", calories: "20" },
  { id: 8, name: "Onion", calories: "40" },
  { id: 9, name: "Garlic", calories: "149" },
  { id: 10, name: "Peas", calories: "81" }
];
const grains = [
  { id: 1, name: "Rice", calories: "130" },
  { id: 2, name: "Wheat", calories: "339" },
  { id: 3, name: "Oats", calories: "389" },
  { id: 4, name: "Barley", calories: "354" },
  { id: 5, name: "Quinoa", calories: "120" },
  { id: 6, name: "Corn", calories: "86" },
  { id: 7, name: "Millet", calories: "119" },
  { id: 8, name: "Rye", calories: "335" },
  { id: 9, name: "Sorghum", calories: "329" },
  { id: 10, name: "Buckwheat", calories: "343" }
];
const proteins = [
  { id: 1, name: "Chicken", calories: "239" },
  { id: 2, name: "Beef", calories: "250" },
  { id: 3, name: "Pork", calories: "242" },
  { id: 4, name: "Fish", calories: "206" },
  { id: 5, name: "Eggs", calories: "155" },
  { id: 6, name: "Tofu", calories: "76" },
  { id: 7, name: "Lentils", calories: "116" },
  { id: 8, name: "Chickpeas", calories: "364" },
  { id: 9, name: "Beans", calories: "347" },
  { id: 10, name: "Peas", calories: "81" }
];
const beverages = [
  { id: 1, name: "Water", calories: "0" },
  { id: 2, name: "Orange Juice", calories: "45" },
  { id: 3, name: "Coffee", calories: "2" },
  { id: 4, name: "Tea", calories: "2" },
  { id: 5, name: "Soda", calories: "150" },
  { id: 6, name: "Beer", calories: "43" },
  { id: 7, name: "Wine", calories: "83" },
  { id: 8, name: "Milk", calories: "42" },
  { id: 9, name: "Smoothie", calories: "130" },
  { id: 10, name: "Energy Drink", calories: "110" }
];

 

  return (
    <>
    {fruits.length > 0 ? <List items = {fruits} categories = "fruits"/> : null}
    {/* //Short circuting*/}{vegetables.length > 0 && <List items = {vegetables} categories = "vegetables"/> }
    <List items = {grains} categories = "grains"/>
    <List items = {proteins} categories = "proteins"/>
    <List items = {beverages} categories = "beverages"/>
    </>
  )
}

export default App
