import ventaDAO from '../dao/VentaDAO.js';
import { AppError } from '../utils/appError.js';

class VentaController{
    static async crearVenta(req, res, next){
        try {
            const { total, iva, productosventa} = req.body;

            if(!total || !iva || !productosventa){
                next(new AppError('Los campos total, iva y productos venta son requeridos'), 400);
            }

            const ventaData = { total, iva, productosventa };
            const venta = await ventaDAO.crearVenta(ventaData);
            res.status(201).json(venta);

        } catch (error) {
            next(new AppError('Ocurrio un error al crear la venta'), 500);
        }
    }

    /*
    const venta: Document<unknown, {}, {
    total: number;
    iva: number;
    productosventa: Types.DocumentArray<{
        idProducto: Types.ObjectId;
        descripcion: string;
        precioVenta: number;
        cantidad: number;
        subtotal: number;
    }
    */

    static async agregaProductosAVenta(req, res, next){
        try {
            const { idVenta, productos } = req.body;
            
            if(!idVenta || !productos){
                next(new AppError('Los campos idVenta y productos venta son requeridos'), 400);
            }

            const venta = await ventaDAO.agregaProductosAVenta(idVenta, productos);
            res.status(201).json(venta);

        } catch (error) {
            next(new AppError('Ocurrio un error al agregar producto a la venta'), 500);
        }
    }
}

export default VentaController;