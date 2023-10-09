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
            <Button sx={{fontSize: 'small'}} className={"filter"} onClick={handleChange} id="sensingML">User-Focused
                Sensing
                Systems</Button>
            <span className="horizontal-space"/>
            <Button sx={{fontSize: 'small'}} className="filter" onClick={handleChange} id="humanAI">Human-AI
                Collaboration</Button>
            <span className="horizontal-space"/>
            <Button sx={{fontSize: 'small'}} className="filter" onClick={handleChange} id="conferencepapers">Conference
                Papers</Button>
            <span className="horizontal-space"/>
            <Button sx={{fontSize: 'small'}} className="filter" onClick={handleChange} id="postersworkshops">Posters and
                Workshops</Button>
            <span className="horizontal-space"/>
            <Button sx={{fontSize: 'small'}} className="filter" onClick={handleChange} id="others">Other
                Projects</Button>

        </div>
    );
}