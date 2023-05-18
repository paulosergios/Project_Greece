import { useState } from "react";

const useNewPeople = () => {
  const [group, setGroup] = useState([]);
 
  const newPeople = (grp) => {
    setGroup((currentgroup) => {
    const newGroup = [...currentgroup, grp];
    return newGroup;
    });
   };
  return { group, newPeople };
 };
 

export default useNewPeople;
