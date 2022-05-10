import React from "react";
import Create from "../components/create";
import Edit from "../components/edit";

const Account = () => {
    const student = JSON.parse(localStorage.getItem("student"));
    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4">
                    {!student
                        ? <Create />
                        : <Edit studentInfo={student}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Account;
