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

### Documentation 

[API documentation for the Identification feature of the JanTune app, click here.](https://github.com/ariff-m/JanTune/blob/main/Cloud%20Computing/Documentation%20Identification.md)

### Additional Notes:
- Documentation for user login has not been created yet.
- To display the results, you also need to run the result identification feature in this directory: [JanTune/Cloud Computing/identification](https://github.com/ariff-m/JanTune/tree/main/Cloud%20Computing/identification)
- Documentation for the result identification feature has not been provided yet. We apologize for this shortfall, but rest assured, we will complete it in the future.

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

#### Step 3: Create the Database

To create the database, follow these steps:

1. Download the [database.sql](https://github.com/ariff-m/JanTune/blob/main/Cloud%20Computing/database.sql) file from the Cloud Computing directory.
2. Execute the SQL commands in the downloaded `database.sql` file to set up the necessary database structure.

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

Open your browser and visit http://localhost:8000 in the terminal. If everything runs smoothly, you have successfully replicated this application.

#### Step 6: Test the API

It is recommended to use Postman for testing. For documentation, refer to the instructions above.
