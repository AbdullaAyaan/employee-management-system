# 🏢 Employee Management System (EMS)

A role-based Employee and Task Management dashboard built with **React**, **Tailwind CSS**, and **Lucide React**. The application supports distinct user experiences for Admins and Employees, featuring real-time task lifecycle tracking, directory management, and persistent client-side state via `localStorage`.

---

## 🚀 Features

### 👑 Admin Portal
* **Real-Time Analytics Dashboard:** Instant metrics cards showing Total, New, Active, Completed, and Failed tasks across the organization.
* **Employee Summary Table:** Comprehensive team breakdown tracking task distributions per employee.
* **Task Assignment Modal:** Assign new tasks with title, due date, assignee, category tag, and detailed descriptions.
* **Task Management Hub:** Filterable task board allowing admins to inspect task cards grouped by individual team members.
* **Team Directory:** Visual team member cards displaying designations, bios, emails, and avatars.
* **Add Employee Workflow:** Modal form to register new employees into the system with role and profile metadata.

### 💼 Employee Portal
* **Personalized Dashboard:** Individual metrics overview showing assigned task workload and statuses.
* **Interactive Task Lifecycle:**
  * **Accept Task:** Move tasks from `New` to `Active`.
  * **Status Resolution:** Mark active tasks as either `Completed` or `Failed`.
  * **Dynamic UI Badges:** Real-time badge updates reflecting task progress.
* **Account Settings:** Self-service profile preview and editor to update bio, avatar URL, and passwords.

---

## 🔑 Demo Credentials

Test the platform using the following accounts:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@company.com` | `123` |
| **Employee** | `john.smith@company.com` | `123` |

*(Note: Adjust the credentials above to match your seeded `localStorage` data if different.)*

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Persistence:** Browser `localStorage`

---

## 🗺️ Roadmap & Architecture Evolution

### ✅ Phase 1: Client-Side MVP (Current Release)
- [x] Role-based dashboard (Admin vs. Employee workflows)
- [x] Task lifecycle management (`New` ➔ `Active` ➔ `Completed` / `Failed`)
- [x] Dynamic metrics aggregation and employee tracking
- [x] Client-side state synchronization via `localStorage`

### ⏳ Phase 2: Full-Stack Integration (In Progress)
- [ ] Dedicated RESTful API using Node.js & Express
- [ ] Persistent database migration (MongoDB / PostgreSQL)
- [ ] JWT-based session security with HTTP-only cookies
- [ ] Cloud storage integration for employee profile media