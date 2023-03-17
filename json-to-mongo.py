
import json
from pymongo import MongoClient
 
 
# Making Connection
myclient = MongoClient("mongodb+srv://SSM-MERN:geM4jnk4gKTpx7v@atlascluster.t5lgcnm.mongodb.net/?retryWrites=true&w=majority")
  
# database
db = myclient["ecommerce"]
  
# Created or Switched to collection
# names: GeeksForGeeks
Collection = db["products"]
 
# Loading or Opening the json file
with open('users.json') as file:
    file_data = json.load(file)
     
# Inserting the loaded data in the Collection
# if JSON contains data more than one entry
# insert_many is used else insert_one is used
if isinstance(file_data, list):
    Collection.insert_many(file_data) 
""" else:
    Collection.insert_one(file_data) """