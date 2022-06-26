import react, { useEffect, useState } from "react";
import "./css/style.css";

const TempApp = () => {

    const [cityData, setCityData] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect( ()=> {
        const fetchApi = async () => {
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=44bc8edd985b8f3252e0458a7734b1db`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson.main);
            setCityData(resJson.main);}
        fetchApi();
    },[search])

   

 
    return ( 
        <>
        
           <div className="box">
                <div>
                    <input 
                    type= "search"
                    value={search}
                    className="inputField"
                    onChange={ (event) =>{ setSearch(event.target.value)} } />
                </div>
                {!cityData ? (<p>No Data Found</p>) :(
                    <div>
                        <div className="info">
                        <i className="fa-solid fa-street-view"></i>
                        <h2 className="location">{search} </h2>
                        <h1 className="temp"> {cityData.temp}°C</h1>
                        <h3 className="tempmin_max"> Min:{cityData.temp_min}°C || Max:{cityData.temp_max}°C </h3>
                        </div>
                    <div className="wave -one"></div>
                    <div className= "wave -two"></div>
                    <div className="wave -three"></div>
                </div>)}
            </div>
        </>
    )}
export default TempApp;    