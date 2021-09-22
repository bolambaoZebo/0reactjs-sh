import axios from "axios";
import Parser from 'html-react-parser';
import { Route } from 'react-router';
import {useEffect, useState} from "react";

const HorseNews = ({
    handleSubmit, 
    postTitle, 
    setPostTitle, 
    postBody, 
    setPostBody,
    postUrl,
    setPostUrl
}) => {

    // const [horseData, updateHorseData ] = useState({
    //     title: "alpha",
    //     description: "hello alpha",
    //     imageUrl: "https://horse-news.s3.ap-southeast-1.amazonaws.com/thorough_horse_breed.jpg"
    // })

    // const postdata = () => {
    //     const url = 'https://vlog-threewe-apinodejs.herokuapp.com/horse-news'
    //     axios.post(url,horseData)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((err) => console.log(err))
    // }
    return <div>
                <div>
                  <h1>Horse News</h1>
                </div>

                 <form style={{
                     display: 'flex',
                     flexDirection: 'column'
                 }} onSubmit={handleSubmit}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            style={{
                                margin: '1rem 0',
                                height: '20px',
                                width: '50%'
                            }}
                            required
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                        />

                     <label htmlFor="postTitle">Image Url:</label>
                        <input
                            id="postTitle"
                            type="text"
                            style={{
                                margin: '1rem 0',
                                height: '20px',
                                width: '50%'
                            }}
                            required
                            value={postUrl}
                            onChange={(e) => setPostUrl(e.target.value)}
                        />

                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            style={{
                                margin: '1rem 0',
                                height: '100px',
                                width: '50%',
                                padding: '0.25rem',
                                outline: 'none'
                            }}
                            required
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)}
                        />
                        <button 
                            style={{
                                margin: '1rem',
                                height: '48px',
                                padding: '0.5rem',
                                size: '1rem',
                                cursor: 'pointer'
                            }}
                        type="submit">Upload News</button>
                </form>

                {/* <div style={{ margin: '0 auto', marginBottom: '5%' }}>
                  <label>Search:</label>
                  <input type="text" onChange={(event) =>handleSearch(event)} />
                </div> */}

                {/* {filteredData.length && filteredData.map((item, index) => (
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
                    ))} */}
             </div>
}

export default HorseNews;