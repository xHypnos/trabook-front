import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState, useEffect } from "react";
import { getCards } from "../api/trabookapi";
import VacationCard from "./VacationCard";
import PalmImg from '../assets/img/palmeras.svg';
import Carousel from 'react-bootstrap/Carousel';

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

    const gruposDe4 = [];
    for (let i = 0; i < cards.length; i += 4) {
        gruposDe4.push(cards.slice(i, i + 4));
    }

    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-sky">
        <Row className="secure-with">
            <Col className="position-relative">
                <img className="position position-absolute end-0" src={PalmImg} alt="back-img"/>
                <h2 className="text-center">Best <span className="text-primary">vacation plan</span></h2>
                <p className="text-center w-75 m-auto text-secondary">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
            </Col>
        </Row>
        <Carousel className="secure-width w-100 d-flex justify-content-around mt-5 secure-with">
            {gruposDe4.map((grupo, i) => {
                    return <Carousel.Item  key={i} data={grupo}>
                        <Row className="w-100 d-flex justify-content-around mt-5">
                            {grupo.map((card,i) => {
                                return <VacationCard key={i} as={Col} card={card}/>
                                }
                            )}
                        </Row> 
                    </Carousel.Item>    
                })}
            {/* {cards && cards.length>0 ? (
                cards.map(card => (
                <VacationCard as={Col} card={card}/>
                ))
            ) : (
                <></>
            )
            } */}
        </Carousel>
    </Container>
};

export default SectionVacation;