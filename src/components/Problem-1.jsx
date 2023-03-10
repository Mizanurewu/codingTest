import React, { useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState([]);
    const [active, setActive] = useState([]);
    const [all, setAll] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const status = form.status.value;
        // console.log(name, status);
        const data = { name: name, status: status };
        // const data=[{name:"romana",status:"active"},{name:"miz",status:"full"}];
        const remaining = [...show];
        const allData=[data,...remaining];
        const sortedData = allData.sort((a, b) => a.status.localeCompare(b.status));
        setShow(sortedData);
        form.reset();
    };

    const handleClick = (val) => {
        

        if(val==="active"){
            setAll(show);
        const active=show.filter(s=>s.status===val);
        setShow(active);

        }
        if(val==="completed"){
            setAll(show);
        const complete=show.filter(s=>s.status===val);
        setShow(complete);

        }
        
        if(val==="all"){
            setShow(all);
        }

    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        onSubmit={handleSubmit}
                        className="row gy-2 gx-3 align-items-center mb-4"
                    >
                        <div className="col-auto">
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                name="status"
                                type="text"
                                className="form-control"
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "all" && "active"}`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "active" && "active"}`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "completed" && "active"}`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                            show.map((s) => (
                                <tr>
                                    <td>
                                        <p>{s.name}</p>
                                    </td>
                                    <td>
                                        <p>{s.status}</p>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
