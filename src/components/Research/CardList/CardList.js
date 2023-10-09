import * as React from 'react';
import Card from "./Card";
import Grid from "@mui/material/Grid";
import projectCards from '../../../data/projects.json';

export default function CardList({idList}) {
    const cardListRef = React.useRef();
    const [selectedCardId, setSelectedCardId] = React.useState(-1);
    React.useEffect(() => {
        if (!cardListRef.current) {
            return;
        }
        const cardList = Array.from(cardListRef.current.querySelectorAll(".CardData"));
        const listener = (event) => {
            const isInsideSomeElement = cardList.some((element) => {
                return element.contains(event.target);
            });

            if (!isInsideSomeElement) {
                setSelectedCardId(-1);
            }
        }
        document.addEventListener("click", listener);
        return () => {
            document.removeEventListener("click", listener);
        }
    }, []);
    let filteredProjectList = projectCards.filter(card => {
        return idList.indexOf(card.id) !== -1;
    });
    return <Grid container spacing={2} ref={cardListRef}>
        {filteredProjectList.map((card) => {
            return <Card key={"CardId_" + card.id}
                         name={card.Name}
                         authors={card.Authors}
                         description={card.Description}
                         conference={card.Conference}
                         thumbnail={card.Thumbnail}
                         paper_link={card.Paper}
                         code_link={card.Code}
                         video_link={card.Video}
                         demo_link={card.Demo}
                         ppt_link={card.PPT}
                         blog_link={card.Blog}
                         cardId={card.id} isSelected={card.id === selectedCardId}
                         onClick={setSelectedCardId}/>
        })}
    </Grid>;
}