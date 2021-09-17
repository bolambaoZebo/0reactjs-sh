import './App.css';
import axios from "axios";
import Parser from 'html-react-parser';
import {useEffect, useState} from "react";

function App() {

  const [data,setData] = useState([]);

  const [filteredData,setFilteredData] = useState(data);

  async function fetchData() {
    try {
      const result = await axios.get("https://www.scorebat.com/video-api/v3/");
      console.log(result.data.response)

      setData(result.data.response)
      setFilteredData(result.data.response);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    }, []);
  
  
  const handleSearch = (event) =>{
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = data.filter((item) => {
      console.log(item.title)
    return item.title.toLowerCase().includes(value)
    });
    setFilteredData(result);
  }

  return (
    <div>
      <div>
        <h1>Soccer Highlights</h1>
      </div>

      <div style={{ margin: '0 auto', marginBottom: '5%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
      </div>

      {filteredData.length && filteredData.map((item, index) => (
            <div style={{ 
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {item.videos.length && item.videos.map((video,index)=>(
               
                <div style={{width: "600px",height:"400px"}}>
                   <div>{Parser(video.embed)}</div>
                   <div>{item.title}</div>
                   <div>{item.competition}</div>
                   <div>{item.date.substring(0, 10)}</div>
                </div>
                
              ))}
            </div>
          ))}
    </div>
  );
}

export default App;
