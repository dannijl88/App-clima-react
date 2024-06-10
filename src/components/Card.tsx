import sun from "../assets/icons/sun.svg"
import cloud from "../assets/icons/cloud.svg"
import rain from "../assets/icons/rain.svg"
import wind from "../assets/icons/wind.svg"
import storm from "../assets/icons/storm.svg"

export const Card = ({ city, data }) => {
    
    return (
        <div className="flex flex-wrap flex-col md:flex-row">
            {city && 
                <div className="md:w-1/2 flex flex-col flex-wrap gap-2 text-white text-xl">  
                    <h2 className="text-white text-5xl text-center">{city && data.name}</h2>
                    <p className="text-center text-5xl font-bold">
                        {data.main.temp} ºC
                        </p>
                    <div className="w-20 h-20 block mx-auto">
                        {
                        data.weather[0].main === 'Clear' && <img className="w-20 h-20" src={sun} alt="sun" />
                        }
                        {
                        data.weather[0].main == 'Rain' && <img className="w-20 h-20" src={rain} alt="rain" />
                        }
                        {
                        data.weather[0].main == 'Clouds' && <img className="w-20 h-20" src={cloud} alt="cloud" />
                        }
                        {
                        data.weather[0].main == 'Storm' && <img className="w-20 h-20" src={storm} alt="storm" />
                        }
                        {
                        data.weather[0].main == 'Wind' && <img className="w-20 h-20" src={wind} alt="wind" />
                        }
                    </div>
                    <p className="text-center text-2xl">{data.weather[0].description}</p>
                </div> 
            }
            {
            city &&
                <div className="md:w-1/2 flex flex-col gap-2 text-white text-xl md:border-l-2 items-center">
                    <p>
                        Sensación térmica: {data.main.feels_like} ºC
                    </p>
                    <p>
                        Min: {data.main.temp_min} ºC
                    </p>
                    <p>
                        Max: {data.main.temp_max} ºC
                    </p>
                    <p>
                        Humedad: {data.main.humidity} %
                    </p>
                    <p>
                        Presión: {data.main.pressure} hPa
                    </p>
                    <p>
                        Viento: {data.wind.speed} m/s
                    </p>
                </div>
            }
            </div>
        
    )
}
