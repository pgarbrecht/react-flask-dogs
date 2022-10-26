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

# Index route
@dogs.route('/', methods=['GET'])
def dogs_index():
    all_dogs = models.Dog.select()
    print('result of dog select query')
    print(all_dogs)
    #we need a list of dictionaries
    #use a loop to populate the list
    # convert each model to a dict using model_to_dict
    dog_dicts = []
    for dog in all_dogs:
        dog_dict = model_to_dict(dog)
        dog_dicts.append(dog_dict)

    return jsonify({
        'data': dog_dicts,
        'message': f"Successfully found {len(dog_dicts)} dogs",
        'status': 200
    }), 200

# Create route
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

# Show route
@dogs.route('/<id>', methods=['GET'])
def get_one_dog(id):
    dog = models.Dog.get_by_id(id)
    print(dog)
    return jsonify(
        data= model_to_dict(dog),
        message = 'Success!',
        status = 200
    ), 200

# Update route
@dogs.route('/<id>', methods=['PUT'])
def update_dog(id):
    payload = request.get_json()
    query = models.Dog.update(**payload).where(models.Dog.id == id)
    query.execute()
    return jsonify(
        data = model_to_dict(models.Dog.get_by_id(id)),
        status=200,
        message='resource updated successfully'
    ), 200

# Delete route
@dogs.route('/<id>', methods=['DELETE'])
def delete_dog(id):
    query = models.Dog.delete().where(models.Dog.id == id)
    query.execute()
    return jsonify(
        data ='resource successfully deleted',
        message='resource successfully deleted',
        status=200
    ), 200
