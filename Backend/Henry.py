from flask import Flask, render_template, request, url_for, redirect, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.safewalk
collection = db.safewalk



@app.route('/', methods=('GET', 'POST'))
def index():
    return render_template('index.html')

@app.route('/getIP', methods=['GET'])
def getIPOfUser():
    print("TEST!!")
    return render_template('index.html')