import React from "react";

const Details = ({ data, updated, openView }) => {
  return (
    <>
      <div className="row ">
        <div
          className=" offset-md-2 col-md-6 "
          style={{ position: "absolute" }}
        >
          <div className="card bg-dark p-4 text-white">
            <i
              className="bi bi-x text-end  x-icon"
              onClick={() => updated(!openView)}
            />
            <h1 className="text-primary text-uppercase"> Book Details </h1>
            <div className="card-body">
              <form action="">
                <div className="d-flex my-2 justify-content-between">
                  <div className="d-flex text-start">
                    <h5>
                      <span className="text-info">Book Title</span>:{" "}
                      <span>{data?.title}</span>
                    </h5>
                  </div>
                  <div className="d-flex">
                    <h5>
                      <span className="text-info">Id</span>:{" "}
                      <span className="text-uppercase">
                        {data?._id?.substring(18)}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="d-flex my-4">
                  <h5>
                    <span className="text-info">Book Author</span>:{" "}
                    <span>{data?.author}</span>
                  </h5>
                </div>
                <div className="text-start">
                  <h5 className="">
                    <span className="text-info">Summary</span>:
                  </h5>
                  <hr />
                  <p className="text-uppercase">{data?.summary}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
