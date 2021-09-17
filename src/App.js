
import './App.css';
import axios from "axios";
import {useEffect} from "react";

function App() {

  async function fetchData() {
    try {
      const result = await axios.get("https://www.scorebat.com/video-api/v3/");
      console.log(result.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    }, []);
  

  return (
    <div className="App">
    </div>
  );
}

export default App;
