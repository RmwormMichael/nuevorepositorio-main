import { connection } from '../config/db.js';

const UserModel = {
  // Método para obtener todos los usuarios
  getAllUsers: () => {
    const query = 'SELECT * FROM usuarios'; // Consulta SQL para obtener todos los usuarios
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getUser:() =>{
    const query = 'SELECT * FROM usuarios WHERE id_usuarios = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};



export { UserModel };
