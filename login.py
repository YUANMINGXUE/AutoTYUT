import time
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
import Log


def login(username, password, url, headless):
    Log.logLogin(username)
    print("正在为" + username + "打卡")


    # url = 'https://tyutgs.wjx.cn/user/loginForm.aspx?user_token=RzCs8KPQb4VEfycFVJ8OM9VfMIonoDn8mvZRKvZASDFp4VcCIv5Gml6SfyIestsKb65WsTOr%2f3MaE1Ok2DHEQFUyW2Ob7XXKOQRU4g7TSxFEpwtYN%2bizadoRdU7%2bJrYW&returnUrl=%2fuser%2fqlist.aspx%3fu%3d%25e6%2589%258b%25e6%259c%25ba%25e7%2594%25a8%25e6%2588%25b7tivliw38j0y8djcff6vstq%26userSystem%3d1%26systemId%3d55677040#1'
    # 也可以使用别的WebDriver，例如Chrome,FireFox等
    option = webdriver.EdgeOptions()
    option.add_experimental_option(name='excludeSwitches', value=['enable-automation'])
    option.add_experimental_option('useAutomationExtension', False)
    # option.add_argument(
    #     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.53')

    if headless:
        option.add_argument('headless')

    driver = webdriver.Edge(options=option, executable_path='msedgedriver.exe')

    driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument',
                           {'source': 'Object.defineProperty(navigator, "webdriver", {get: () => undefined})'})

    driver.get(url)
    # 登录
    driver.find_element(By.ID, 'register-user-name').send_keys(username)
    driver.find_element(By.ID, 'register-user-password').send_keys(password)
    driver.find_element(By.ID, "btnSubmit").click()
    # 让这家伙睡会  O(∩_∩)O哈哈~  为什么要睡呢，这是为了模拟手动登录，防止被封
    time.sleep(3)

    wins = driver.window_handles

    handle = driver.current_window_handle
    driver.maximize_window()
    # 循环点击问卷
    while (len(driver.find_elements(By.PARTIAL_LINK_TEXT, '全体研究生健康状况报告'))):
        # 切换窗口
        driver.switch_to.window(handle)
        driver.maximize_window()
        time.sleep(1.25)
        # 选择上午/下午
        driver.find_elements(By.PARTIAL_LINK_TEXT, '全体研究生健康状况报告')[0].click()
        time.sleep(3)

        # 点击获取地址
        driver.find_element(By.XPATH, "//*[@id='div4']/div[2]/label").click()
        time.sleep(6)  # 等待定位，等久一点

        # 滚动到底部
        # driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
        # time.sleep(0.75)
        # 勾选承诺真实
        # driver.find_element(By.XPATH, "//*[@id='div16']/div[2]/div/div").click()
        button = driver.find_element(By.XPATH, "//*[@id='div16']/div[2]/div")
        driver.execute_script("$(arguments[0]).click()", button)
        time.sleep(1)
        # 玄学，勿删
        driver.execute_script("ktimes=100")
        driver.execute_script("console.log(ktimes)")
        # 提交
        button = driver.find_element(By.XPATH, "//*[@id='ctlNext']")
        driver.execute_script("$(arguments[0]).click()", button)
        sleep(1)
        # 可能出现需要验证的情况
        try:
            # 确定验证
            driver.find_element(By.XPATH, "//*[@id='alert_box']/div[2]/div[2]/button")
        except:
            # 不需要验证，没事了
            pass
        else:
            # 需要验证
            driver.find_element(By.XPATH, "//*[@id='alert_box']/div[2]/div[2]/button").click()
            sleep(1)
            driver.find_element(By.XPATH, "//*[@id='SM_BTN_1']/div[1]/div[4]").click()
        # print(result)
        time.sleep(3)
        # 返回
        driver.back()
        driver.refresh()
    driver.close()
    print(username + "打卡成功！！！")
    Log.logPerFinish(username)
