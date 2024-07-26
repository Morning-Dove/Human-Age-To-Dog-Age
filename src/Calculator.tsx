import React, { useState } from "react";
import styles from "./Calculator.module.css";


const Calculator: React.FC = () => {
    let [name, setName] = useState("");
    let [humanAge, setHumanAge] = useState("");
    let [humanAgeInt, setHumanAgeInt] = useState<number | undefined>();
    let [submittedName, setSubmittedName] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setHumanAgeInt(humanAge ? parseInt(humanAge) : undefined);

        setSubmittedName(name);

        // Clears the input field after submitting
        setName("");
        setHumanAge("");
    };

    const handleHumanAge = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setHumanAge(event.target.value)
    }

    const dogAge = humanAgeInt ? (16*Math.log(humanAgeInt + 31)).toFixed(0) : undefined;

    return (
        <div className={styles.calculator}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Dog's Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                        placeholder="Enter Dog's Name Here... "
                    />
                </div>
                <div>
                    <label htmlFor="humanAge">Dog's Age in Human Years: </label>
                    <input
                        type="number"
                        id="humanAge"
                        value={humanAge}
                        onChange={handleHumanAge}
                        placeholder="Enter Dog's Age Here... "
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {humanAgeInt && dogAge !== undefined && (
                <div className="displayAge">
                    <p>{submittedName ? submittedName : "This dog"} is {dogAge} years old! </p>
                </div>
            )}
        </div>
    );
};

export default Calculator;


