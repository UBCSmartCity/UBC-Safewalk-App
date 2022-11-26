To setup the code, do the following to install needed dependencies:
1) ``` cd backend ```
2) First, activate the python virtualenv ``` source backend/bin/activate  ```
3) ``` pip install pipreqs ```
4) ``` pip install -r requirements.txt ```

In the Backend directory, make .env and .envrc file and insert the following code
```
export MONGO_URI = 'mongodb+srv://sonozaki:sonozaki@cluster0.dnwfcvc.mongodb.net/cocktailapi?retryWrites=true&w=majority'
```
To run the code
2) Run the flask code by ``` FLASK_DEBUG=true FLASK_APP=cocktailapi flask run  ```

Backend 
- Support for POST and GET methods between flask and mongoDB

To run the login system:
1) Create a virtual environment and activate 
2) If windows, make sure you are in root and run the following code ```python -m flask run```  
3) If you are using mac: ```FLASK_APP=app.py FLASK_ENV=development flask run```
4) Go to your localhost:5000 to see the website 
5) You can use MongoDBCompass to track the changes made in database (user_login_system) 
