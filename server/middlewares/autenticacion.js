const jwt = require('jsonwebtoken');

// ===============
// Verificar Token
// ===============
let verificarToken = (req, res, next) => {
    let token = req.get('token'); // Authorization

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
};

// ===============
// Verificar admin role
// ===============
let verificarAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'invalid access token'
            }
        });
    }
};

module.exports = {
    verificarToken,
    verificarAdminRole
};