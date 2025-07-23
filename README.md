# 📁 FileTask - Task Assignment and Marking System

Welcome to **FileTask**, a dynamic task management and assignment system built with ❤️ using **React**.  
I created this project with the intention to explore, implement, and showcase practical frontend engineering concepts such as:

- 🔐 Protected Routes  
- 🔁 Login Context  
- 🔄 State-driven Rendering  
- 🚦 Custom Routing Logic  
- 📊 Data-Driven UI  
- ✅ Form Validation  
- 🎯 Proper UI Feedbacks  
- 🧠 UX Optimizations

All using **React’s modern ecosystem**.

---

A powerful **Single Page Application (SPA)** built with **React** that lets **admins** assign tasks to employees and monitor their progress, while **employees** can interact with and update their own assigned tasks.

This is my take on a realistic system that:
- Distinguishes between **Employers and Employees**
- Allows **role-based access**
- Performs **actions on tasks**
- Ensures proper **state and route management**

As the sole creator and developer, I aimed to showcase strong **frontend design**, **routing**, **state management**, **validation**, and **user-based UI rendering** in a creative and structured way.

---
## 📸 Screenshots

<details>
  <summary>📸 Click to view screenshots</summary>
  <br />
  <div style="white-space: nowrap; overflow-x: auto;">
    <img src="./screenshots/Login Form SS.png" alt="Login Form" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Admin DashBoard SS.png" alt="Admin Dashboard" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Add Employee Form SS.png" alt="Add Employee Form" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Edit Form SS.png" alt="Edit Form" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Employee DashBoard SS.png" alt="Employee Dashboard" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Employee Control Panel SS.png" alt="Employee Control Panel" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Employee List SS.png" alt="Employee List" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Employee TaskBoard SS.png" alt="Employee TaskBoard" width="300" style="display: inline-block; margin-right: 10px;" />
    <img src="./screenshots/Task Form SS.png" alt="Task Form" width="300" style="display: inline-block; margin-right: 10px;" />
  </div>
</details>


## 🧠 What Is This Project About?

**FileTask** is a **role-based task assignment system** with two types of users:

- 🧑‍💼 **Admin (Employer)**
- 👷‍♂️ **Employee (User)**

### 👑 Admins can:
- 🔐 Login securely
- ➕ Add new employees
- ✅ Assign tasks to any employee
- 📊 View the history of all tasks assigned to a specific employee
- ✏️ Edit details of existing employees (correct name and change password)

### 👷 Employees can:
- 🔐 Login with personal credentials
- 📋 View all tasks assigned to them
- 🎛️ Accept newly assigned tasks
- ✔️ Mark active tasks as either **Complete** or **Failed**





## 🧪 Want to Explore the App?

🌐 https://filetask.netlify.app/

Play with the app and test every route. Log in either as Admin or Employee:

For demonstration and quick testing, feel free to log in as any of the existing users or the admin to test every feature with ease.



## 🧪 Test Users

### 👤 Employee Users

- 📝 All employees share the same short password just for fast testing. When creating a new employee, Admin can assign stronger passwords (if feeling evil 😈).
- | Email              | Password |
- |--------------------|----------|
- | ravi@saini.com     | 123      |
- | simran@saini.com   | 123      |
- | arjun@saini.com    | 123      |
- | meena@saini.com    | 123      |
- | aman@saini.com     | 123      |
- | tanya@saini.com    | 123      |
- | karan@saini.com    | 123      |
- | pooja@saini.com    | 123      |
- | nikhil@saini.com   | 123      |
- | divya@saini.com    | 123      |
- | ritika@saini.com   | 123      |
- | yash@saini.com     | 123      |

### 👑 Admin

| Email            | Password |
|------------------|----------|
| nitin@saini.com  | 123      |

---

💡 _Want to give a hard time to your employee? Assign them a crazy password while creating a new one._  
**PS:** You must be the **Admin** for that 😉






## 🎯 Core Features

- 🔐 **Common Login UI** for both Admin and Employee roles.
- 🧑‍💼 **Admin Dashboard (Employer)**:
  - ✅ Create new tasks for employees.
  - ➕ Add new employees to the database.
  - 📊 View status/history of assigned tasks per employee.
  - ✏️ Edit details of existing employees (correct name and change password)
- 👷‍♂️ **Employee Dashboard (User)**:
  - 📋 View tasks assigned to them.
  - 🎛️ Accept or mark tasks as completed/failed.
- 🧭 **SPA with Client-side Routing** using React Router v6+.
- 🛡️ **Protected Routes** to restrict access based on login role.
- 🌐 **Context-based Global State** to simulate a central database.
- 🧠 **Data-driven UI**: All components render based on current login context.
- 🧹 **Proper logout handling** and redirection.
- 🧱 **No backend or localStorage used** — everything is purely React-driven for demo purposes.


_______

All UI interactions are driven by data. State and routing are implemented in a way that ensures smooth UX, data security, and role-based restrictions.



🔐 **Login System**

A single login page is shared by both Admins and Employees.

- After successful login, routing logic checks the user role and redirects them to the correct dashboard (Admin or Employee).
- Invalid login attempts are gracefully handled with proper form validation and clear error messages.
- Authenticated sessions are securely persisted using React’s Context API, ensuring protected routes and controlled access throughout the app.



