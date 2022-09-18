import json
import Log
from loginThread import loginThread

if __name__ == '__main__':
    Log.logStart()
    with open('config.json', 'r') as f:
        config = json.load(f)

    for i in config["users"]:
        # login(i[0], i[1], )
        loginThread(i["userid"], i["password"], url=config["URL"], headless=config["headless"]).start()

    Log.logFinish()

