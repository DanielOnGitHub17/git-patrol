from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    """Function to return hello world"""
    return "<p>Hello, World!</p>"
