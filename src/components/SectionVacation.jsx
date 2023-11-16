import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState, useEffect } from "react";
import { getCards } from "../api/trabookapi";
import VacationCard from "./VacationCard";
import PalmImg from '../assets/img/palmeras.svg';

const SectionVacation = () => {
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
        <Row className="secure-with pt-5">
            <Col className="position-relative">
                <img className="position position-absolute end-0" src={PalmImg} alt="back-img"/>
                <h2 className="text-center">Best <span className="text-primary">vacation plan</span></h2>
                <p className="text-center w-75 m-auto text-secondary">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
            </Col>
        </Row>
        <Row className="secure-width gap-4 d-flex justify-content-around mt-5 secure-with">
            {cards && cards.length>0 ? (
                cards.map(card => (
                <VacationCard as={Col} card={card}/>
                ))
            ) : (
                <></>
            )
            }
        </Row>
    </Container>
};

export default SectionVacation;