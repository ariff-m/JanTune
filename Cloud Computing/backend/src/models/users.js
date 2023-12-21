const { dbPool } = require('../config/database');

const getAll = () => {
  const SQLQuery = 'SELECT * FROM identification';
  return dbPool.execute(SQLQuery);
}

const getAllIdentification = (userId) => {
  const SQLQuery = 'SELECT * FROM identification WHERE userId=?';
  return dbPool.execute(SQLQuery, [userId]);
}

const getIdentification = (userId, id) => {
  const SQLQuery = 'SELECT * FROM identification WHERE userId=? AND id=?';
  return dbPool.execute(SQLQuery, [userId, id]);
}

const createNewIdentification = (body) => {
  const SQLQuery = `INSERT INTO identification 
    (userId, name, date, time, age, sex, chestPainType, restingBP, cholesterol, fastingBS,
    restingECG, maxHR, exerciseAngina, oldpeak, stSlope) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    body.userId, body.name, body.date, body.time, body.age, body.sex, body.chestPainType,
    body.restingBP, body.cholesterol, body.fastingBS, body.restingECG, body.maxHR,
    body.exerciseAngina, body.oldpeak, body.stSlope
  ];

  return dbPool.execute(SQLQuery, values);
}

const updateIdentification = (body, userId, id) => {
  const SQLQuery = `UPDATE identification 
                    SET userId=?, name=?, date=?, time=?, 
                    age=?, sex=?, chestPainType=?, restingBP=?, 
                    cholesterol=?, fastingBS=?, restingECG=?, 
                    maxHR=?, exerciseAngina=?, oldpeak=?, stSlope=?
                    WHERE userId=? AND id=?`;

  const values = [
    body.userId, body.name, body.date, body.time,
    body.age, body.sex, body.chestPainType, body.restingBP,
    body.cholesterol, body.fastingBS, body.restingECG,
    body.maxHR, body.exerciseAngina, body.oldpeak, body.stSlope,
    userId, id
  ];

  return dbPool.execute(SQLQuery, values);
}

const deleteIdentification = (userId, id) => {
  const SQLQuery = 'DELETE FROM identification WHERE userId=? AND id=?';
  return dbPool.execute(SQLQuery, [userId, id]);
}

module.exports = {
  getAll,
  getAllIdentification,
  getIdentification,
  createNewIdentification,
  updateIdentification,
  deleteIdentification,
}