## 🧠 Design Overview

This section outlines the key architectural and UI decisions that shaped the project.
# 🚦 Routes & Navigation (App Route Structure)

> 🚧 Protected = requires authentication  
> 🛡️ Routes are secured using an `AuthRequired` wrapper component to prevent unauthorized access.

---

# 🛣 Public Routes

- `/` → Login page (shared for both admin and employees)

---

# 🧑‍💼 Admin-Only Routes (🔒 Protected)

- `/filetask/admin` → Admin dashboard  
- `/filetask/admin/createtask` → Create task for an existing employee  
- `/filetask/admin/createnewemployee` → Add a new employee  
- `/filetask/admin/employees` → View all employees and their tasks  
- `/filetask/admin/employees/:id` → View task history for a specific employee
- `/filetask/admin/employees/:id/edit` → Edit employee name and password 
---

# 👨‍💻 Employee-Only Routes (🔒 Protected)

- `/filetask/user` → Employee dashboard  
- `/filetask/user/tasks` → View all tasks (past + present) assigned to the employee  
- `/filetask/user/action` → Control panel to accept new tasks or update active ones

⸻



## 🧬 State Management

Instead of using Redux or any external state management libraries, I used **React Context API** to simulate and manage:

- A database of employees and tasks.
- Logged-in user’s credentials and role.
- The login flow that drives UI rendering and access control across routes.



## 🚥 Routing Logic

The app follows a role-based route restriction model:

- All `/filetask/admin/*` routes are **restricted to Admin** users only.
- All `/filetask/user/*` routes are **restricted to Employee** users only.
- If a user tries to access unauthorized routes directly (e.g., via browser URL bar), they are **blocked or redirected** based on their role.
- **Link sharing is supported**: If a valid user logs in and visits a shared route directly, the app correctly renders the view based on their session context.



## ⚠️ Back Button Handling

To simplify session management:

- If a user presses the **browser back button** from any dashboard (Admin or Employee), they are immediately **logged out** and sent back to the login page.
- This decision was made to keep routing and session logic simple during early development.
- 🚧 **Planned enhancement:** Add confirmation modals to prevent accidental logouts via the back button in the future.


## 🤯 Funny (but useful) Details

- **Admin can only add employees from the Saini family** with email domain `@saini.com`.  
  > _Just for fun! 😄 I’m Nitin Saini, and that’s my little watermark on this app._

- **Skeleton image is shown for all employees** by default.  
  > The system supports dynamic image URLs, but I kept it minimal and clean for the MVP.



  ## 🔮 Features I Plan to Add

1. ✅ **Proper email validation** using Regex (not just a domain check).
2. 🧑‍🤝‍🧑 **Support assigning the same task to multiple employees.**
3. 🖼️ **Allow uploading/displaying profile photos** of employees.
4. 🔄 **Ability to revoke/remove tasks** assigned by admin.
5. 🔔 **Notification system**:
   - For employees: new tasks assigned.
   - For admin: task status updates from users.
6. Most importantly make it look good at small devices😭 
    - since i made it as desktop-first app, i need to test and add some responsivity,
        but till then, go with this😬



    ## 🔐 Auth & Logout

- **Login validation** ensures only existing employees or the admin can log in.
- **Logout** clears login state and redirects users to the home page (`/`).
- If users try to **navigate back from their dashboard**, they are automatically logged out to prevent inconsistent or unauthorized states.
- I might refine this UX in future versions using **confirmation popups** instead of abrupt logouts.



## 🏗️ Tech 

- *React*	Core SPA framework
- *React Router v6*	Dynamic and protected routing
- *Context API*	Global state (auth, user data, task data)
- *CSS Modules*	Component-scoped styling
- *HTML5 Forms*	Input restrictions, validation
- *React Icons*	Eye / show-hide toggle on password field




## 💡 Key Features
- Role-Based Login System
- Context-Driven State Management
- Admin Task Assignment Workflow
- User Dashboard with Action Panel
- Protected Routes with session-based access
- Password Toggle Eye Button
- Back Navigation Handling (Auto logout when trying to go back from dashboard)
- Initial Mock Database using Context
- Detailed Form Validation Errors
- User-based Dynamic UI
- Image placeholder support (structure ready to accept employee profile images)



## 🧪 Realistic UX Additions
-	URL sharing support: User can open shared link, log in, and view only permitted data.
-	One login session: Session is shared app-wide using context.
-	Navigation protection: Back button behavior logs out immediately (to be improved in future).
-	Logout button: Clears user session and returns to /.



## 🤝 Final Thoughts

This app was built to demonstrate frontend architecture, logic, and creativity. It reflects practical understanding of:
-	Handling protected routing and role-based flows
-	Working with React Context for global state
-	Creating reusable, scoped UI components
-	Mimicking real-world task assignment workflows

Try it, break it, fix it, and maybe improve it 😉. You can fork this repo and build your version of FileTask.

**Happy Hacking!** 🚀



🙋‍♂️ Built by ***Nitin Saini***

 LinkedIn → www.linkedin.com/in/passenger-1o8


Use freely, but give credit if you love it ❤️