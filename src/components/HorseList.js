import axios from "axios";
import Parser from 'html-react-parser';
import { Route } from 'react-router';
import {useEffect, useState} from "react";

const HorseList = () => {

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
                  <h1>Horse List</h1>
                </div>

             </div>
}

export default HorseList;