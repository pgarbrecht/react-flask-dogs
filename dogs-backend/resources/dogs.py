# this is our dog controller 
import models

#this is similar to router, it creates a controller
# request let's us get data from client's request and send it to the global object. 
# we can use this request data to get the json or form data
from flask import Blueprint, request


#create our blueprint
#first arg is the blueprint name
#second arg is its import_name
dogs = Blueprint('dogs', 'dogs')

@dogs.route('/', methods=['GET'])
def dogs_index():
    return "dogs resource working"

# dog create route
@dogs.route('/', methods=['POST'])
def create_dogs():
    #this is like req.body in express
    payload = request.get_json() 
    print(payload)
    new_dog = models.Dog.create(name=payload['name'], age=payload['age'], breed=payload['breed'])
    print(new_dog)
    return "you hit the create route -- check terminal"