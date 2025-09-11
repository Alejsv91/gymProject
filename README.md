# gymProject

This is a project to practice my abilities with a new Stack (React, Python FastAPI and Postgresql)

Project Structure

GYMPROJECT/
│
├── backend/ # FastAPI (Python)
│ ├── app/ # Código principal del backend
│ ├── tests/ # Pruebas backend
│ ├── requirements.txt
│ └── README.md
│
├── frontend/ # React (JavaScript/TypeScript)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js / next.config.js
│
├── .gitignore
└── README.md

----Install the backend----
Go to backend folder
cd backend

1. Create and activate the virtual env
   python -m venv venv
   source venv/bin/activate # Mac/Linux
   venv\Scripts\activate # Windows

2. Install dependencies
   pip install -r requirements.txt

3. Configure database
   DATABASE_URL=postgresql://user:password@localhost:5432/gym_db

4. Upload the server
   uvicorn app.main:app --reload

----Configure FrontEnd----
Go to Front end folder

Install dependencies
npm install

Start the server
npm run dev

----Test----
Backend:

- pytest
  Frontend:
- npm test

confluence
https://alejsv91.atlassian.net/jira/software/projects/SCRUM/boards/1
