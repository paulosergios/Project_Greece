import Footer from "../components/Footer";
import Group from "../components/Group";
import Navbar from "../components/Navbar";
import groupcity from "../data/groupcity"
import useNewPeople from "../data/newPeople";
import { useState, useEffect, useRef } from 'react'


function Groups() {

  const { group, newPeople } = useNewPeople();
  const newPeopleRef = useRef(newPeople);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    const storedGroupData = localStorage.getItem('groupData');
    if (storedGroupData) {
      newPeopleRef.current(JSON.parse(storedGroupData));
    }
  }, []);
  console.log(groupcity)
  return (
    <div>
      <Navbar />
      {groupcity.map(grp => {
        const filteredGroup = group.filter(gr => gr.groupcity === grp.name && gr.departure === formData.departure);
        return (
          <Group
            name={grp.name}
            key={grp.name}
            colorBackground={grp.colorBackground}
            colorTitle={grp.colorTitle}
            group={filteredGroup}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Groups;