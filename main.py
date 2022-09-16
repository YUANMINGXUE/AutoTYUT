from login import login

if __name__ == '__main__':
    # 用户列表
    userlist = [
        # ('学号', '密码'),
        # ('学号', '密码'),
        # ('学号', '密码'),

    ]
    for i in userlist:
        login(i[0], i[1], )
