import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import groupcity from "../data/groupcity"
import useNewPeople from "../data/newPeople";

function PageForm() {

  const { newPeople } = useNewPeople();

  return (
    <div>
      <Navbar />
      <Form groupcity={groupcity.map(grp => grp.name)} newPeopleRegist={grp => newPeople(grp)} />
      <Footer />

    </div>
  );
}

export default PageForm;