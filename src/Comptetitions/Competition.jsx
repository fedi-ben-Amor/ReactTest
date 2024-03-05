import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import { Link } from "react-router-dom";

function Competition() {
  const [Competition, setCompetition] = useState([]);
  const handleCompetition = async () => {
    try {
      const compData = await axios.get("http://localhost:3001/competitions");
      console.log(compData.data);
      setCompetition(compData.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    handleCompetition();
  }, []);
  return (
    <>
    <NavigationBar />
    <div>
      <h1> Liste Competitions </h1>
      <table>
        <tr>
          <td> #</td>
          <td> Name</td>
          <td> Fees </td>
          <td> Date </td>
          <td> Details </td>
          <td>Add</td>
        </tr>
        {Competition?.map((item, index) => (
          <tr>
            <td>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.fees}</td>
            <td>{item?.date}</td>
            <td>
              <Link to={`/competitionDetail/${item?.id}`}> Details</Link>
            
            </td>
            <td>
              <Link to={`/Addcompetition`}> Add</Link>
            
            </td>
          </tr>
        ))}
      </table>
    </div>
    </>
  );
}

export default Competition;