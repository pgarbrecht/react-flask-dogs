#models will go in this file

#import * means import everything
from peewee import *
#datetime is built into python
import datetime

#used for user login
from flask_login import UserMixin

#we use SQLite database for development as its an easy way to set up a database stored in a file -- portable data. note we will change to postgres for live
DATABASE = SqliteDatabase('dogs.sqlite')

#define our User model
class User(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()

    class Meta:
        database = DATABASE

#define our Dog model
class Dog(Model):
    name = CharField() #string
    age = IntegerField() #integer
    breed = CharField() #string
    created_at = DateTimeField(default=datetime.datetime.now) #timestamp

    #special constructor that gives our model or class special instructions on how to connect to a database and where to store its data
    class Meta:
        database = DATABASE #use the db definied above as our database

# define a method that will get called when app starts. Will connect to app.py
def initialize():
    DATABASE.connect()

    # need to explicitly create tables based on our schema
    # first arg is list of tables to create
    # second arg is safe=True, which only creates tables if they don't already exist
    DATABASE.create_tables([User, Dog], safe=True)
    print('Connected to the DB and created tables if they do not already exist')

    #with sql, don't leave db connection open, we don't want to hog space in connection pool
    DATABASE.close()
