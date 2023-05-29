import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import groupcity from "../data/groupcity"

function PageForm(props) {

  return (
    <div>
      <Navbar/>
      <Form groupcity={groupcity.map(grp => grp.name)} newPeopleRegist={props.newPeople} />
      <Footer />

    </div>
  );
}

export default PageForm;