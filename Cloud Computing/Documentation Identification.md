# Identification Feature

## Introduction

This section provides documentation for the Identification feature of the JanTune app, including details on how to interact with the identification-related APIs.

### Notes:
- Data types: `name` (string/varchar), `oldpeak` (float), `date` (date), `time` (time), and others are integers.
- When using POST, all data fields need to be filled.
- When using PUT/UPDATE, all data fields need to be filled.
- If performing a GET using user ID or identification ID, and the data is empty, then that ID does not exist.

## Post Identification

**POST** `http://localhost:8000/identification`

**Post JSON:**
- userId: 1
- name: "Malika"
- date: "2023-12-18"
- time: "19:55:00"
- age: 30
- sex: 1
- chestPainType: 2
- restingBP: 1
- cholesterol: 123
- fastingBS: 1
- restingECG: 1
- maxHR: 123
- exerciseAngina: 1
- oldpeak: 1.5
- stSlope: 1

**Success:**
- Message: "Create new identification success"
- Data: ...

**Error:**
- Message: "Server Error"
- Server Message: ...

## Get All Identification

**GET** `http://localhost:8000/identification`

**Response Success:**
- Message: "Get all identification success"
- Data: ...

**Error:**
- Message: "Server Error"
- Server Message: ...

## Get All Identification by User ID

**GET** `http://localhost:8000/identification/userId`

**Example:**
`http://localhost:8000/identification/1`

**Response Success:**
- Message: "Get all identification by user ID success"
- Data: ...

**Error:**
- Message: "Server Error"
- Server Message: ...

## Get All Identification by User ID and Identification ID

**GET** `http://localhost:8000/identification/userId/IdentificationId`

**Example:**
`http://localhost:8000/identification/1/2`

**Response Success:**
- Message: "Get identification by user ID and identification ID success"
- Data: ...

**Error:**
- Message: "Server Error"
- Server Message: ...

## Put/Update Identification

**PUT** `http://localhost:8000/identification/userId/IdentificationId`

**Example:**
`http://localhost:8000/identification/1/2`

**Put JSON:**
- userId: 1
- name: "fer"
- date: "2023-12-18"
- time: "19:55:00"
- age: 30
- sex: 1
- chestPainType: 2
- restingBP: 1
- cholesterol: 123
- fastingBS: 1
- restingECG: 1
- maxHR: 123
- exerciseAngina: 1
- oldpeak: 1.5
- stSlope: 1

**Success:**
- Message: "Update identification success"
- Data: ...

**Error:**
- Message: "Server Error"
- Server Message: ...

## Delete Identification

**DELETE** `http://localhost:8000/identification/userId/IdentificationId`

**Example:**
`http://localhost:8000/identification/1/2`

**Response Success:**
- Message: "Delete identification success"
- Data: null

**Error:**
- Message: "Server Error"
- Server Message: ...
