import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/card";

const MainCard = () => {
    const student = JSON.parse(localStorage.getItem("student"));
    const history = useHistory();
    const handleUserInfo = () => {
        history.push(`/account`);
    };
    return (
        <>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 offset-md-3 p-4">
                        <h1 className="mb-4">Карточка студента</h1>
                        <div>
                            {student ? (
                                <Card data={student} />
                            ) : (
                                <p>Нет данных</p>
                            )}
                            <button
                                type="btn"
                                className="btn btn-primary"
                                onClick={handleUserInfo}
                            >
                                {student ? "Редактировать" : "Добавить"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MainCard;
