import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ExploreForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className='mt-5 w-75 m-auto p-3 rounded trabook-bg-withe shadow' style={{maxWidth: "700px"}} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='d-flex align-items-center'>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Select className='border-0 p-1 fw-bold' aria-label="Default select example">
                <option>Location</option>
                <option value="1">Colombia</option>
                <option value="2">España</option>
                <option value="3">Italia</option>
                <option value="4">Canada</option>
            </Form.Select>
            <Form.Label className='fs-7 text-secondary'>Where are you going</Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Select className='border-0 p-1 fw-bold' aria-label="Default select example">
                <option>Date</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="1">Mayo</option>
                <option value="2">Junio</option>
                <option value="3">Julio</option>
                <option value="4">Agosto</option>
                <option value="1">Septiembre</option>
                <option value="2">Octubre</option>
                <option value="3">Noviembre</option>
                <option value="4">Diciembre</option>
            </Form.Select>
            <Form.Label className='fs-7 text-secondary'>When you will go</Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Select className='border-0 p-1 fw-bold' aria-label="Default select example">
                <option>Guest</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">5 o mas</option>
                <option value="4">10 o mas</option>
            </Form.Select>
            <Form.Label className='fs-7 text-secondary'>Number of guest</Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Button className='p-2 ps-3 pe-3 text-light' type="submit">Explore Now</Button>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default ExploreForm;