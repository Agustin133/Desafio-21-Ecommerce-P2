const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./application/routes/index');
const PORT = 3000 || process.env.PORT; 

app.use(bodyParser.json());
app.use("/", router);


app.listen(PORT, function() {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
})