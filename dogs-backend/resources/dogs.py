# this is our dog controller 
import models

#this is similar to router, it creates a controller
from flask import Blueprint

#create our blueprint
#first arg is the blueprint name
#second arg is its import_name
dogs = Blueprint('dogs', 'dogs')

@dogs.route('/')
def dogs_index():
    return "dogs resource working"
    