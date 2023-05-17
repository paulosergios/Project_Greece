import Footer from "../components/Footer";
import Group from "../components/Group";
import Navbar from "../components/Navbar";
import groupcity from "../data/groupcity";
import useNewPeople from "../data/newPeople";
import { useState, useEffect } from 'react';

function Groups() {
  const { group } = useNewPeople();
  const [formData, setFormData] = useState(null);


  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData && !formData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [formData]);

  return (
    <div>
      <Navbar />
      {groupcity.map((city) => (
        <Group
          name={city.name}
          key={city.name}
          colorBackground={city.colorBackground}
          colorTitle={city.colorTitle}
          group={group.filter((grp) => grp.groupcity === city.name)}
          formData={formData}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Groups;
