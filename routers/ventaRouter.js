import express from 'express';
import VentaController from '../controllers/ventaController.js';

const router = express.Router();

router.post('/', VentaController.crearVenta);
router.post('/', VentaController.agregaProductosAVenta);

export default router;