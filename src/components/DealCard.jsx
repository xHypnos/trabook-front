import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function DealCard({card}) {
    const {city, score, discount, price, img} = card;

  return (
    <Card className='hover-card-deal p-0 position-relative mb-3' style={{ maxWidth: '270px', maxHeight: '400px'}}>
      <Card.Img className='w-100 overflow-hidden' variant="top" src={img} />
      <Button className='text-light px-4 fw-medium py-3 position-absolute top-50 start-50 translate-middle hover-button-deal' variant="primary">Book Now</Button>
      <Card.Body>
        <Row>
            <Col>
                <Card.Title className='fw-bold'>{city.name}</Card.Title>
            </Col>
            <Col>
                <Card.Text className='d-flex align-items-center justify-content-end text-secondary'><ion-icon style={{marginRight: '2px', color:'#ffc404'}} name="star"></ion-icon>{score}</Card.Text>
            </Col>
        </Row>
        <Row>
            <Col xs={7}>
                <Card.Title className='d-flex align-items-center fs-6 text-secondary'><ion-icon style={{marginRight: '2px'}} name="location-outline"></ion-icon>{city.country.name}</Card.Title>
            </Col>
            <Col xs={5}>
                <Row className='p-0'>
                    <Card.Text className='text-secondary fw-bold p-0' as={Col}><del>${price}</del></Card.Text>
                    <Card.Text className='text-primary fw-bold rounded p-0 me-2 text-center' style={{backgroundColor: '#FFE7DB'}} as={Col}>${discount}</Card.Text>
                </Row>
            </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default DealCard;