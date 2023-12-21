const UsersModel = require('../models/users');

const getAll = async (req, res) => {
    try {
    const [data] = await UsersModel.getAll();

    res.json({
      message: 'Get all identification success',
      data
    })

  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getAllIdentification = async (req, res) => {
  const { userId } = req.params;
  try {
    const [data] = await UsersModel.getAllIdentification(userId);

    res.json({
      message: 'Get all identification by id user success ',
      data
    })

  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getIdentification = async (req, res) => {
  const { userId, id } = req.params;
  try {
    const [data] = await UsersModel.getIdentification(userId, id);

    res.json({
      message: 'Get identification by userId and id identification success',
      data: data
    })

  } catch (error) {
    
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewIdentification = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.userId) {
    return res.status(400).json({
      message: 'Incomplete data',
      data: null,
    })
  }

  try {
    await UsersModel.createNewIdentification(body);
    res.status(201).json({
      message: 'Create new identification succes',
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const updateIdentification = async (req, res) => {
  const { userId, id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateIdentification(body, userId, id);
    res.json({
      message: 'Update identification succes',
      data: {
        id: id,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const deleteIdentification = async (req, res) => {
  const { userId, id } = req.params;
  try {
    await UsersModel.deleteIdentification(userId, id);
    res.json({
      message: 'Delete identification success',
      data: null
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAll,
  getAllIdentification,
  getIdentification,
  createNewIdentification,
  updateIdentification,
  deleteIdentification,
}