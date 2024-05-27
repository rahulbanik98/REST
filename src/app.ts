import express from "express";

const app = express()

app.get('/', (request, response, next) => {
    response.json({ msg: "welcome to home route" });
})

export default app;