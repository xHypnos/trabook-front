import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import ToDoImg from '../assets/img/formulario.svg';
import WalletImg from '../assets/img/billetera.svg';
import LocationImg from '../assets/img/ubicacion.svg';

const SectionNeedToDo = () => {
    return <Container fluid className="p-5 d-flex flex-column align-items-center trabook-bg-aqua">
        <Row className="secure-with">
            <Col>
                <h2 className="text-center">Things you need <span className="text-primary">to do</span></h2>
                <p className="text-center w-75 m-auto text-secondary">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
            </Col>
        </Row>
        <Row className="gap-4 d-flex justify-content-around mt-5 secure-with">
            <Col className="rounded shadow pt-5 p-3 trabook-bg-withe">
                <img className="mb-3" src={ToDoImg} alt="card_img"/>
                <h4 className="todo-title fw-bold">Sign Up</h4>
                <p className="text-secondary">Completes all the work associated with planning and processing</p>
            </Col>
            <Col className="rounded shadow pt-5 p-3 trabook-bg-withe">
                <img className="mb-3" src={WalletImg} alt="card_img"/>
                <h4 className="todo-title fw-bold">Sign Up</h4>
                <p className="text-secondary">Completes all the work associated with planning and processing</p>
            </Col>
            <Col className="rounded shadow pt-5 p-3 trabook-bg-withe">
                <img className="mb-3" src={LocationImg} alt="card_img"/>
                <h4 className="todo-title fw-bold">Sign Up</h4>
                <p className="text-secondary">Completes all the work associated with planning and processing</p>
            </Col>
        </Row>
    </Container>
};

export default SectionNeedToDo;