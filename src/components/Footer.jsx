import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import TrabookLogo from '../assets/img/logo_trabook.svg';

const Footer = () => {
    return <Container fluid className="px-5 d-flex flex-column trabook-bg-sky">
        <Row className="secure-width m-auto flex-column flex-sm-row">
            <Col>
                <h3 className="d-flex align-items-center fs-4">Trabook <img className="ps-2" src={TrabookLogo} alt="logo"/></h3>
                <p className="text-secondary">Book your trip in minute, get full Control for much longer.</p>
                <ul className="list-unstyled d-flex social-list">
                    <li className="enlace-redes"><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li className="enlace-redes mx-4"><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li className="enlace-redes"><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
                </ul>
            </Col>
            <Col>
                <h3 className="todo-title fw-bold fs-5">Company</h3>
                <ul className="list-unstyled text-secondary">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Logistic</li>
                    <li>Privacy & Policy</li>
                </ul>
            </Col>
            <Col>
                <h3 className="todo-title fw-bold fs-5">Contact</h3>
                <ul className="list-unstyled text-secondary">
                    <li>Help/FAQ</li>
                    <li>Press</li>
                    <li>Affilates</li>
                </ul> 
            </Col>
            <Col>
                <h3 className="todo-title fw-bold fs-5">More</h3>
                <ul className="list-unstyled text-secondary">
                    <li>Press Centre</li>
                    <li>Our Blog</li>
                    <li>Low fare tips</li>
                </ul> 
            </Col>
        </Row>
        <hr/>
        <div class="secure-width w-100 d-flex flex-column flex-sm-row text-center justify-content-between">
            <p className="text-secondary">Copyright, Trabook 2022. All rights reserved.</p>
            <p className="text-secondary">Terms & Conditions</p>
        </div>
    </Container>
};

export default Footer;