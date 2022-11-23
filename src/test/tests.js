import { assert } from "chai";
import createDocument from "../server/functions/Document.mjs";

describe("Check Stock Componente Function: ", () => {
    describe("Check Stock Function: ", () => {
        it("Check the returned value using: assert.equal(value,'value'): ", () => {
            const stockDocument = createDocument("Grafica NVIDIA", "Grafica de NVIDIA 3080", 5);
            assert.equal(stockDocument.componente, "Grafica NVIDIA");
        });
    });
    describe("Check Stock Descripcion Function: ", () => {
        it("Check the returned value using: assert.equal(value,'value'): ", () => {
            const stockDocument = createDocument("Grafica NVIDIA", "Grafica de NVIDIA 3080", 5);
            assert.equal(stockDocument.descripcion, "Grafica de NVIDIA 3080");
        });
    });
    describe("Check Stock Cantidad Function: ", () => {
        it("Check the returned value using: assert.equal(value,'value'): ", () => {
            const stockDocument = createDocument("Grafica NVIDIA", "Grafica de NVIDIA 3080", 5);
            assert.equal(stockDocument.cantidad, 5);
        });
    });
});