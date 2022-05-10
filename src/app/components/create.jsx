import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
import InfoModal from "./modal";

const Create = () => {
    const history = useHistory();
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        birthyear: "",
        portfolio: ""
    });
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const handleChange = (target) => {
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const currentYear = new Date().getFullYear();
    const validatorConfig = {
        firstname: {
            isRequired: {
                message: "Поле 'Имя' обязательно для заполнения"
            }
        },
        lastname: {
            isRequired: {
                message: "Поле 'Фамилия' обязательно для заполнения"
            }
        },
        birthyear: {
            isRequired: {
                message: "Поле 'Год рождения' обязательно для заполнения"
            },
            max: {
                message: "Поле 'Год рождения' не корректно",
                value: currentYear
            },
            length: {
                message: "Поле 'Год рождения' не корректно",
                value: 4
            }
        },
        portfolio: {
            isRequired: {
                message: "Поле 'Портфолио' обязательно для заполнения"
            },
            isLink: {
                message: "Поле 'Портфолио' должно быть ссылкой"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleToggleModal = () => {
        setShow(prevState => !prevState);
    };
    const handleRedirect = () => {
        history.push(`/`);
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        handleToggleModal();
        localStorage.setItem("student", JSON.stringify(data));
    };
    return (
        <>
            <h1 className="mb-4">Создать</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    error={errors.firstname}
                />
                <TextField
                    label="Фамилия"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    error={errors.lastname}
                />
                <TextField
                    type="number"
                    label="Год рождения"
                    name="birthyear"
                    value={data.birthyear}
                    onChange={handleChange}
                    error={errors.birthyear}
                />
                <TextField
                    label="Портфолио"
                    name="portfolio"
                    value={data.portfolio}
                    onChange={handleChange}
                    error={errors.portfolio}
                />
                <button
                    type="submit"
                    className="btn btn-primary mx-auto"
                    disabled={!isValid}
                >
                    Создать
                </button>
                <InfoModal
                    onToggle={handleToggleModal}
                    onRedirect={handleRedirect}
                    status={show}
                />
            </form>
        </>
    );
};

export default Create;
