import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ editItem, getData }) => {
  const { title: oldTit, description: oldDesc, id } = editItem;
  const [title, setTitle] = useState(oldTit || "");
  const [description, setDescription] = useState(oldDesc || "");

  const getPutData = async () => {
    const url = `https://653a10dee3b530c8d9e918c8.mockapi.io/tasks/${id}`;
    await axios.put(url, { title, description });
    getData();
  };

  useEffect(() => {
    setTitle(oldTit);
    setDescription(oldDesc);
  }, [oldDesc, oldTit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPutData();
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
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
                  value={title || ""}
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
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-danger mb-4 mx-auto d-block w-50"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
