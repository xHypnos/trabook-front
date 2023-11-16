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

    const testDataCard = {
        city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
        score: 4.8, 
        discount: 800,
        price: 950, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
    };

    const testListaCards = [
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
        {
            city: {
            name: 'Cucuta', country: {
                name: 'Colombia'}
            },
            score: 4.8, 
            discount: 800,
            price: 950, 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqigQyUpAcxLXChcyLnCLznSJa8TALIUmWS45uIJJNRHruFmj5GxnpGf51s1TOdeLgmPA&usqp=CAU'
        },
];

    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-sky">
        <Row className="secure-width">
            <Col>
                <h2 className="text-center">Exclusive <span className="text-primary">deals & discounts</span></h2>
                <p className="text-center w-75 m-auto text-secondary">Discover our fantastic early booking discounts & start planning your journey.</p>
            </Col>
        </Row>
        {/* <Carousel className="secure-width w-100 p-0 m-0">
            <Carousel.Item>
                <Row className="w-100 d-flex justify-content-around mt-5">
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className="w-100 d-flex justify-content-around mt-5">
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className="w-100 d-flex justify-content-around mt-5">
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                </Row>
            </Carousel.Item>
        </Carousel> */}
        <Carousel className="secure-width w-100 p-0 m-0">
            {testListaCards && testListaCards.length>0 ? (
                    testListaCards.map((card) => {
                        if (card.discount){
                            for(let i=0; i<4; i++){
                                
                            }
                                                             
                        }
                           /*  return <Carousel.Item>
                                <Row className="w-100 d-flex justify-content-around mt-5">
                                    <DealCard as={Col} card={card}/>
                                </Row>
                            </Carousel.Item> */
                        
                    }
                )) : (
                    <></>
                    )
                }
            
            <Carousel.Item>
                <Row className="w-100 d-flex justify-content-around mt-5">
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className="w-100 d-flex justify-content-around mt-5">
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                    <DealCard as={Col} card={testDataCard}/>
                </Row>
            </Carousel.Item>
        </Carousel>
    </Container>
};

export default SectionDeals;