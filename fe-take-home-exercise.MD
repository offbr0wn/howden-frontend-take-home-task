# Frontend Take Home Challenge

## The Challenge

Create a website with two pages. The first page collects data from a form with two questions and upon form submission user is redirected to the second page to view submitted data.

The first page will have a form with two questions (fields) and a submit button. Questions:

1. Field #1.
   - Label: Do you own a car?
   - Field name: `carOwner`
   - User must have the ability to select Yes or No
   - Please use any input type you think is the most appropriate
   - This field is always visible and required
2. Field #2.
   - This field is conditionally displayed based on Field #1 value
   - If Field #1 value is Yes:
     - Label: Enter your car number plate
     - Field name: `numberPlate`
     - Input type is text
     - Assume number plate must be always 6 characters
     - This field is required when Field #1 value is Yes, otherwise it must be stripped from final form data
   - If Field #1 value is No:
     - Label: What car make would you like to own?
     - Field name: `wantedCarMake`
     - Input type is dropdown
     - Assume the list of dropdown options comes from a REST API. Please mock API request to return fake data: `BMW, Mercedes, Honda`
     - This field is required when Field #1 value is No, otherwise it must be stripped from final form data

Place the submit button next to the form. Validation must fire when inputs loose focus and when form is submitted. Error messages (if any) must appear next to corresponding fields. On successfull submit, redirect user to the second page.

Second page must display two elements:

1. Submitted form data in a small table with columns **Field** (field name) and **Value** (selected field value)
2. A button with label "Amend" which returns user to the first page. Form fields must be cleared and returned to their initial state.

Submitted data must be "remembered". In case user closes the website (while on the second page) then returns:

- opening the first page must redirect user to the second page to show previously submitted data
- opening the second page must show previously submitted data

In case user tries to access the second page without completing the form, redirect user to the first page.

Considerations:

- Must be written in React and Typescript
- You may use any libraries, tools, CSS solutions
- You may structure your solution any way you wish
- Please be ready to answer questions and provide arguments for your decisions

## Instructions

An acceptable solution should be easily reachable within several hours. There is no need to spend any longer.

Please put your code in a GitHub repo and share it with us.
Please include this markdown file in your repo.
To protect your GitHub repo from the prying eyes of other candidates we suggest you make your repo private and share it only with **@vv-ade**, **@shelooks16**, **@apostolachealin**.

Please add a README.md to your repo in which you tell us about the choices you made for your solution and why you made them.
Please also tell us if there is anything you would do differently or additionally if you had more time.
The readme need only be a few sentences.

If there is anything unclear or ambiguous about the challenge you should make sensible assumptions and include them in your readme. We will not answer any questions.

We want to see your skills not those of ChatGPT so use of any AI is strictly prohibited and will result in your application being rejected.
Be warned, we have ways of detecting such usage.

Once you have completed the challenge please send a short email with a link to your repo to __adrian.crossley@vastvisibility.co.uk__, __andrii.hulenko@vastvisibility.co.uk__, __alin.apostolache@vastvisibility.co.uk__.
