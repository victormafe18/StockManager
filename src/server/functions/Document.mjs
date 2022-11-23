const createDocument = (component, description, stockNumber) => {
    const stockDocument = {componente: component, descripcion: description, cantidad: stockNumber};
    return stockDocument;
}

export default createDocument