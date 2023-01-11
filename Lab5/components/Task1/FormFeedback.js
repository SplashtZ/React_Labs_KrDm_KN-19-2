import React from "react";

import useInput from "./use-input";

function FormFeedback() {
    const {
        value: enteredName,
        valueChangeHandler: nameChangeHandler,
        reset: resetNameInput,
    } = useInput((value) => value);

    const {
        value: enteredTopic,
        isValid: enteredTopiIsValid,
        hasError: topicInputHasError,
        valueChangeHandler: topicChangeHandler,
        inputBlurHandler: topicBlurHandler,
        reset: resetTopicInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmaileInput,
    } = useInput((value) => value.includes("@"));

    const {
        value: enteredMessage,
        valueChangeHandler: messageChangeHandler,
        reset: resetMessageInput,
    } = useInput((value) => value);

    let formIsValid = false;

    if (enteredEmailIsValid && enteredTopiIsValid) {
        formIsValid = true;
    }

    const formSubmitionHandler = (e) => {
        e.preventDefault();

        if (!enteredEmailIsValid && !enteredTopiIsValid) return;

        enteredName.trim() !== "" && console.log("Ім'я -> " + enteredName);
        console.log("Тема -> " + enteredTopic);
        console.log("Пошта -> " + enteredEmail);
        enteredMessage.trim() !== "" &&
        console.log("Повідомлення -> " + enteredMessage);

        resetNameInput();
        resetEmaileInput();
        resetTopicInput();
        resetMessageInput();
    };

    const topicInputClasses = topicInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmitionHandler}>
            <div className="form-control">
                <input
                    type="text"
                    id="name"
                    placeholder="Ім'я"
                    onChange={nameChangeHandler}
                    value={enteredName}
                />
            </div>

            <div className={topicInputClasses}>
                <input
                    type="text"
                    id="topic"
                    placeholder="Тема*"
                    onChange={topicChangeHandler}
                    onBlur={topicBlurHandler}
                    value={enteredTopic}
                />
                {topicInputHasError && <p className="error-text">Поле обов'язкове.</p>}
            </div>

            <div className={emailInputClasses}>
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail*"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">
                        Адресу електронної пошти введено неправильно.
                    </p>
                )}
            </div>

            <div className="form-control">
        <textarea
            id="message"
            placeholder="Повідомлення"
            onChange={messageChangeHandler}
            value={enteredMessage}
        ></textarea>
            </div>

            <em>Поля відмічені * мають бути обов'язково заповненими</em>
            <br />
            <br />
            <br />

            <div className="form-actions">
                <button disabled={!formIsValid}>Відправити</button>
            </div>
        </form>
    );
}

export default FormFeedback;