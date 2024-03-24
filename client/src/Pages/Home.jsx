import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import AddDetails from "../components/AddDetails";
import useFetch from "../Hooks/useFetch";
import Axios from "../Axios";
import { toast } from "react-toastify";
import Details from "../components/Details";
import Update from "../components/Update";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [openEditor, setopenEditor] = useState(false);
  const [openView, setopenView] = useState(false);
  const [list, setlist] = useState({});
  const [alldata, setAlldata] = useState([]);

  const CustomId = "toastId";
  const { data, loading,reFetch } = useFetch("/");
  const HandleView = async (id) => {
    try {
      if (id) {
        const res = await Axios.get(`/${id}`);
        if (res && res.data.success) {
          setlist(res.data.message);
       
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("opps! something went wrong...");
    }
    setopenView(!open);
  };

  //edit
  const HandleEdit = async (id) => {
    try {
      if (id) {
        const res = await Axios.get(`/${id}`);
        if (res && res.data.success) {
          setlist(res.data.message);
          reFetch();
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("opps! something went wrong...");
    }
    setopenEditor(!openEditor);
  };
  // delete
  const handleDelete = async (id) => {
    const ans = window.confirm("Are you sure this item delete");
    if (!ans) {
      return;
    }
    try {
      const res = await Axios.delete(`/${id}`);
      if (res && res.data.success) {
        setAlldata(alldata.filter((item) => item._id !== id));
        toast.success(res.data.message);
        reFetch();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const reTake=()=>{
    reFetch();
  }
  useEffect(() => {
    setAlldata(data);
  }, [data]);
  return (
    <Layout>
      <div className={openView ? "" : "d-none"}>
        <Details
          data={list}
          openView={openView}
          updated={(e) => setopenView(e)}
        />
      </div>
      <div className={openEditor ? "" : "d-none"}>
        <Update
          data={list}
          openEditor={openEditor}
          updated={(e) => setopenEditor(e)}
        />
      </div>
      <div className="my-5">
        <h1 className="text-success mt-5">
          Welcome to Backend Developer Challenge
        </h1>
        <p className="fw-bold">
          Challenge done by Md Shoyeb, Full Stack Developer
        </p>
      </div>
      <div className="container">
        {/* <div className="text-start">
          <button onClick={() => setOpen(!open)} className="btn btn-primary">
            <h4>Add</h4>
          </button>
        </div> */}
        <div className={open ? "" : "d-none"}>
          <AddDetails open={open} updated={(e) => setOpen(e)} onAdd={reTake} />
        </div>

        {loading ? (
          loading & toast.loading("Lodaing", { toastId: CustomId })
        ) : (
          <div className="col-md-10 mx-auto">
            {toast.dismiss()}
            <table className="table text-start">
              <thead>
                <tr>
                  <th scope="col">Serial Number</th>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Edit / Delete</th>
                  <th scope="col">View / Add</th>
                </tr>
              </thead>
              <tbody>
                {alldata?.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td className="text-uppercase">
                      {item?._id?.substring(18)}
                    </td>
                    <td className="text-capitalize">{item?.title}</td>
                    <td className="text-uppercase">{item?.author}</td>
                    <td className="d-flex gap-3">
                      <button
                        onClick={() => HandleEdit(item?._id)}
                        className="btn btn-primary"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(item?._id)}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => HandleView(item?._id)}
                        className="btn btn-success me-2"
                      >
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button
                        onClick={() => setOpen(!open)}
                        className="btn btn-secondary ms-2"
                      >
                        <i className="bi bi-plus-square"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
