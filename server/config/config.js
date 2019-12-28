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
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://admin:UI7LF8uRyMATNSe5@cluster0-pcg4w.mongodb.net/cafe';
}
process.env.URLDB = urlDB;