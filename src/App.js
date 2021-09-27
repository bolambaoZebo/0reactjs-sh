import './App.css';
import axios from "axios";
import Parser from 'html-react-parser';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import {useEffect, useState} from "react";

import HorseNews from './components/HorseNews';
import Nav from './components/Nav';
import SoccerNews from './components/SoccerNews';


const HomePage = ({filteredData, handleSearch}) => {
    return <div>
                <div style={{ marginTop: '30px', marginBottom: '50px' }}>
                  <label style={{fontSize: '24px'}}>Search:</label>
                  <input 
                    style={{width: '200px', height: '25px'}}
                    type="text" onChange={(event) =>handleSearch(event)} />
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
}


function App() {

  //Horse state variables
  const [data,setData] = useState([]);
  const [ isLoading, setIsloading ] = useState(false)
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postUrl, setPostUrl] = useState('');

  //Soccer state variables
  const [soccerData,setSoccerData] = useState([]);
  const [ isSoccerLoading, setSoccerIsloading ] = useState(false)
  const [postSoccerTitle, setPostSoccerTitle] = useState('');
  const [postSoccerBody, setPostSoccerBody] = useState('');
  const [postSoccerUrl, setPostSoccerUrl] = useState('');
  const [postSoccerTitleChinese, setPostSoccerTitleChinese] = useState('');
  const [postSoccerBodyChinese, setPostSoccerBodyChinese] = useState('');

  //filter soccer video
  const [filteredData,setFilteredData] = useState(data);

  async function fetchData() {
    try {
      const result = await axios.get("https://www.scorebat.com/video-api/v3/");

      setData(result.data.response)
      setFilteredData(result.data.response);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setTimeout(
      fetchData(), 
    60000)
    }, []);
  
  
  const handleSearch = (event) =>{
    let value = event.target.value.toLowerCase();
    let result = [];
    result = data.filter((item) => {
    return item.title.toLowerCase().includes(value)
    });
    setFilteredData(result);
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("post news")

    setIsloading(true)

    const newsPost = {
        title: postTitle,
        description: postBody,
        imageUrl: postUrl
    }
    const url = 'https://vlog-threewe-apinodejs.herokuapp.com/horse-news'
       await axios.post(url,newsPost)
        .then((res) => {
            console.log(res)
            setPostTitle('')
            setPostBody('')
            setPostUrl('')
            setIsloading(false)
        })
        .catch((err) => console.log(err))
 }

 const handleSoccerSubmit = async (e) => {
  e.preventDefault();
  console.log("post Soccer news")

  setIsloading(true)

  const newsSoccerPost = {
      en:{
          title: postSoccerTitle,
          description: postSoccerBody,
         },
      zh:{
          titleChinese: postSoccerTitleChinese,
          descriptionChinese: postSoccerBodyChinese,
         },
         imageUrl: postSoccerUrl
  }

        // title: postSoccerTitle,
      // description: postSoccerBody,
      // imageUrl: postSoccerUrl

  const url = 'https://vlog-threewe-apinodejs.herokuapp.com/soccer-news'
     await axios.post(url,newsSoccerPost)
      .then((res) => {
          console.log(res)
          setPostSoccerTitle('')
          setPostSoccerBody('')
          setPostSoccerUrl('')
          setPostSoccerTitleChinese('')
          setPostSoccerBodyChinese('')
          setIsloading(false)
      })
      .catch((err) => console.log(err))
}

  return (
    <Route>
      <div>
        <Nav />
          {!isLoading ?
            <div
                style={{
                  margin: '30px'
                }}
            >
              <Switch>
                  <Route exact path='/'>
                    <HomePage 
                      filteredData={filteredData}
                      handleSearch={handleSearch}
                      />
                  </Route>

                  <Route path='/horse-news'>

                  <HorseNews 
                    handleSubmit={handleSubmit}
                    postTitle={postTitle}
                    setPostTitle={setPostTitle}
                    postBody={postBody}
                    setPostBody={setPostBody}
                    postUrl={postUrl}
                    setPostUrl={setPostUrl}
                  />
                  </Route>

                  <Route path='/soccer-news'>

                  <SoccerNews 
                    handleSoccerSubmit={handleSoccerSubmit}
                    postSoccerTitle={postSoccerTitle}
                    setPostSoccerTitle={setPostSoccerTitle}
                    postSoccerBody={postSoccerBody}
                    setPostSoccerBody={setPostSoccerBody}
                    postSoccerUrl={postSoccerUrl}
                    setPostSoccerUrl={setPostSoccerUrl}
                    postSoccerTitleChinese={postSoccerTitleChinese}
                    setPostSoccerTitleChinese={setPostSoccerTitleChinese}
                    postSoccerBodyChinese={postSoccerBodyChinese}
                    setPostSoccerBodyChinese={setPostSoccerBodyChinese}
                  />
                  </Route>
              </Switch>
              </div>
        :
        <div>
          <h3>Loading</h3>
        </div>
        }
      </div>
    </Route>
  );
}

export default App;
