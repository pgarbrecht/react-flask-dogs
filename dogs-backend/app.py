# this app.py file is like server.js

#class our app will be based on
from flask import Flask, jsonify
#with jsonify we can return json (to render in front end) 

#import dogs blueprint
from resources.dogs import dogs

# import all variables and methods from models.py file
import models

#will allow cross-domain requests
#this app is localhost:8000 for the origin
#our react app for how will be localhost:3000 (different origin)
from flask_cors import CORS
#first arg -- ad cors to blueprint we want it on
#second arg -- which origins are allowed (list with local and deployed front ends)
# third arg -- lets us accept requests with cookies attached (so that we use sessions for auth)
CORS(dogs, origins=['http://localhost:3000'], supports_credentials=True)

# will show error messages
DEBUG=True 

#port to run the app
PORT=8000 

#instantiating Flask class to make an app
app = Flask(__name__) 

#use this blueprint of the app to handle anything related to dogs
app.register_blueprint(dogs, url_prefix='/api/v1/dogs')



#this is like an app.listen -- goes at bottom
if __name__ == '__main__':
    # when we start app, set up db+ tables like in models.py
    models.initialize()
    app.run(debug=DEBUG, port=PORT)