# Human Age To Dog Age

This project is a simple React application that converts human age to dog age using a specific formula. The application takes the dog's name and its age in human years as input, calculates the equivalent age in dog years, and displays the result on the page.

To view this app on GitHub Pages please click the link below:

https://morning-dove.github.io/Human-Age-To-Dog-Age/

#### Formula
The formula used to calculate the dog age from human age is:
Dog Age = 16×ln(Human Age+31)

For example, a 7-year-old dog in human years is approximately 62 years old in dog years.

#### Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Morning-Dove/Human-Age-To-Dog-Age.git
    cd Human-Age-To-Dog-Age
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

#### Usage
Enter the dog's name and its age in human years in the provided input fields and click the "Submit" button. The application will calculate and display the equivalent dog age based on the provided human age.

#### Components
Calculator ---
This is the main component that contains the form for inputting the dog's name and age in human years, and displays the calculated dog age.

##### State Variables

name: Holds the value of the dog's name input.

humanAge: Holds the value of the dog's age in human years input.

humanAgeInt: Holds the parsed integer value of the dog's age in human years after form submission.

submittedName: Holds the submitted value of the dog's name after form submission.

##### Form Submission
The form submission is handled by handleSubmit, which prevents the default form submission behavior, sets the parsed human age and submitted name, and clears the input fields.

### Functions
##### handleSubmit
This function handles the form submission event, parses the human age, sets the submitted name, and clears the input fields.
##### handleHumanAge
This function handles changes in the humanAge input field and updates the state accordingly.
##### dogAge
This function calculates the dog's age based on the human age using the formula 16 * Math.log(humanAgeInt + 31).