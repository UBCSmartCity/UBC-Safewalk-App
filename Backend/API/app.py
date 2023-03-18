from flask import Flask, jsonify, request
from pymongo import MongoClient, errors
from bson.objectid import ObjectId
import hashlib

app = Flask(__name__)

# Replace the CONNECTION_STRING and DB_NAME variables with your own values
MONGO_CLOUD = "mongodb+srv://sonozaki:sonozaki@cluster0.dnwfcvc.mongodb.net/?retryWrites=true&w=majority"

CONNECTION_STRING = MONGO_CLOUD
DB_NAME = "smartcity"

# Connect to MongoDB
client = MongoClient(CONNECTION_STRING)
db = client[DB_NAME]

# Define the collection to use for storing GPS data
request_collection = db["request"]
user_collection = db["user"]

@app.route("/", methods=["GET"])
def index():
    return "API for SmartCity app"

"""
This is the code for the user
"""

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    # Use hash function to encode username as _id
    encoded_id = hashlib.sha256(data["username"].encode()).hexdigest()
    user = user_collection.find_one({"_id": encoded_id, "password": data["password"]})
    if user is not None:
        return jsonify({"message": "Login successful."})
    else:
        return jsonify({"message": "Invalid username or password."})
    
@app.route("/user", methods=["POST"])
def add_user():
    data = request.get_json()
    if user_collection.find_one({"username": data["username"]}) is not None:
        return jsonify({"message": "Username already exists."})
    
    # Use a hash function to encode the username as the _id
    encoded_id = hashlib.sha256(data["username"].encode()).hexdigest()
    data["_id"] = encoded_id
    
    result = user_collection.insert_one(data)
    return jsonify({"message": "User added successfully.", "id": encoded_id})
    

@app.route("/user/<username>", methods=["DELETE"])
def delete_user_by_username(username):
    try:
        # Use hash function to encode username as _id
        encoded_id = hashlib.sha256(username.encode()).hexdigest()
        
        result = user_collection.delete_one({"_id": encoded_id})
        if result.deleted_count == 1:
            return jsonify({"message": "User deleted successfully."})
        else:
            return jsonify({"message": "User not found."})
    except errors.InvalidId:
        return jsonify({"message": "Invalid ID format."})
    

@app.route("/user", methods=["GET"])
def get_user():
    cursor = user_collection.find({})
    data = []
    for document in cursor:
        document['_id'] = hashlib.sha256(document['username'].encode()).hexdigest()  # encode username as _id
        data.append(document)
    return jsonify(data)


@app.route("/user/<username>", methods=["GET"])
def get_user_by_username(username):
    try:
        # Use hash function to encode username as _id
        encoded_id = hashlib.sha256(username.encode()).hexdigest()
        
        data = user_collection.find_one({"_id": encoded_id})
        if data is not None:
            return jsonify(data)
        else:
            return jsonify({"message": f"User with username '{username}' not found. Encoded ID: {encoded_id}"})
    except errors.InvalidId:
        return jsonify({"message": "Invalid ID format."})


@app.route("/user/<username>", methods=["PUT"])
def update_user(username):
    try:
        # Use hash function to encode username as _id
        encoded_id = hashlib.sha256(username.encode()).hexdigest()
        
        data = request.get_json()
        result = user_collection.update_one({"_id": encoded_id}, {"$set": data})
        if result.matched_count == 1:
            return jsonify({"message": "User updated successfully."})
        else:
            return jsonify({"message": "User not found."})
    except errors.InvalidId:
        return jsonify({"message": "Invalid ID format."})





"""
This is the code for the gps/map data
"""



@app.route("/gps", methods=["POST"])
def add_gps():
    data = request.get_json()
    result = request_collection.insert_one(data)
    return "GPS data added successfully!" + "\nId = " + str(result.inserted_id)










if __name__ == "__main__":
    #app.run(debug=True, host='206.87.115.246', port=7070)
    app.run(debug=True)




