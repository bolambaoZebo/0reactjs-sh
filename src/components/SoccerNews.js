import axios from "axios";
import Parser from 'html-react-parser';
import { Route } from 'react-router';
import {useEffect, useState} from "react";

const SoccerNews = ({
    handleSoccerSubmit, 
    postTitle, 
    setPostTitle, 
    postBody, 
    setPostBody,
    postUrl,
    setPostUrl
}) => {

    return <div>
                <div>
                  <h1>Soccer News</h1>
                </div>

                 <form style={{
                     display: 'flex',
                     flexDirection: 'column'
                 }} onSubmit={handleSoccerSubmit}>
                        <label htmlFor="postTitle">Soccer Title:</label>
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

                     <label htmlFor="postTitle">Soccer Image Url:</label>
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

                        <label htmlFor="postBody">Soccer Post:</label>
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

             </div>
}

export default SoccerNews;