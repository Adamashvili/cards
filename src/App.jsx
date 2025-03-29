import { useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";
import SecondCard from "./components/SecondCard/SecondCard";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  async function getAll() {
    let data = await fetch("https://dummyjson.com/products");
    let finalData = await data.json();

    setList(finalData.products);
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <p className="myName">I am Irakli Adamashvili</p>
      <Card />
      <section>
      {list.map((item) => (
        <SecondCard item={item}/>
      ))}
      </section>
      
    </>
  );
}

export default App;
