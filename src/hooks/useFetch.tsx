import { useState } from "react"

function useFetch() {
    interface Welcome {
        weather: Weather[];
        main:    Main;
        name:    string;
        wind:    Wind;
    }
    interface Wind {
        speed: number; 
    }
    interface Main {
        temp:       number;
        feels_like: number;
        temp_min:   number;
        temp_max:   number;
        pressure:   number;
        humidity:   number;
    }
    interface Weather {
        id:          number;
        main:        string;
        description: string;
        icon:        string;
    }

    const [data, setData] = useState<Welcome>({
        weather: [
        {
            id: 200,
            main: '',
            description: '',
            icon: '01d',
        },
        ],
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
        },
        name: "",
        wind: {
        speed: 0,
        },
    })
    const [city, setCity] = useState("")
    const API_KEY = "af8984956396371dd6f2f269166932f9"
    const API:string =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=es&units=metric`

    const getWeather = async () => {
        const response = await fetch(API)
        const data = await response.json()
        setData(data)
    }
    return { data, getWeather, setCity, city }
}

export { useFetch }
