import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
    // State variables for the input values
    let [name, setName] = useState("");
    let [humanAge, setHumanAge] = useState("");

    // State variables to store the parsed human age and submitted name
    let [humanAgeInt, setHumanAgeInt] = useState<number | undefined>();
    let [submittedName, setSubmittedName] = useState("");


    /**
    * Handles form submission
    * @param {React.FormEvent<HTMLFormElement>} event - The form submission event
    */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Parse humanAge to an integer and set it to humanAgeInt state
        setHumanAgeInt(humanAge ? parseInt(humanAge) : undefined);

        // Set the submitted name to the current name value
        setSubmittedName(name);

        // Clear the input fields after submitting
        setName("");
        setHumanAge("");
    };


    /**
    * Handles changes in the humanAge input field
    * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event
    */
    const handleHumanAge = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setHumanAge(event.target.value);
    };


    // Calculate the dog's age based on the human age
    const dogAge = humanAgeInt ? (16 * Math.log(humanAgeInt + 31)).toFixed(0) : undefined;

    return (
        <div className={styles.calculator}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputFields}>
                    <label htmlFor="name">Dog's Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                        placeholder="Enter Dog's Name Here... "
                    />
                </div>
                <div className={styles.inputFields}>
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
            {/* Display the calculated dog age if humanAgeInt and dogAge are not undefined */}
            {humanAgeInt !== undefined && dogAge !== undefined && (
                <div className="displayAge">
                    <p>{submittedName ? submittedName : "This dog"} is {dogAge} years old!</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;


