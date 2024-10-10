import json

from flask import Flask, request

app = Flask(__name__)


@app.post('/git-patrol.json')
def patrol():
    """Function to return receive post"""
    with open("offenses.json", "wb") as file:
        file.write(request.data)
    return "An integer that tells the bot how many offenses (0 is to do nothing)"

# https://orange-robot-vxx64jpj9gg2p94x-5000.app.github.dev/git-patrol.json
