import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorial from "./EditTutorial";
import { useState } from "react";
import axios from "axios";

const TutorialList = ({ tutorials, getData }) => {
  const [editItem, setEditItem] = useState({});

  const handleDelete = async (id) => {
    const url = `https://653a10dee3b530c8d9e918c8.mockapi.io/tasks/`;
    await axios.delete(`${url}/${id}`);
    getData();
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="me-2 text-warning"
                    onClick={() => setEditItem(item)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => handleDelete(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editItem={editItem} getData={getData} />
    </div>
  );
};

export default TutorialList;
