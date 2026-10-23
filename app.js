import express from "express"

const app = express();
const PORT = 3004;
const appointments = []

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${3004}`);
});