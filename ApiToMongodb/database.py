from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.dbref import DBRef

def dbgetdatabase(collection=None):
    try:
        # Cria o cliente com autenticação no MLab
        client = MongoClient(
            "mongodb://Master:asJGa876@ds227119.mlab.com:27119/desafioestagio"
        )
        # Retorna o banco desafioestagio
        db = client.desafioestagio
        if collection and collection == "courses":
            return db.courses
        # Retorna a collection annotation
        if not collection:
            return db.mozillacards
    except:
        print("Error while getting database and collection")


# Recebe um documento e insere no banco de dados
def dbinsert(DocumentoInserir):
    try:
        collection = dbgetdatabase()
        # Insere o documento na collection e retorna o id
        doc_id = collection.insert_one(DocumentoInserir).inserted_id
        print(doc_id)
    except:
        print("erro ao inserir no banco")


# def dbretrieve(a,b):
def dbretrieve(*args, **kwargs):
    try:
        collection = dbgetdatabase()
        scenarios = []
        for card in collection.find():
            card.pop("_id")
            scenarios.append(card)
        return scenarios
    except Exception as e:
        print(e)
        print("erro ao recuperar do banco")

def dbretrieveone():
    try:
        collection = dbgetdatabase()
        return collection.find_one()
    except:
        print("erro ao recuperar do banco")
