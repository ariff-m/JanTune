# <p align="center">JanTune</p>

<p align="center">
  <img width="200" src="https://github.com/ariff-m/JanTune/blob/main/asset/JanTune.png" alt="JanTune">
</p>

## <p align="center">JanTune - Early Detection Heart Disease App.</p>

JanTune is a mobile-based application designed to detect heart diseases. In addition, it offers additional features such as providing recommendations for the nearest hospitals based on the user's location. By leveraging this application, we aim to bridge the gap in healthcare services and bring essential health information to the fingertips of all.

### Our project team members:
|Student ID|Name|Learning Path|University|
|-----|-----|-----|-----|
|A278BSY2273|Muhammad Rafli Aditya. H|Mobile Development|Universitas Negeri Makassar|
|M296BSX0503|Afifa Salsabila|Machine Learning|Universitas Pembangunan Nasional Veteran Jawa Timur|
|M006BSY0706|Yobel Fernando Ilianto Kusuma|Machine Learning|Universitas Brawijaya|
|M006BSY1079|Valentino Delviery Butarbutar|Machine Learning|Universitas Brawijaya|
|C296BSY3545|M. Arif|Cloud Computing|Universitas Pembangunan Nasional Veteran Jawa Timur|
|C006BSY3984|Mario Riva Wisnuaji|Cloud Computing|Universitas Brawijaya|
|A296BSY2451|Masyura Fanni Ramadhan|Mobile Development|Universitas Pembangunan Nasional Veteran Jawa Timur|

### Steps to Replicate

These are the replication steps:

#### Step 1: Clone the repository

```
git clone https://github.com/ariff-m/JanTune.git
cd JanTune
cd "Cloud Computing"
cd backend
```

#### Step 2: Install all the required libraries

```
npm install bcrypt dotenv express jsonwebtoken multer mysql2 nodemon
```

#### Step 3: Create the database using the database.sql file located in the Cloud Computing directory.

#### Step 4: Configure the .env file

- Rename the env.example file to .env

- Edit the content of .env according to your configuration, for example:

```
PORT=8000
DB_HOST=localhost
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=jantunedb
JWT_SECRET=your_secret_key
```

#### Step 5: Run the application

```
npm start
```

Open your browser and visit http://localhost:xxxx in the terminal. If everything runs smoothly, you have successfully replicated this application.
