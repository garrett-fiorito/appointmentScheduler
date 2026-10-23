import express from "express"

const app = express();
const PORT = 3004;
const appointments = []

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/submit-appointment", (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/submit.html`);
})

app.post("/submit-appointment", (req,res) => {
    console.log(req.body); 
    const appointment = req.body; 
    appointment["timestamp"] = new Date();

    appointments.push(appointment); 
    res.sendFile(`${import.meta.dirname}/views/submit.html`);
});

app.get("/admin", (req,res) => {
    res.send(appointments); 
})

app.listen(PORT, () => {
    console.log(`Sever running at http://localhost:${PORT}`);
})