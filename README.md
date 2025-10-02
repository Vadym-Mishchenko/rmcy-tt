# 📝 Todolist App

A simple Todo app built as a front-end test assignment.  
Supports adding, deleting, validating, marking as done/undone, and persisting tasks in **LocalStorage**.

---

## 🚀 Live Demo

The project is deployed on GitHub Pages and available here:  
👉 [https://Vadym-Mishchenko.github.io/rmcy-tt/](https://Vadym-Mishchenko.github.io/rmcy-tt/)

---

## 🚀 Tech Stack

- **React 18 + TypeScript**
- **Vite** — fast build tool
- **Bootstrap 5** — styling
- **LocalStorage** — client-side persistence
- **Custom hooks** - for state management
- **Framer Motion** — animations

---

## ✨ Features

- Add new tasks via form
- Form validation:
  - Minimum 3 characters
  - No empty input
  - Cannot contain only numbers
- Tasks are stored in LocalStorage (persist after refresh)
- Two sections:
  - **Active** — active tasks
  - **Done** — completed tasks (moved down and greyed out)
- Ability to uncheck and move tasks back to Active
- Delete tasks
- Smooth animations:
  - Task enter/exit transitions
  - Hover/tap effects on buttons

---

## ▶️ How to run project

1. Install dependency:

```bash
    npm install
```

2. Run project in dev:

```bash
    npm run dev
```
