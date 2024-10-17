import React, { useEffect, useState } from 'react'
import '../Compoents/Other.css'

export default function Wrap() {
    const apiKey = '4e8812d8f0fcbd34ddc87e5385cd1a8d'
    const [city, setCity] = useState("");
    const [data, setData] = useState({});
    const [cityName, setCityName] = useState("Rajkot");
    

useEffect(() => {
    getData();
 }, []) // This will run the effect whenever the city changes


    async function getData() {

        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=3&appid=${apiKey}&units=metric`);
        res = await res.json();
        setData(res);
        console.log(data);


    }
    const handleForm = (e) => {
        e.preventDefault();
        // getData();
    }

    return (
        <div>
            <div className="weather-app">
                <form className="search-form" action="" onSubmit={handleForm}>
                    <input
                        id='cityname'
                        className="city-input"
                        type="text"
                        
                        placeholder="Enter City Name"
                        onChange={(e) => { setCity(e.target.value) }}
                    />
                    <button className="search-btn" type="submit" onClick={getData}>
                        <i className="material-icons">search</i>
                    </button>
                </form>
               
        

            </div>




        </div>
    )
}
