import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Axios from "../Axios";

const Update = ({ data, openEditor, updated }) => {
  const [title, setTtitle] = useState(data?.title);
  const [author, setauthor] = useState(data?.author);
  const [summary, setsummary] = useState(data?.summary);
  useEffect(() => {
    setTtitle(data?.title);
    setauthor(data?.author);
    setsummary(data?.summary);
  }, [data]);
  const handelUpdate = async (e) => {
    e.preventDefault();
    try {
      if (data._id) {
        const res = await Axios.put(`/${data._id}`, {
          title,
          author,
          summary,
        });
        console.log(res);
        if (res && res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong...");
    }
  };
  return (
    <>
      <div className="row ">
        <div className=" offset-1 col-md-6 " style={{ position: "absolute" }}>
          <div className="card bg-dark p-4 text-white">
            <i
              className="bi bi-x text-end x-icon"
              onClick={() => updated(!openEditor)}
            />

            <h3 className="text-primary  fw-bold text-uppercase">
              Update details{" "}
            </h3>
            <div className="card-body">
              <form action="" onSubmit={handelUpdate}>
                <div className="row row-cols-2 text-start">
                  <div className="d-flex my-3">
                    <span className="text-info fw-bold fw-bold">Name</span>:{" "}
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setTtitle(e.target.value)}
                      value={title}
                    />
                  </div>
                  <div className="my-3 text-end">
                    <span className="text-info fw-bold">Id</span>:{" "}
                    <span className=" text-uppercase text-light bg-secondary">
                      {data?._id?.substring(18)}
                    </span>
                  </div>
                  <div className="d-flex my-3">
                    <span className="text-info fw-bold "> Book Author</span>{" "}
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setauthor(e.target.value)}
                      value={author}
                    />
                  </div>
                </div>

                <div className="text-start text-capitalize">
                  <span className="text-info fw-bold ">summary</span>: <br />
                  <textarea
                    rows="3"
                    className="form-control"
                    type="text"
                    value={summary}
                    onChange={(e) => setsummary(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <button type="submit" className="btn btn-success px-4">
                    <div>Save</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
