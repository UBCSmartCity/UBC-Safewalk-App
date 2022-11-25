To setup the code, do the following to install needed dependencies:
1) ``` cd backend ```
2) ``` pip install pipreqs ```
3) ``` pip install -r requirements.txt ```

In the Backend directory, make .env and .envrc file and insert the following code
```
export MONGO_URI = 'mongodb+srv://sonozaki:sonozaki@cluster0.dnwfcvc.mongodb.net/cocktailapi?retryWrites=true&w=majority'
```


Backend 
- Support for POST and GET methods between flask and mongoDB
