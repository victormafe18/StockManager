import { Schema, model } from 'mongoose'

const StockManagerSchema = new Schema({
    componente: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: false,
    },
    cantidad: {
        type: Number,
        required: true,
    }
})

const Stock = model("StockData", StockManagerSchema);

export default Stock