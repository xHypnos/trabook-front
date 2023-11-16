import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProfileImg from '../assets/img/foto_perfil.png';
import AirplaneImg from '../assets/img/aviones3.svg';

const SectionPeopleSay = () => {
    return <Container fluid className="p-5 trabook-bg-aqua">
        <Row className="flex-column flex-md-row secure-width m-auto py-5 my-5">
            <Col className="mb-5">
                <h2 className="mb-3">What people say <span className="text-primary">about Us.</span></h2>
                <p className="w-75 text-secondary">Our Clients send us bunch of smilies with our services and we love them.</p>
            </Col>
            <Col className="position-relative">
                <img className="position position-absolute top-0 end-0 translate-middle-y" src={AirplaneImg} alt="back-img"/>
                <Container className="border position-relative w-75 z-1 bg-white rounded p-4">
                    <img className="position-absolute top-0 start-0 translate-middle" src={ProfileImg} alt="profile"/>
                    <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                    <p className="fw-bold m-0">Mike taylor</p>
                    <p className="text-secondary fs-7 m-0">Lahore, Pakistan</p>
                </Container>
                <Container className="border opacity-50 position-absolute w-75 z-0 top-50 end-0 bg-white rounded p-4">
                    <img className="position-absolute top-0 start-0 translate-middle" src={ProfileImg} alt="profile"/>
                    <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                    <p className="fw-bold m-0">Chris Thomas</p>
                    <p className="text-secondary fs-7 m-0">CEO of Red Button</p>
                </Container>
            </Col>
        </Row>
    </Container>
};

export default SectionPeopleSay;