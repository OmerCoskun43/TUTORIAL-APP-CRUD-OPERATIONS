import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://653a10dee3b530c8d9e918c8.mockapi.io/tasks"
    );
    setTutorials(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AddTutorial getData={getData} />
      <TutorialList tutorials={tutorials} getData={getData} />
    </>
  );
};

export default Home;
