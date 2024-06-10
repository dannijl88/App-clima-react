import { Card } from "./components/Card";
import { useFetch} from "./hooks/useFetch"


function App() {
  const { getWeather, setCity, city, data } = useFetch()
  
  return (
    <div className="bg-sky-600 h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-center text-5xl text-white font-bold">Weather App React</h1>
      <div className="bg-gray-800 border-2 w-[90%] md:w-1/2 border-gray-200 p-4 rounded-lg">
        <form className="flex flex-col gap-2 mb-4" onSubmit={(e)=>{e.preventDefault();getWeather()}}>
          <input className="text-center h-10" required type="text" placeholder="Introduce Ciudad" onChange={(e)=>setCity(e.target.value)} />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buscar
          </button>
        </form>
        <Card city={city} data={data} />
      </div>
    </div>
      
  )
}

export default App
