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
