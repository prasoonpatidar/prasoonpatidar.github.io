import * as React from 'react';
import Card from "./Card";
import Grid from "@mui/material/Grid";

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
    return <Grid container spacing={2} ref={cardListRef}>
        {idList.map((id) => {
            return <Card key={"CardId_" + id} cardId={id} isSelected={id === selectedCardId}
                         onClick={setSelectedCardId}/>
        })}
    </Grid>;
}