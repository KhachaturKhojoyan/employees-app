# Employees App

A simple React application for managing a list of employees — built as a practice project to learn React fundamentals (class components, state, props, controlled inputs, filtering, and searching).

## Features

- **View employees** — see a list of employees with their name and salary
- **Add employees** — add a new employee via a simple form
- **Delete employees** — remove an employee from the list
- **Search** — filter employees by name using the search panel
- **Filter** — quickly filter employees by:
  - All employees
  - Employees marked with a "rise" (star)
  - Employees with salary greater than $1000
- **Toggle status** — mark an employee as having a raise (⭐) or an increase (🍪) with a single click
- **Edit salary inline** — click on the salary field and update it directly in the list
- **Live stats** — see the total number of employees and how many have an increase, via the app info panel

## Tech Stack

- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- Plain CSS for styling
- Font Awesome icons

## Project Structure

```
src/
├── components/
│   ├── app/                  # Root component, holds app state
│   ├── app-info/              # Header with employee/increase counters
│   ├── app-filter/            # Filter buttons (all / rise / salary > 1000)
│   ├── search-panel/          # Search input
│   ├── employees-list/        # Renders the list of employees
│   ├── employees-list-item/   # A single employee row
│   └── employees-add-form/    # Form for adding a new employee
├── index.jsx
└── index.css
```

## Screenshots
<img width="971" height="829" alt="image" src="https://github.com/user-attachments/assets/bf3f5efe-454b-4731-9507-29d648c93ee7" />
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/KhachaturKhojoyan/employees-app.git
cd employees-app
npm install
```

### Running the app

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Running tests

```bash
npm test
```

### Building for production

```bash
npm run build
```

Builds the app into the `build` folder, optimized for production.

## Status

🚧 This is a learning project — my first hands-on experience with React. Feedback and suggestions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
