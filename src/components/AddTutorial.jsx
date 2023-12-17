import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postData = async () => {
    const url = "https://653a10dee3b530c8d9e918c8.mockapi.io/tasks";
    await axios.post(url, { title, description });
    getData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
