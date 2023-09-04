import { useState } from "react";
import { emailValidation, nameValidation, numberValidation } from "../Components/validation";

const Check = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    const nameStrength = nameValidation(name);
    const emailStrength = emailValidation(email);
    const noStrength = numberValidation(number);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameStrength === 'valid' && emailStrength === 'valid' && noStrength === 'valid' && date) {
            const payload = { name, email, number: Number(number), date };
            console.log('payload: ', payload);

            setName('');
            setEmail('');
            setNumber('');
            setDate('');
        } else {
            alert('please enter valid details');
        }
    }

    return (
        <div>
            <h1>Check page</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        autoFocus
                        type="text"
                        minLength='3'
                        maxLength='100'
                        placeholder="full name"
                        required="required"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <p>{nameStrength !== 'valid' && name.length > 1 && nameStrength}</p>
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="email address"
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>{emailStrength !== 'valid' && email.length > 2 && emailStrength}</p>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="phone number"
                        minLength="10"
                        maxLength="10"
                        required="required"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <p>{noStrength !== 'valid' && number.length > 1 && noStrength}</p>
                </div>

                <div>
                    <input
                        type="date"
                        min="2000-01-01"
                        max="2022-12-31"
                        required="required"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <p></p>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Check;