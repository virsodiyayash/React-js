import { useState } from "react";
import Navigation from "./navigation/Nav"
import Products from "./products/Products"
import Recommended from "./recommended/Recommended"
import Sidebar from "./sidebar/Sidebar"

import products from "./db/data"
import Category from "./sidebar/category/Category";
import Card from "./components/Card";

function App() {

  
  const [selectCategory , setSelectedCategory] = useState(null);

  //Input Filter

  const [query , setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase) !== -1);


  //Radio Filter

  const handleChange = event => setSelectedCategory(event.target.value);


  //Buttons Filter
  const handleClick = event => setSelectedCategory(event.target.value);


  function filteredData(products , selected , query){
    let filteredProducts = products

    //Filtering Input Items

    if(query){
      filteredProducts = filteredItems
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category , color , company , newPrice , title}) => category === selected
       || color === selected || company === selected || newPrice === selected || title === selected);
    }

    return filteredProducts.map(({img , title , star , reviews , prevPrice }) => <Card />)
  }
  


  return (
    <>
     <Sidebar />
     <Navigation />
     <Recommended />
     <Products />
    </>
  )
}

export default App
