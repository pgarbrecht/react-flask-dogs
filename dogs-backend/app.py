# this app.py file is like server.js

#class our app will be based on
from flask import Flask, jsonify
#with jsonify we can return json (to render in front end) 

#our login manager
from flask_login import LoginManager

#import dogs blueprint
from resources.dogs import dogs

#import user blueprint
from resources.user import user

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

#cors for users
CORS(user, origins=['http://localhost:3000'], supports_credentials=True)

# will show error messages
DEBUG=True 

#port to run the app
PORT=8000 

#invoke our login manager before running app
login_manager = LoginManager()

#instantiating Flask class to make an app
app = Flask(__name__) 

#our secret key and session setup info
app.secret_key = "LJAKLJLKJJLJKLSDJLKJASD" # Need this to encode the session
login_manager.init_app(app) # set up the sessions on the app

@login_manager.user_loader # decorator function, that will load the user object whenever we access the session, we can get the user
# by importing current_user from the flask_login
def load_user(userid):
    try:
        return models.User.get(models.User.id == userid)
    except models.DoesNotExist:
        return None

@app.after_request
def after_request(response):
    #think we need these two response headers to allow edit if logged in
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

#use this blueprint of the app to handle anything related to dogs
app.register_blueprint(dogs, url_prefix='/api/v1/dogs')

#use this blueprint to handle users
app.register_blueprint(user, url_prefix='/api/v1/user')

#this is like an app.listen -- goes at bottom
if __name__ == '__main__':
    # when we start app, set up db+ tables like in models.py
    models.initialize()
    app.run(debug=DEBUG, port=PORT)