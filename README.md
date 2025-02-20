# Frontend Take Home Challenge

## Getting Started

To run the app locally, run the following commands:

```bash
npm install
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Choices for my solution

The solution is built using Next.js and TypeScript, along with TailwindCSS and ShadCN for the UI. ShadCN is a UI component library that I had previously used in past projects, making it a familiar choice.

I chose Next.js because it offers a great development experience, with easy routing and faster page loading. I had prior experience with ShadCN, and I found it easy to set up and integrate UI components for smaller applications. TailwindCSS was used to efficiently style the UI.

For form validation, I used Zod and React Hook Form. In previous projects, I used Yup for validation but found it somewhat limited. Zod provided a more powerful validation schema with better type safety. React Hook Form is a great library for managing form state, allowing me to efficiently parse data into the results page.

## Any future improvements

If I had more time, I would refine the validation schema, such as implementing validation for the number plate field. This would ensure that users can only enter a combination of numbers and letters following a specific regex pattern.

Lastly, if I had more time, instead of storing the data in local storage, I would store it in a database like MongoDB. This would allow all previous data to be saved and available for future use. Moreover, users would be able to view the stored data on the table page and choose which rows they would like to delete.

## Ambiguous challenges and decisions

For handling data when a user has already submitted a form, I used local storage to store the data, making it easy to access and update using the localStorage. Initially, I had to decide between using cookies or local storage, but I chose local storage because, in this case of client-side rendering, it was easier to access the data. Cookies are mainly used for server-side actions, making them less suitable for this scenario.

Additionally, I was unsure where to store all user data and what specific information to amend from previous submissions. Due to the limited time I had, I opted to store only the current data in local storage. This allows users to see the data they submitted and delete it from the table if needed.
