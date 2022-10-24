# this app.py file is like server.js

#class our app will be based on
from flask import Flask 

# will show error messages
DEBUG=True 

#port to run the app
PORT=8000 

#instantiating Flask class to make an app
app = Flask(__name__) 



#this is like an app.listen -- goes at bottom
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)