import datetime

# f = open('log', 'a', encoding='utf8')
# print(f)

print(str(datetime.datetime.now()))


def openFile():
    return open('log', 'a', encoding='utf8')


def closeFile(f):
    f.close()


def logStart():
    f = openFile()
    f.write(str(datetime.datetime.now()) + '\t' + 'starting' + '\n')
    closeFile(f)


def logFinish():
    f = openFile()
    f.write(str(datetime.datetime.now()) + '\t' + 'finished' + '\n')


def logLogin(id):
    f = openFile()
    f.write(str(datetime.datetime.now()) + '\t' + id + '\t' + 'login' + '\n')
    closeFile(f)


def logPerFinish(id):
    f = openFile()
    f.write(str(datetime.datetime.now()) + '\t' + id + '\t' + 'finished' + '\n')
    closeFile(f)

# f.close()
