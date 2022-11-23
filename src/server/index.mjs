import { connect } from 'mongoose';
import express from 'express';
import Stock from './models/Stock.mjs';
import createDocument from './functions/Document.mjs';

const app = express();

app.set('port', 3001);

const connectionString = "mongodb+srv://usuario:usuario@clusterstockmanager.uloqkto.mongodb.net/stockdatas?retryWrites=true&w=majority"

app.get('/', async (req, res) => {
    const newDocument = new Stock(createDocument("Grafica NVIDIA", "Grafica de NVIDIA 3080", 5));

    try {
        await newDocument.save();
        res.send("Stock insertado");
    } catch(error) {
        console.log("Error creando stock: ", error);
    }
})

connect(connectionString).then()
    .then(() => {
        app.listen(app.get('port'), () => {
            console.log('Server is listening on port ' + app.get('port') + `\n http://localhost:${app.get('port')}`);
        });
    })
    .catch(err => {
        console.log(err);
    });