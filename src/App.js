import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState([]);
  const [inputs, setInputs] = useState([]);


  // useEffect

  useEffect(() => {
   
       fakestore();
    
  },[]);

  // fetch api
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const jsonData = await response.json();
    // console.log("your data", jsonData);
    setDisplay(jsonData);
  };

  // search fuction
  const inputValue = (e) => {
    let newInput = e.target.value;
    setInputs(newInput)
    setSearch(newInput);
    const searchFilter = display.filter((searchData) => {
      return searchData.title.toLowerCase().includes(newInput.toLowerCase());
    });

    if (searchFilter === 0) {
      setSearch([]);
    } else {
      setSearch(searchFilter);
    }
  };
  console.log("search value", search);

  // return (
  //   <>
  //   <div className="input">
  //     <input onChange={inputValue} type="text" placeholder="Search" />

  //   </div>
  //   <div className="fetch-data">
  //    {search.map((values)=>{
  //     //  console.log('your product name', values.title)
  //      return(
  //     <div className="api-data">
  //      <div className="data">
  //       <h1  className="heading">{values.title}</h1>
  //       <img className="imgage" src={values.image} alt="ima" />
  //       <h3 className="price">${values.price}</h3>
  //       <p className="desc">{values.description}</p>
  //      </div><hr />
  //     </div>
  //      )
  //    })}
  //   </div>
  //  </>
  // )

  return (
   <>
    <div className="input">
      <input onChange={inputValue} type="text" placeholder="Search" />
    </div>
    <div>
    {inputs.length === 0 ? (
      <div className="fetch-data">
         {display.map((values)=>{
           return(
             <div api-data>
               <div className="data">
                <h1  className="heading">{values.title}</h1>
                <img className="imgage" src={values.image} alt="ima" />
                <h3 className="price">${values.price}</h3>
                <p className="desc">{values.description}</p>
               </div><hr />
             </div>
           )
         })}
      </div>
    ) : (
      <div className="fetch-data">
      {search.map((values)=>{
        return(
          <div api-data>
          <div className="data">
           <h1  className="heading">{values.title}</h1>
           <img className="imgage" src={values.image} alt="ima" />
           <h3 className="price">${values.price}</h3>
           <p className="desc">{values.description}</p>
          </div><hr />
        </div>
        )
      })
    }
     </div> 
    )
  }
    </div>
  </>   
  );
}

export default App;
