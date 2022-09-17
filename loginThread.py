import threading
from login import login


class loginThread(threading.Thread):
    def __init__(self, username, pwd):
        threading.Thread.__init__(self)
        self.username = username
        self.pwd = pwd

    def run(self) -> None:
        login(self.username, self.pwd)
