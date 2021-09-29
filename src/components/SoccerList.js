import axios from "axios";
import Parser from 'html-react-parser';
import { Route } from 'react-router';
import {useEffect, useState} from "react";

const SoccerList = ({listData}) => {

    const itemRows = [];
    for (let item of listData.en) {
      const row = (
        <div>
        <div>{item.id}</div>
        <div>
        <img 
            src={item.imageUrl}
            alt="new"
            />    
        </div>
        <div>{item.title}</div>
        <div>{item.description}</div>
    </div>
      );
      itemRows.push(row);
    }

return <div>
                <div>
                  <h1>Soccer List</h1>
                </div>
                <div>
                    {itemRows}
                </div>
                {/* {listData.length && listData.en.map((item, index) => (
                      <div style={{ 
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                            
                            <div>
                                <div>{item.id}</div>
                                <div>
                                <img 
                                    src={item.imageUrl}
                                    alt="new"
                                    />    
                                </div>
                                <div>{item.title}</div>
                                <div>{item.description}</div>
                            </div>
                      </div>
                    ))} */}

             </div>
}

export default SoccerList;