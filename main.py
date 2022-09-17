from login import login
import Log

if __name__ == '__main__':
    Log.logStart()
    # 用户列表
    userlist = [
        # ('2021520634', '110018'),
        # ('2021520672', '022519'),
        # ('2021520668', '187810'),
        # ('2021520671', '097315'),
        # ('2021510478', '19121X'),
        ('2021520670', '197095'),
    ]
    for i in userlist:
        login(i[0], i[1], )
    Log.logFinish()