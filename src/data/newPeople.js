import { useState } from "react";

const useNewPeople = () => {
  const [group, setGroup] = useState([]);

  const newPeople = (grp) => {
    console.log(grp);
    setGroup([...group, grp]);
  };

  return { group, newPeople };
};

export default useNewPeople;
