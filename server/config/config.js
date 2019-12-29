// =======================
// Puerto
// =======================
process.env.Port = process.env.Port || 3000;
// =======================
// Entorno
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// =======================
// Base de datos
// =======================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    // urlDB = 'mongodb://localhost:27017/cafe';
    urlDB = 'mongodb+srv://admin:UI7LF8uRyMATNSe5@cluster0-pcg4w.mongodb.net/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
// =======================
// Vencimiento del token
// =======================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30; //30 días
// =======================
// SEED de autenticación
// =======================
process.env.SEED = process.env.SEED || 'secret';
// =======================
// Google client ID
// =======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '977249051755-nbbp8at63k0mnklu7vve24vftqdggngk.apps.googleusercontent.com';