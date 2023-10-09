import Divider from "@mui/material/Divider";
import * as React from "react";
import newsJson from '../../data/news.json';

export default function News() {
    const listItems = newsJson.map(news => <li key={news.index}
                                               style={{fontSize: 'large'}}><b>{news.date}(<a
        href={"https://dl.acm.org/doi/pdf/10.1145/3610907"}
        target={"_blank"}
        rel={"noreferrer"}>{news.heading}</a>):</b> {news.context}</li>);
    return (<div className="container">
            <h3 style={{display: 'flex', alignContent: 'flex-start', fontSize: "x-large"}}>NEWS</h3>
            <Divider flexItem/>
            <ul style={{textAlign: 'left', paddingBottom: 10, paddingTop: 10}}>{listItems}</ul>
        </div>
    );
}
