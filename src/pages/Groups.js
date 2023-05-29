import Footer from "../components/Footer";
import Group from "../components/Group";
import Navbar from "../components/Navbar";
import groupcity from "../data/groupcity";

function Groups(props) {
  return (
    <div>
      <Navbar /> {/* Render the navigation bar */}
      <section>
        {groupcity.map(grp => (
          <Group
            key={grp.name} // Unique key for each Group component
            cityname={grp.name} // Pass the city name as a prop
            colorBackground={grp.colorBackground} // Pass the background color as a prop
            colorTitle={grp.colorTitle} // Pass the title color as a prop
            group={props.group.filter(filtro => filtro.destiny === grp.name)} // Filter the group based on the city name
          />
        ))}
      </section>
      <Footer /> {/* Render the footer */}
    </div>
  );
}

export default Groups;
