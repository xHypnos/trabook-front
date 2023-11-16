import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function VacationCard({card}) {
    const {city, score, discount, price, img, days} = card;
    console.log(city)

  return (
    <Card className='hover-card-deal p-0 position-relative' style={{ width: '300px', height: '400px'}}>
      <Card.Img className='w-100 overflow-hidden' variant="top" src={img} />
      <Card.Body>
        <Row>
            <Col>
                <Card.Title className='fw-bold'>{city.name}, {city.country.name}</Card.Title>
            </Col>
            <Col xs={4}>
                <Card.Text className='text-primary fw-bold p-0 text-end' as={Col}>${discount ? discount : price}</Card.Text>
            </Col>
        </Row>
        <Row>
            <Col xs={7}>
                <Card.Title className='d-flex align-items-center fs-6 text-secondary'><ion-icon style={{marginRight: '10px', color:'#FA7436'}} name="navigate"></ion-icon>{days} Days trip</Card.Title>
            </Col>
            <Col>
                <Card.Text className='d-flex align-items-center justify-content-end text-secondary'><ion-icon style={{marginRight: '2px', color:'#ffc404'}} name="star"></ion-icon>{score}</Card.Text>
            </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default VacationCard;