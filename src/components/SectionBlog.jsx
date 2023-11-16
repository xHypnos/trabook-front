import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import BlogImg1 from '../assets/img/Image1.png';
import BlogImg2 from '../assets/img/Image2.png';
import BlogImg3 from '../assets/img/Image3.png';
import BlogImg4 from '../assets/img/Image4.png';

const SectionBlog = () => {
    return <Container fluid className="p-5 d-flex flex-column trabook-bg-sky">
        <Row className="secure-width m-auto pb-4">
            <Col>
                <h2 className="mb-3 text-center">Get update with <span className="text-primary">latest blog</span></h2>
            </Col>
        </Row>
        <Row className="secure-width m-auto">
            <Col>
                <Card className="border-0">
                    <Card.Img src={BlogImg1}/>
                    <Card.Title className="fw-bold my-2 fs-6">The Amazing Difference a Year of Travelling.</Card.Title>
                    <Card.Text className="text-secondary fs-7">July 27, 2021</Card.Text>
                </Card>
            </Col>
            <Col>
                <Card className="border-0">
                    <Card.Img src={BlogImg2}/>
                    <Card.Title className="fw-bold my-2 fs-6">Travel far enough, you meet yourself.</Card.Title>
                    <Card.Text className="text-secondary fs-7">July 27, 2021</Card.Text>
                </Card>
            </Col>
            <Col >
                <Card className="border-0">
                    <Card.Img src={BlogImg3}/>
                    <Card.Title className="fw-bold my-2 fs-6">How to Save Money While Visiting Africa.</Card.Title>
                    <Card.Text className="text-secondary fs-7">July 27, 2021</Card.Text>
                </Card>
            </Col>
            <Col >
                <Card className="border-0">
                    <Card.Img src={BlogImg4}/>
                    <Card.Title className="fw-bold my-2 fs-6">Reflections on 5 Months of Travel: Time to Hang</Card.Title>
                    <Card.Text className="text-secondary fs-7">July 27, 2021</Card.Text>
                </Card>
            </Col> 
        </Row>
    </Container>
};

export default SectionBlog;