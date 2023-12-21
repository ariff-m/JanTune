const { dbAuth } = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const upload = require ('../middleware/multer');
const path = require('path');
const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '2h' });
}
const getAllUsers = ((req, res) => {
    dbAuth.query('SELECT name,email,id FROM users', (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

const getUser = ((req, res)=> {
    const userId = req.params.userId;
    dbAuth.query('SELECT name,email,id FROM users WHERE id = ?',userId, (error,result)=>{
        if(error){
            console.log(error);
            res.status(500).send('Internal Server Error');
        }else{
            res.json(result);
        }
    });
});

const userRegister = (async (req, res) => {
    try {
        const existingUser = await getUserByEmail(req.body.email);
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/; 

        if (existingUser) {
            res.status(400).send('Email is already registered');
        } 
        else if(!req.body.name || !req.body.email || !req.body.password){
            res.status(400).send('Plese fill properly');
        }
        else if (!emailRegex.test(req.body.email)) {
            res.status(400).send('Please provide a valid Gmail email address');
        }
        else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                phoneNumber: req.body.phoneNumber,
            };

            dbAuth.query('INSERT INTO users SET ?', newUser, (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('Internal Server Error');
                } else {
                    console.log(result);
                    res.status(201).send('User Created');
                }
            });
        }
    }  catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

async function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
        dbAuth.query('SELECT * FROM users WHERE email = ?', email, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
} 

const login = (async (req, res) => {
    const email = req.body.email;
    dbAuth.query('SELECT * FROM users WHERE email = ?', email, async (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else if (results.length > 0) {
            const user = results[0];
            try {
                if (await bcrypt.compare(req.body.password, user.password)) {
                    // Create token JWT
                    const token = generateToken(user.id);
                    res.json({ token });
                } else {
                    res.status(401).send('Authentication failed');
                }
            } catch (error) {
                console.log(error);
                res.status(500).send('Internal Server Error');
            }
        } else {
            res.status(400).send('User not found');
        }
    });
});

const deleteUser = ((req, res) => {
    const userId = req.params.userId;

    dbAuth.query('DELETE FROM users WHERE id = ?', userId, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else if (result.affectedRows > 0) {
            res.send(`User with ID ${userId} deleted successfully`);
        } else {
            res.status(404).send(`User with ID ${userId} not found`);
        }
    });
});

const updateUser = (async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await getUserById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        const name = req.body.name;
        const phoneNumber = req.body.phoneNumber;

        // Handle image uploadd
        if (req.file) {
            const imagePath = req.file.path;

            const allowedExtensions = ['.jpg', '.png', 'jpeg'];
            const fileExtension = path.extname(req.file.originalname).toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                return res.status(400).send('Invalid file format. Only .jpg, .png, .jpeg files are allowed.');
            }
            dbAuth.query('UPDATE users SET userImage = ? WHERE id = ?', [imagePath, userId], (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('Internal Server Error');
                    return;
                }
            });
        }

        // Handle name update
        if (name) {
            dbAuth.query('UPDATE users SET name = ? WHERE id = ?', [name, userId], (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('Internal Server Error');
                    return;
                }
            });
        }
        // Handle phone number update
        if (phoneNumber) {
            const phoneNumberRegex = /^[0-9\s()-]+$/;
             if (!phoneNumberRegex.test(phoneNumber)) {
                return res.status(400).send('Invalid phone number. Only numeric characters, spaces, hyphens, and parentheses are allowed.');
                }
            dbAuth.query('UPDATE users SET phoneNumber = ? WHERE id = ?', [phoneNumber, userId], (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('Internal Server Error');
                    return;
                }
            });
        }  
        res.send('Profile updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

const deleteImage = (async (req, res) => {
    const userId = req.params.userId;

    // Verifikasi apakah user dengan ID tersebut ada
    const user = await getUserById(userId);

    if (!user) {
        return res.status(404).send('User not found');
    }

    // untuk remove profile user
    dbAuth.query('UPDATE users SET userImage = NULL WHERE id = ?', userId, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Profile image removed');
        }
    });
});

const deletePhone  = (async (req, res) => {
    const userId = req.params.userId;

    // Verifikasi apakah user dengan ID tersebut ada
    const user = await getUserById(userId);

    if (!user) {
        return res.status(404).send('User not found');
    }

    // untuk remove phone_number isinya
    dbAuth.query('UPDATE users SET phoneNumber = NULL WHERE id = ?', userId, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Phone number removed');
        }
    });
});

async function getUserById(userId) {
    return new Promise((resolve, reject) => {
        dbAuth.query('SELECT * FROM users WHERE id = ?', userId, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}


module.exports = {
    getAllUsers,
    getUser,
    userRegister,
    login,
    deleteUser,
    deleteImage,
    updateUser,
    deletePhone,
}