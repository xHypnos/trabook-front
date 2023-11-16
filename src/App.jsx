import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SectionBlog from './components/SectionBlog';
import SectionDeals from './components/SectionDeals';
import SectionNeedToDo from './components/SectionNeedToDo';
import SectionPeopleSay from './components/SectionPeopleSay';
import SectionSubscribe from './components/SectionSubscribe';
import SectionVacation from './components/SectionVacation';


function App() {
  return (
    <>
      <Header/>
      <Main/>
      <SectionNeedToDo/>
      <SectionDeals/>
      <SectionVacation/>
      <SectionPeopleSay/>
      <SectionBlog/>
      <SectionSubscribe/>
      <Footer/>
    </>
  );
}

export default App;
