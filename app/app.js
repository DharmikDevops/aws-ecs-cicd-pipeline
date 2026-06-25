const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>AWS ECS CI/CD Pipeline Project</h1>
        <h2>Version 2</h2>
        <h3>Deployment automated using AWS CodePipeline</h3>
    `);
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});
