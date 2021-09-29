import axios from "axios";
import Parser from 'html-react-parser';
import { Route } from 'react-router';
import {useEffect, useState} from "react";

const SoccerNews = ({
    handleSoccerSubmit,
    postSoccerTitle,
    setPostSoccerTitle,
    postSoccerBody,
    setPostSoccerBody,
    postSoccerUrl,
    setPostSoccerUrl,
    postSoccerTitleChinese,
    setPostSoccerTitleChinese,
    postSoccerBodyChinese,
    setPostSoccerBodyChinese,
    teamLeague,
    setTeamLeague
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
                            value={postSoccerTitle}
                            onChange={(e) => setPostSoccerTitle(e.target.value)}
                        />

                        <label htmlFor="postTitle">Title in chinesse足球中文名称：</label>
                        <input
                            id="postTitle"
                            type="text"
                            style={{
                                margin: '1rem 0',
                                height: '20px',
                                width: '50%'
                            }}
                            required
                            value={postSoccerTitleChinese}
                            onChange={(e) => setPostSoccerTitleChinese(e.target.value)}
                        />

                    <label htmlFor="postTitle">Team League：</label>
                        <input
                            id="postTitle"
                            type="text"
                            style={{
                                margin: '1rem 0',
                                height: '20px',
                                width: '50%'
                            }}
                            required
                            value={teamLeague}
                            onChange={(e) => setTeamLeague(e.target.value)}
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
                            value={postSoccerUrl}
                            onChange={(e) => setPostSoccerUrl(e.target.value)}
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
                            value={postSoccerBody}
                            onChange={(e) => setPostSoccerBody(e.target.value)}
                        />

                        <label htmlFor="postBody">Post in chinese足球中文邮报：</label>
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
                            value={postSoccerBodyChinese}
                            onChange={(e) => setPostSoccerBodyChinese(e.target.value)}
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