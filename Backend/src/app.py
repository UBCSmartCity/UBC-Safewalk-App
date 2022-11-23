"""
To Run:
# For the simple MongoDB tutorial
source ~/desktop/project/venv/bin/activate 
# For the API tutorial
source ~/desktop/project/venvCocktail/bin/activate 
flask run
"""

#"""
#from flask import Flask, render_template, request, url_for, redirect
from flask import Flask
from pymongo import MongoClient
from bson.objectid import ObjectId

# Added lib for API implementation
import datetime   # This will be needed later
import os
from dotenv import load_dotenv
# Import the `pprint` function to print nested data:
from pprint import pprint
import bson # <- Put this line near the start of the file if you prefer.

#Certificate needed to access the MongoDB
import certifi

from pymongo.collection import Collection, ReturnDocument

import flask
from flask import Flask, request, url_for, jsonify
from flask_pymongo import PyMongo
from pymongo.errors import DuplicateKeyError

from .model import Cocktail
from .objectid import PydanticObjectId



# Configure Flask & Flask-PyMongo:
app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
#app.config["MONGO_URI"] = MONGODB_URI
#app.config["MONGO_URI"] = "mongodb+srv://sonozaki:sonozaki@cluster0.dnwfcvc.mongodb.net/?retryWrites=true&w=majority"
#pprint(app.config)
#pprint(os.getenv("MONGO_URI"))
pymongo = PyMongo(app, None, 1, tlsCAFile=certifi.where())

# Get a reference to the recipes collection.
# Uses a type-hint, so that your IDE knows what's happening!

#print(pymongo.cx)
recipes: Collection = pymongo.cx['test'].recipes # Used to be : pymongo.db.recipes
print(recipes)


@app.errorhandler(404)
def resource_not_found(e):
    """
    An error-handler to ensure that 404 errors are returned as JSON.
    """
    return jsonify(error=str(e)), 404


@app.errorhandler(DuplicateKeyError)
def resource_not_found(e):
    """
    An error-handler to ensure that MongoDB duplicate key errors are returned as JSON.
    """
    return jsonify(error=f"Duplicate key error."), 400


@app.route("/cocktails/")
def list_cocktails():
    """
    GET a list of cocktail recipes.

    The results are paginated using the `page` parameter.
    """

    page = int(request.args.get("page", 1))
    per_page = 10  # A const value.

    # For pagination, it's necessary to sort by name,
    # then skip the number of docs that earlier pages would have displayed,
    # and then to limit to the fixed page size, ``per_page``.
    cursor = recipes.find().sort("name").skip(per_page * (page - 1)).limit(per_page)

    cocktail_count = recipes.count_documents({})

    links = {
        "self": {"href": url_for(".list_cocktails", page=page, _external=True)},
        "last": {
            "href": url_for(
                ".list_cocktails", page=(cocktail_count // per_page) + 1, _external=True
            )
        },
    }
    # Add a 'prev' link if it's not on the first page:
    if page > 1:
        links["prev"] = {
            "href": url_for(".list_cocktails", page=page - 1, _external=True)
        }
    # Add a 'next' link if it's not on the last page:
    if page - 1 < cocktail_count // per_page:
        links["next"] = {
            "href": url_for(".list_cocktails", page=page + 1, _external=True)
        }

    return {
        "recipes": [Cocktail(**doc).to_json() for doc in cursor],
        "_links": links,
    }





@app.route("/cocktails/", methods=["POST"])
def new_cocktail():
    raw_cocktail = request.get_json()
    raw_cocktail["date_added"] = datetime.utcnow()

    cocktail = Cocktail(**raw_cocktail)
    insert_result = recipes.insert_one(cocktail.to_bson())
    cocktail.id = PydanticObjectId(str(insert_result.inserted_id))
    print(cocktail)

    return cocktail.to_json()


@app.route("/cocktails/<string:slug>", methods=["GET"])
def get_cocktail(slug):
    recipe = recipes.find_one_or_404({"slug": slug})
    return Cocktail(**recipe).to_json()


@app.route("/cocktails/<string:slug>", methods=["PUT"])
def update_cocktail(slug):
    cocktail = Cocktail(**request.get_json())
    cocktail.date_updated = datetime.utcnow()
    updated_doc = recipes.find_one_and_update(
        {"slug": slug},
        {"$set": cocktail.to_bson()},
        return_document=ReturnDocument.AFTER,
    )
    if updated_doc:
        return Cocktail(**updated_doc).to_json()
    else:
        flask.abort(404, "Cocktail not found")


@app.route("/cocktails/<string:slug>", methods=["DELETE"])
def delete_cocktail(slug):
    deleted_cocktail = recipes.find_one_and_delete(
        {"slug": slug},
    )
    if deleted_cocktail:
        return Cocktail(**deleted_cocktail).to_json()
    else:
        flask.abort(404, "Cocktail not found")














"""

app = Flask(__name__)

#client = MongoClient('localhost', 27017)

# REST API implementation
# Load config from a .env file:
load_dotenv()
MONGODB_URI = os.environ['MONGODB_URI']

# Connect to your MongoDB cluster:
client = MongoClient(MONGODB_URI, tlsCAFile=certifi.where())
#client = MongoClient("mongodb+srv://sonozaki:sonozaki@cluster0.dnwfcvc.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

# List all the databases in the cluster:
for db_info in client.list_database_names():
   print(db_info)

"""



"""

# Get a reference to the 'sample_mflix' database:
db = client['sample_mflix']

# List all the collections in 'sample_mflix':
collections = db.list_collection_names()
# for collection in collections:
#   print(collection)

# Get a reference to the 'movies' collection:
movies = db['movies']

# Get the document with the title 'Blacksmith Scene':
pprint(movies.find_one({'title': 'Blacksmith Scene'}))

# Insert a document for the movie 'Parasite':
insert_result = movies.insert_one({
      "title": "Parasite",
      "year": 2020,
      "plot": "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. "
      "But their easy life gets complicated when their deception is threatened with exposure.",
      #"released": datetime(2020, 2, 7, 0, 0, 0),
   })

# Save the inserted_id of the document you just created:
parasite_id = insert_result.inserted_id
print("_id of inserted document: {parasite_id}".format(parasite_id=parasite_id))

# Look up the document you just created in the collection:
print(movies.find_one({'_id': bson.ObjectId(parasite_id)}))

# Update the document with the correct year:
update_result = movies.update_one({ '_id': parasite_id }, {
   '$set': {"year": 2019}
})

# Print out the updated record to make sure it's correct:
pprint(movies.find_one({'_id': ObjectId(parasite_id)}))

# Update *all* the Parasite movie docs to the correct year:
update_result = movies.update_many({"title": "Parasite"}, {"$set": {"year": 2019}})

"""






"""
db = client.flask_db
todos = db.todos

@app.route('/', methods=('GET', 'POST'))
def index():
    if request.method=='POST':
        content = request.form['content']
        degree = request.form['degree']
        todos.insert_one({'content': content, 'degree': degree})
        return redirect(url_for('index'))

    all_todos = todos.find()
    return render_template('index.html', todos=all_todos)
    
@app.post('/<id>/delete/')
def delete(id):
    todos.delete_one({"_id": ObjectId(id)})
    return redirect(url_for('index'))
"""




#"""
if __name__ == '__main__':
    app.run(debug=True)

#"""

