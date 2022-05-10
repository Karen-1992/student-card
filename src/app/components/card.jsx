import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
    const getStudentAge = (birthyear) => {
        const currentYear = new Date().getFullYear();
        const studentAge = currentYear - birthyear;
        const lastOne = Number(studentAge.toString().slice(-1));
        if (studentAge > 4 && studentAge < 15) return ` (${studentAge} лет)`;
        if ([2, 3, 4].indexOf(lastOne) >= 0) return ` (${studentAge} года)`;
        if (lastOne === 1) return ` (${studentAge} год)`;
        return ` (${studentAge} лет)`;
    };
    return (
        <div>
            <p className="mt-1 mb-1">
                <strong>Имя: </strong>
                {data.firstname}
            </p>
            <p className="mt-1 mb-1">
                <strong>Фамилия: </strong>
                {data.lastname}
            </p>
            <p className="mt-1 mb-1">
                <strong>Год рождения: </strong>
                {data.birthyear} {getStudentAge(data.birthyear)}
            </p>
            <p className="mt-1 mb-3">
                <strong>Портфолио: </strong>
                <a href={data.portfolio}>
                    {data.portfolio}
                </a>
            </p>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object
};

export default Card;
