import { toast } from "react-toastify";
import Axios from "../Axios";
import React, { useState } from "react";

const AddDetails = ({ open, updated }) => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [summary, setsummary] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.post("/", {
        title,
        author,
        summary,
      });
      if (result.data && result.data.success) {
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div
            className="col-md-6 offset-md-1"
            style={{ position: "absolute" }}
          >
            <div className="card bg-dark text-white p-3">
              <i
                className="bi bi-x text-end  x-icon"
                onClick={() => updated(!open)}
              />
              <h1 className="my-4 text-info">Enter Book Details</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Book Title"
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Book author"
                    id="author"
                    onChange={(e) => setauthor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="summary"
                    rows="3"
                    className="form-control"
                    placeholder="Enter Book summary"
                    onChange={(e) => setsummary(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn fw-bold btn-primary">
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDetails;
