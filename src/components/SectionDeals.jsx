import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DealCard from "./DealCard";
import { useState, useEffect } from "react";
import { getCards } from "../api/trabookapi";
import Carousel from 'react-bootstrap/Carousel';

const SectionDeals = () => {
    const [cards, setCards] = useState([]);
    const cardGroups = [];

    useEffect(()=>{
        const getCardsData = async()=>{
            try{
                const data = await getCards();
                setCards(data);
            } catch(e){
                console.log(e);
            }
        };
        getCardsData();
    },[]);

    cards && cards.map((card)=>{
        card.discount && cardGroups.push(card)
    })

    const gruposDe4 = [];
    for (let i = 0; i < cardGroups.length; i += 4) {
        gruposDe4.push(cardGroups.slice(i, i + 4));
    }

    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-sky">
        <Row className="secure-width">
            <Col>
                <h2 className="text-center">Exclusive <span className="text-primary">deals & discounts</span></h2>
                <p className="text-center w-75 m-auto text-secondary">Discover our fantastic early booking discounts & start planning your journey.</p>
            </Col>
        </Row>
        <Carousel className="secure-width position-relative w-100 p-0 m-0">
            {gruposDe4.map((grupo, i) => {
                    return <Carousel.Item  key={i} data={grupo}>
                        <Row className="w-100 d-flex justify-content-around mt-5">
                            {grupo.map((card,i) => {
                                return <DealCard key={i} as={Col} card={card}/>
                                }
                            )}
                        </Row> 
                    </Carousel.Item>    
                })}
        </Carousel>
    </Container>
};

export default SectionDeals;