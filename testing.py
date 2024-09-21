"""Json for things"""
import json


actions = {"created"}

def test():
    """For testing"""
    with open("former.json") as file:
        body = json.load(file)
    print(body["action"])
    print(
        body["comment"]["body"]
    )
    print(
        body["comment"]["user"]["login"]
    )

if __name__ == "__main__":
    test()