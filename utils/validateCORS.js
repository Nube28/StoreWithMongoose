//los cors validan si una pagina web puede hacer una peticion SOLO FUNCIONA PARA CLIENTE
//si hago una peticion http desde postman pues todo bien!, PERO si es en un navegador 
//traca va a validar por CORS
import cors from 'cors';

//obtener las urls permitidas desde env y los splitea
const allowedOrigins  = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : [];

//configurar nuestro middleware de manejo de cors
const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error('Cors not allowed'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};

export default cors(corsOptions);