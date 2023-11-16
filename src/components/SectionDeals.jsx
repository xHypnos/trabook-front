import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DealCard from "./DealCard";
import { useState, useEffect } from "react";
import { getCards } from "../api/trabookapi";
import Carousel from 'react-bootstrap/Carousel';

const SectionDeals = () => {
    const [cards, setCards] = useState([]);
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

    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-sky">
        <Row className="secure-width">
            <Col>
                <h2 className="text-center">Exclusive <span className="text-primary">deals & discounts</span></h2>
                <p className="text-center w-75 m-auto text-secondary">Discover our fantastic early booking discounts & start planning your journey.</p>
            </Col>
        </Row>
        <Row className="secure-width gap-4 d-flex justify-content-around mt-5">
            {cards && cards.length>0 ? (
                cards.map((card) => {
                    if (card.discount){
                        return <DealCard as={Col} card={card}/>
                    }
                }
            )) : (
                <></>
                )
            }
        </Row>
    </Container>
};

export default SectionDeals;