from flask import Flask, jsonify, request
from keras.models import load_model
import numpy as np
import mysql.connector

app = Flask(__name__)

# Load machine learning model
model = load_model("modeljantune.h5", compile=False)
with open("labels.txt", "r") as file:
    labels = file.read().splitlines()

# Configure MySQL connection to express database
db = mysql.connector.connect(
    host="xxxxx",
    user="xxxxx",
    password="xxxxx",
    database="xxxxx"
)
cursor = db.cursor()

def fetch_data_from_mysql(user_id, data_id):
    # Fetch data from express database based on 'userId' and 'dataId'
    query = "SELECT age, sex, chestPainType, restingBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldpeak, stSlope FROM identification WHERE userId = %s AND id = %s"
    cursor.execute(query, (user_id, data_id))
    result = cursor.fetchone()
    return result

def save_prediction_to_db(user_id, data_id, prediction_result):
    # Update the 'result' column in the express database based on 'userId' and 'dataId'
    update_query = "UPDATE identification SET result = %s WHERE userId = %s AND id = %s"
    cursor.execute(update_query, (prediction_result, user_id, data_id))
    db.commit()

@app.route("/")
def index():
    return jsonify({
        "status": {
            "code": 200,
            "message": "Success fetching API!"
        },
        "data": None
    }), 200

@app.route("/predict/<int:user_id>/<int:data_id>", methods=['GET'])
def predict(user_id, data_id):
    try:
        # Fetch data from MySQL based on 'userId' and 'dataId'
        result = fetch_data_from_mysql(user_id, data_id)

        if result is not None:
            # Extract relevant features from the database result
            age = result[0]
            sex = result[1]
            chestPainType = result[2]
            restingBP = result[3]
            cholesterol = result[4]
            fastingBS = result[5]
            restingECG = result[6]
            maxHR = result[7]
            exerciseAngina = result[8]
            oldpeak = result[9]
            stSlope = result[10]

            # Format input for prediction
            user_data = np.array([[age, sex, chestPainType, restingBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldpeak, stSlope]])

            # Make prediction with the loaded model
            prediction = model.predict(user_data)
            class_label = int(np.round(prediction[0]))
            class_name = labels[class_label]
            class_name = class_name[2:]

            # Save prediction result to the database
            save_prediction_to_db(user_id, data_id, class_name)

            return jsonify({
                "status": {
                    "code": 200,
                    "message": "Prediction successful!",
                },
                "data": {
                    "result": class_name
                }
            }), 200
        else:
            return jsonify({
                "status": {
                    "code": 404,
                    "message": "User not found!"
                },
                "data": None
            }), 404

    except Exception as e:
        return jsonify({
            "status": {
                "code": 500,
                "message": f"Internal Server Error: {str(e)}"
            },
            "data": None
        }), 500

if __name__ == "__main__":
    app.run(debug=True)
