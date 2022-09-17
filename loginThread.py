import threading
from login import login


class loginThread(threading.Thread):
    def __init__(self, username, pwd, url, headless):
        threading.Thread.__init__(self)
        self.username = username
        self.pwd = pwd
        self.url = url
        self.headless = headless

    def run(self) -> None:
        login(self.username, self.pwd, self.url, self.headless)
