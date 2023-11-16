import Container from "react-bootstrap/esm/Container";
import SubscribeImg from '../assets/img/back-subscribe.svg';

const SectionSubscribe = () => {
    return <Container fluid className="p-5 d-flex flex-column trabook-bg-sky">
        <Container className="position-relative overflow-hidden secure-width rounded p-5 mb-5 bg-primary">
            <h2 className="text-white text-center m-auto w-75">Subscribe and get exclusive deals & offer</h2>
            <img className="position-absolute bottom-0" src={SubscribeImg} alt="img-fondo"/>
            <div className="position-relative input-group align-items-center w-50 my-5 mx-auto">
                <input type="email" className="form-control z-1 rounded w-75 px-5 py-3" placeholder="Enter your mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <p className="position-absolute ps-3 m-0 fs-3 text-secondary z-2"><ion-icon name="mail-outline"></ion-icon></p>
                <div className="position-absolute  input-group-append z-2 p-2 end-0">
                  <button className="btn btn-outline-light bg-primary" type="button">Subscribe</button>
                </div>
            </div>
        </Container>
    </Container>
};

export default SectionSubscribe;