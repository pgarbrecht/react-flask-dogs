# this is our dog controller 
import models

#this is similar to router, it creates a controller
# request let's us get data from client's request and send it to the global object. 
# we can use this request data to get the json or form data
from flask import Blueprint, request, jsonify

# additional tools from peewee
from playhouse.shortcuts import model_to_dict

#create our blueprint
#first arg is the blueprint name
#second arg is its import_name
dogs = Blueprint('dogs', 'dogs')

@dogs.route('/', methods=['GET'])
def dogs_index():
    all_dogs = models.Dog.select()
    print('result of dog select query')
    print(all_dogs)
    return "check your terminal"

# dog create route
@dogs.route('/', methods=['POST'])
def create_dogs():
    #this is like req.body in express
    payload = request.get_json() 
    print(payload)
    new_dog = models.Dog.create(name=payload['name'], age=payload['age'], breed=payload['breed'])
    print(new_dog) #prints the id -- check sqlite3 to see the data
    #this can be useful to get better info
    print(new_dog.__dict__)
    #this shows everything that comes with model class -- all methods and attributes
    print(dir(new_dog))

    #you cant just jsonify new_dog, because it's not a dictionary, instead we convert model to dict
    dog_dict = model_to_dict(new_dog)

    return jsonify(
        data=dog_dict,
        message='Successfully created dog!',
        status=201
    ), 201