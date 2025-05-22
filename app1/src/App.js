import logo from './logo.svg';

import './App.css';
import Header from './Header'
import Footer from './Footer'
import Fetch_Data from './Fetch_Data';

//Passing a Prop
function Greet(pro) {
  return <h1>Hello!{pro.name}</h1>
}
//default prop
function Def_prop({ name = "Jay", age = 21 }) {
  return <h1>Hello!{name + age}</h1>
}
//spread operator
function Spread_demo({ name, age, city }) {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{city}</h3>

    </div>
  )
}

function Add() {
  return alert(parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value));
}

function App() {
  const fruits = ["Apple", "Banana", "Mango"];
  const name = "Diya";

  const user = {
    name: "Diya",
    age: 22
  }
  return (
    <div className="App">
      <Header />
      <h1>This is my First React APP</h1>
      <h1>Hello!{name}</h1>
      <h1>hello {user.name} your age is:{user.age}</h1>
      <Greet name="Tisha" />
      <Def_prop />
      <Spread_demo {...user} city="Surat" />
      Enter No1: <input type="text" id="a" /><br />
      Enter No2: <input type="text" id="b" /><br />
      <button onClick={Add}>Click</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <Footer />
      <Fetch_Data/>
    </div>
  );
}

export default App;
