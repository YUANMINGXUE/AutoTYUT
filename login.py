import time
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
import os


def login(username, password):
    url = 'https://tyutgs.wjx.cn/user/loginForm.aspx?user_token=RzCs8KPQb4VEfycFVJ8OM9VfMIonoDn8mvZRKvZASDFp4VcCIv5Gml6SfyIestsKb65WsTOr%2f3MaE1Ok2DHEQFUyW2Ob7XXKOQRU4g7TSxFEpwtYN%2bizadoRdU7%2bJrYW&returnUrl=%2fuser%2fqlist.aspx%3fu%3d%25e6%2589%258b%25e6%259c%25ba%25e7%2594%25a8%25e6%2588%25b7tivliw38j0y8djcff6vstq%26userSystem%3d1%26systemId%3d55677040#1'
    driver = webdriver.Edge()
    option = webdriver.EdgeOptions()
    option.add_experimental_option(name='excludeSwitches', value=['enable-automation'])
    option.add_experimental_option('useAutomationExtension', False)
    option.add_argument(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.53')
    option.add_argument('headless')
    driver = webdriver.Edge(options=option)

    driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument',
                           {'source': 'Object.defineProperty(navigator, "webdriver", {get: () => undefined})'})

    driver.get(url)
    # 模拟登录
    driver.find_element(By.ID, 'register-user-name').send_keys(username)
    driver.find_element(By.ID, 'register-user-password').send_keys(password)
    driver.find_element(By.ID, "btnSubmit").click()
    # 让这家伙睡会  O(∩_∩)O哈哈~  为什么要睡呢，这是为了模拟手动登录，防止被封
    time.sleep(3)
    # 循环点击问卷
    while (len(driver.find_elements(By.PARTIAL_LINK_TEXT, '全体研究生健康状况报告'))):
        driver.find_elements(By.PARTIAL_LINK_TEXT, '全体研究生健康状况报告')[0].click()
        time.sleep(3)
        # driver.find_element(By.PARTIAL_LINK_TEXT, "第N次").click()
        # driver.find_element(By.XPATH,"//*[@id='div1']/div[2]/div[1]/div").click()
        # time,sleep(1)
        # driver.find_element(By.XPATH,"//a[@rel='q2_1']").click()
        driver.find_element(By.XPATH, "//*[@id='div4']/div[2]/label").click()
        # 点击获取地址
        time.sleep(5)
        # driver.find_element(By.XPATH,"//a[@rel='q8_1']").click()
        # time.sleep(1)
        # driver.find_element(By.XPATH,"//a[@rel='q9_1']").click()
        time.sleep(1)
        driver.find_element(By.XPATH, "//*[@id='div16']/div[2]/div/div").click()
        #点击诚信
        time.sleep(1)
        driver.execute_script("ktimes=100")
        driver.execute_script("console.log(ktimes)")
        result = driver.find_element(By.XPATH, "//*[@id='ctlNext']").click()
        # 点击提交
        sleep(1)
        try:
            driver.find_element(By.XPATH,"//*[@id='alert_box']/div[2]/div[2]/button")
        except:
            pass
        # if(len(driver.find_elements(By.PARTIAL_LINK_TEXT, '确认'))):
        #     driver.find_elements(By.PARTIAL_LINK_TEXT, '确认')[0].click()
        #     driver.find_element(By.XPATH, "//*[@id='SM_BTN_1']/div[1]/div[4]").click()

        else:
            driver.find_element(By.XPATH, "//*[@id='alert_box']/div[2]/div[2]/button").click()
            driver.find_element(By.XPATH, "//*[@id='SM_BTN_1']/div[1]/div[4]").click()
        print(result)
        time.sleep(3)
        driver.back()
        # 返回
        driver.refresh()
    driver.close()

