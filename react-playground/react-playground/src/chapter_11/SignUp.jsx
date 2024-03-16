import React, { useState } from 'react'

function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert (`name: ${name}, gender: ${gender}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                Gender:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </label>
            <button type="submit">Submit!</button>
        </form>
    );
}

export default SignUp