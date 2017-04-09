## Running Locally
- `npm install`
- `npm start`

## Architecture

- `src`
  - `index.js` - entry point of the React application
  - `components` - "dumb" components
    - `job-*.component.js`
      - own checkbox for adding/removing query params. They have a function passed to them either `handleChange` or `handleDescending` to call when a checkbox is hit.
    - `list-item.component.js`
      - simple display for a job object that is passed in.
  - `containers`
    - own the business logic for managing parameter states. Pass in functions to component children for when any checkbox changes to manipulate parameter state.
  - `services`
    - own anything related to making API calls including manipulation of data structures into query parameters for `GET`'s
  - `struts`
    - own JSON data (arrays) for injecting into the dumb components to display. Only a limited subset are included. Companies in the real world would be `GET` fetched and displayed instead of retrieving from local JSON.

## Parameter Logic
  State params is an object of which its properties (companies, level, location, category) aside from descending have a value of a js prototype Set ie { 'Entry Level', 'Mid Level' }. They are added/removed to the property of the state params whenever a checkbox is hit with the passed in `handleChange` to the dumb component. The state params are sent to the JobsService which take loop through each property and encode it for the http call.

## Stretch Goals
- Develop pagination component which manages the `page` param. The current state of the application always defaults to `page: 0` whenever a checkbox is changed with no way to scroll through the pages.
