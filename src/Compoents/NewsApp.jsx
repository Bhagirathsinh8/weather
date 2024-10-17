import React, { useEffect, useState } from 'react'
import '../Compoents/Other.css'
import Newscard from './Newscard';


export default function NewsApp() {
    const [searchinput, SetSearchInput] = useState("India");
    const [newsdata, SetNewsData] = useState(null);
    
    const API_KEY = '2bfa079c72bd47f1b620cc70a538bf0a';

useEffect(() =>{
    getData();
    }, [searchinput]);

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchinput}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        SetNewsData(jsonData.articles);
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        SetSearchInput(e.target.value);
    }
    const handleForm = (e) => {
        e.preventDefault();
        
    }
    const userInput = (e) => {
        SetSearchInput(e.target.value);
    }

    return (
        <div >
            <div className="weather-app">
                <h1 className='flex justify-center items-center font-bold mb-3 text-red-500 text-2xl'>Stay Updated With Current News!</h1>
                <form className="search-form" action="" onSubmit={handleForm}>
                    <input
                        id='cityname'
                        className="city-input"
                        type="text"
                        value={searchinput}
                        placeholder="Search News here..."
                        onChange={handleInput}
                    />
                    <button className="search-btn" type="submit" onClick={getData}>
                        <i className="material-icons">Search</i>
                    </button>
                </form>
                <div className="flex justify-evenly p-5 mt-2 ">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2" onClick={userInput} value="Sports">Sports</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2" onClick={userInput} value="Politics">Politics</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2" onClick={userInput} value="Entertainment">Entertainment</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2" onClick={userInput} value="Health">Health</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2" onClick={userInput} value="Fitness">Fitness</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2" onClick={userInput} value="Cars">Cars</button>


                </div>
            </div>
            <div>
                {
                    newsdata ? <Newscard data = {newsdata} /> :null
                }
                
            </div>




        </div>
    )
}
