

HostelOps

Production Deployment of a Containerized Complaint Management System

Project Overview:

HostelOps is a full-stack complaint management system designed to digitize hostel maintenance workflows.
The system allows students to:
Register & Login
Submit complaints (category + description + priority)
Track complaint status

Administrators can:
View all complaints
Filter complaints by category or status
Update complaint status
This project focuses on production-style DevOps deployment using Docker containerization, Nginx reverse proxy configuration, and secure networking practices.

Features:

Student Module:
Register / Login
Submit complaint
View complaint status

Admin Module:
View all complaints
Filter complaints
Update complaint status

Tech Stack:

Frontend:
React.js
Bootstrap
Axios

Backend:
Node.js
Express.js
JWT Authentication

Database:
MongoDB

DevOps & Deployment:
Docker
Docker Compose
Nginx
Docker Bridge Networking

Architecture Overview:

Client Browser
↓
Port 80 (Public)
↓
Nginx (Reverse Proxy)
↓
Backend Container (Node + Express)
↓
MongoDB Container

Only Port 80 is publicly exposed.
Docker Bridge Networking

Deployment Strategy:

Only Port 80 is publicly exposed
Backend (5000) is internal only
MongoDB (27017) is internal only
Nginx handles all incoming traffic
API routes are securely proxied
Environment variables configured externally
Application is restart-safe

Running the Application:

1.Clone the Repository
git clone <[https://github.com/Suman-2006/HostelDevops]>
cd hostelops
2.Start the Application
docker compose up
3.Access the Application

Open your browser:

[http://localhost]

Project Structure:

hostelops/
├── backend/
├── frontend/
├── nginx/
│   └── default.conf
├── docker-compose.yml
├── README.md
├── hostelops.pdf

Networking & Security:

Only Port 80 exposed publicly
Backend not directly accessible externally
MongoDB not exposed externally
Docker internal bridge network used
JWT-based authentication
Role-based access control

Request Lifecycle Example:

When a student submits a complaint:
Browser sends HTTP request
Nginx receives request via Port 80
Nginx routes /api/* to backend container
Backend validates JWT
Backend processes logic
MongoDB stores or retrieves data
Response returns through Nginx
UI updates accordingly

Architecture Type:

This project follows a Serverful Architecture because:
Infrastructure is manually managed
Docker containers are explicitly configured
Nginx reverse proxy is manually configured
Networking and port exposure are controlled by the developer

Viewing the Project Documentation (PDF):
The final project documentation is included as:
hostelops.pdf

To open it inside VS Code:
1.Open VS Code
2.Go to Extensions
3.Install the extension:
    vscode-pdf (by tomoki1207)
4.After installing, click on hostelops.pdf
It will open directly inside VS Code with proper PDF preview
-Without the extension, VS Code will show raw binary text.

Final Note:

HostelOps demonstrates a production-style full-stack deployment using modern DevOps principles, container orchestration, secure reverse proxy configuration, and structured networking practices.
