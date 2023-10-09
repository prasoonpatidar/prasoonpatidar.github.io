import Divider from "@mui/material/Divider";
import * as React from "react";
import './Research.css';
import ColorToggleButton from "./ToggleButtons/ToggleButtonGroup";
import CardList from "./CardList/CardList";

const filterMapper = {
    "sensingML": [0, 1, 2, 6],
    "humanAI": [3, 4],
    "conferencepapers": [0, 1, 3, 5, 6, 7],
    "postersworkshops": [4],
    "others": [6, 7, 8],

}
const itemList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getFilteredIds(filtersList) {
    if (filtersList.length === 0) {
        return itemList;
    }

    let combinedList = [];
    for (const key in filterMapper) {
        if (filtersList.includes(key)) {
            combinedList.push(...filterMapper[key]);
        }
    }
    return combinedList;
}

export default function Research() {
    const [filtersList, setFiltersList] = React.useState([]);
    const idList = getFilteredIds(filtersList);
    return (<div className="container">
            <h3 style={{display: 'flex', alignContent: 'flex-start', fontSize: "x-large"}}>RESEARCH</h3>
            <Divider flexItem/>
            <ColorToggleButton filtersList={filtersList} setFiltersList={setFiltersList}/>
            <CardList idList={idList}/>
        </div>
    );
}
