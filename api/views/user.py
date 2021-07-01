from flask import Blueprint, request, jsonify, make_response
from database.db import mongo

# create the blueprint to be registered in app.py
user = Blueprint("user", __name__)


@user.route("/user", methods=["POST"])
def create_user():

    user = {"name": "John Smith", "age": 48, "address": "123 Bond Street"}

    post = mongo.db.users.insert_one(user)
    if post:
        return make_response(str(post.inserted_id), 201)
    else:
        return make_response("An error occurred when adding the new plan", 500)


@user.route("/user", methods=["GET"])
def get_all_users():

    user_list = mongo.db.users.find()

    data_to_return = []
    for user in user_list:
        data_to_return.append(
            {
                "id": str(user.get("_id")),
                "name": user.get("name"),
                "age": user.get("age"),
                "address": user.get("address"),
            }
        )

    return make_response(jsonify(data_to_return, 200))
