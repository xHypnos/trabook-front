import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ToDoImg from '../assets/img/formulario.svg';
import WalletImg from '../assets/img/billetera.svg';
import LocationImg from '../assets/img/ubicacion.svg';
import AirplanesImg from '../assets/img/aviones2.svg';

const SectionNeedToDo = () => {
    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-aqua">
        <Row className="secure-width">
            <Col className="position-relative">
                <img className="position position-absolute end-0" src={AirplanesImg} alt="back-img"/>
                <h2 className="text-center">Things you need <span className="text-primary">to do</span></h2>
                <p className="text-center w-75 m-auto text-secondary">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
            </Col>
        </Row>
        <Row className="secure-width gap-4 d-flex justify-content-around mt-5 secure-with">
            <Col className="hover-card-deal rounded shadow pt-5 p-3 trabook-bg-withe">
                <img className="mb-3" src={ToDoImg} alt="card_img"/>
                <h4 className="todo-title fw-bold">Sign Up</h4>
                <p className="text-secondary">Completes all the work associated with planning and processing</p>
            </Col>
            <Col className="hover-card-deal rounded shadow pt-5 p-3 trabook-bg-withe">
                <img className="mb-3" src={WalletImg} alt="card_img"/>
                <h4 className="todo-title fw-bold">Worth of Money</h4>
                <p className="text-secondary">After successful access then book from exclusive deals & pricing</p>
            </Col>
            <Col className="hover-card-deal rounded shadow pt-5 p-3 trabook-bg-withe">
                <img className="mb-3" src={LocationImg} alt="card_img"/>
                <h4 className="todo-title fw-bold">Exciting Travel</h4>
                <p className="text-secondary">Start and explore a wide range of exciting travel experience.</p>
            </Col>
        </Row>
    </Container>
};

export default SectionNeedToDo;