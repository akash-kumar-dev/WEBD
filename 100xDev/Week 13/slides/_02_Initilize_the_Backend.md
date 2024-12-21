Step 2 - Initialize the backend
===============================

Whenever you’re building a project, usually the first thing you should do is initialise the project’s backend.

Create a new folder called `medium`

    mkdir medium
    cd medium

Initialize a `hono` based cloudflare worker app

    npm create hono@latest

Target directory › `backend`

Which template do you want to use? - `cloudflare-workers`

Do you want to install project dependencies? … yes Which package manager do you want to use? › npm (or yarn or bun, doesnt matter)

💡

Reference [https://hono.dev/top](https://hono.dev/top)