import { UserModel } from '../models/User.js';

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
  UserModel.getAllUsers() // Asumiendo que getAllUsers está definido en UserModel.js
    .then((results) => {
      console.log('Usuarios obtenidos:', results);
      res.status(200).json(results); // Enviar los resultados como respuesta JSON
    })
    .catch((error) => {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener los usuarios', error: error });
    });
};

const getUser = async (req,res) =>{
  const {id} = req.params;
  const usuarios = await usuarios.findById (id);
  
  if (usuarios){
    return res.status (404).json ({msg:'usuario no encontrado'});
  }
    
}

export {
  getAllUsers,
  getUser
};
