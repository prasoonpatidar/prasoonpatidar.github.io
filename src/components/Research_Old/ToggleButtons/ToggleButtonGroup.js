import * as React from 'react';
import './ToggleButtonGroup.css'
import {Button} from "@mui/material";

export default function ColorToggleButton({filtersList, setFiltersList}) {
    // const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event) => {
        const id = event.target.id;
        if (filtersList.find((ele) => id === ele)) {
            setFiltersList(
                filtersList.filter((val) => val !== id));
            event.currentTarget.style.backgroundColor = 'white';
            event.currentTarget.style.color = '#1976d2';
        } else {
            setFiltersList([...filtersList, id]);
            event.currentTarget.style.backgroundColor = '#1976d2';
            event.currentTarget.style.color = 'white';
        }
    };

    return (
        <div className="container">
            <Button className={"filter"} onClick={handleChange} id="filter1">Sensing and Machine Learning</Button>
            <span className="horizontal-space"/>
            <Button className="filter" onClick={handleChange} id="filter2">Human-AI Collaboration</Button>
            <span className="horizontal-space"/>
            <Button className="filter" onClick={handleChange} id="filter3">Conference Papers</Button>
            <span className="horizontal-space"/>
            <Button className="filter" onClick={handleChange} id="filter3">Posters and Workshops</Button>
            <span className="horizontal-space"/>
            <Button className="filter" onClick={handleChange} id="filter3">Other Projects</Button>

        </div>
    );
}