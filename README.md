# Feedback Survey

## Description
This is a feedback survey created with React and Redux. The user goes through four pages: how they are feeling today, how well they understand today's material, how supported they feel by staff, and any additional comments (optional). If the user does not make a selection and tries to advance, then an alert dialog will open telling them to select a value. The fifth page allows the user to review their responses, going back to change them if necessary. Upon clicking SUBMIT the user's survey responses are posted to the database and they are brought to a 'thank you' page where they can choose to start the survey over.

There is also a 'hidden' ADMIN page at /admin where the database data is rendered as a table with 'flagged' and 'delete columns. Checking the flagged box changes that row's background color to red, signifying it's importance. Clicking the delete button will open a confirmation dialog. If the admin says YES, then that row will be removed permanently.

## Technologies Used
- ReactJS
- Redux
- Axios
- Node.js
- PostgreSQL

## Future Plans
I'm pretty satisfied with where this app is right now. However, expanding this app so an admin can set up their own survey would greatly increase its usability.

Thank you to the staff and students at Prime Digital Academy for always pushing me to be a better engineer.
If you have questions or concerns, please email awren.nuit@gmail.com