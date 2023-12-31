import Container from "react-bootstrap/esm/Container";
import ImageBanner from '../assets/img/imagen_banner.png';
import Card1Img from '../assets/img/card1.png';
import Card2Img from '../assets/img/card2.png';
import Card3Img from '../assets/img/card3.png';
import AirplanesImg from '../assets/img/aviones_banner.svg';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import ExploreForm from "./ExploreForm";

const Main = () => {
    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-sky">
        <Row className="d-flex flex-column flex-lg-row w-100 gap-1 secure-width">
            <Col className="mt-5 d-flex flex-column z-1 justify-content-center">
                <h2 className="fs-1 mb-4">Get started your exciting <span className="text-primary">journey</span> with us.</h2>
                <p className="mb-4">A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
                <Button variant="outline-primary" className="fw-medium align-self-start">Discovery Now</Button>
            </Col>
            <Col className="d-flex justify-content-center position-relative">
                <img className="z-1" style={{maxWidth: '400px'}} src={ImageBanner} width={'80%'} alt="banner"/>
                <img className="position-absolute z-0 top-0 start-0 translate-middle" src={AirplanesImg} alt="airplanes"/>
                <img className="hover-card position-absolute z-2 bottom-50 start-0" src={Card1Img} alt="card"/>
                <img className="hover-card position-absolute z-2 top-50 start-50" src={Card2Img} alt="card"/>
                <img className="hover-card position-absolute z-2 bottom-0 end-50 " src={Card3Img} alt="card"/>
            </Col>
        </Row>
        <ExploreForm/>
    </Container>
};

export default Main;