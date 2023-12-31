import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrabookLogo from '../assets/img/logo_trabook.svg';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return <Container fluid className='p-3 d-flex flex-column justify-content-center trabook-bg-sky'>
        <Row className='w-100 secure-width m-auto'>
            <Col className='d-flex justify-content-center align-items-center'>
                <h1 className='fs-3 m-0'>Trabook </h1>
                <img className='ms-2' src={TrabookLogo} alt='logo'/>
            </Col>
            <Col xs={6} className='d-none d-lg-flex justify-content-center z-1'>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>About</Nav.Link>
                    </Nav.Item>  
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Destination</Nav.Link>
                    </Nav.Item>  
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Tour</Nav.Link>
                    </Nav.Item>  
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Blog</Nav.Link>
                    </Nav.Item>  
                </Nav>
            </Col>
            <Col className='d-flex justify-content-center z-1'>
                <Button variant='link' className='text-decoration-none fw-medium'>Login</Button>
                <Button variant="primary" className='text-light fw-medium'>Sign up</Button>
            </Col>
        </Row>
        <Row className='d-lg-none'>
            <Col className='d-flex justify-content-center z-1'>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>About</Nav.Link>
                    </Nav.Item>  
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Destination</Nav.Link>
                    </Nav.Item>  
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Tour</Nav.Link>
                    </Nav.Item>  
                    <Nav.Item>
                        <Nav.Link className='text-dark fw-medium' href='/'>Blog</Nav.Link>
                    </Nav.Item>  
                </Nav>
            </Col>
        </Row>
    </Container>
};

export default Header;