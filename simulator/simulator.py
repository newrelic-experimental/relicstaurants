import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains

browser = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
url = "http://localhost:3000/"

while True:
    browser.get(url)
    time.sleep(1)
    address="432 Wiggly Rd, Mountain View, 94043"
    address_text_field=browser.find_element(By.XPATH, "//input[@placeholder='Enter your address']").send_keys(address)
    time.sleep(1)
    button=browser.find_element(By.CSS_SELECTOR, ".ant-btn-primary").click()
    time.sleep(2)

    restaurant = browser.find_elements(By.CSS_SELECTOR, "div.sc-kgflAQ.gxKQJf")
    random.choice(restaurant).click()
    time.sleep(2)

    menu = browser.find_elements(By.ID, "menuItem")
    orderItem = random.sample(menu,3)
    for o in orderItem:
        Hover = ActionChains(browser).move_to_element(o)
        Hover.click().perform()
        time.sleep(1)

    cart = browser.find_element(By.CLASS_NAME, "ant-badge").click()
    time.sleep(2)
    pay = browser.find_element(By.ID, "pay").click()
    time.sleep(2)

    num = ''
    if random.random() < .5:
        for i in range(16):
            num = num + str(random.randint(0,9))
    else:
        for i in range(15):
            num = num + str(random.randint(0,9))
    
    cardNum = browser.find_element(By.ID, "cardNumber").send_keys(num)
    time.sleep(1)

    cvs = ''
    for i in range(3):
        cvs = cvs + str(random.randint(0,9))
    cardCvc = browser.find_element(By.ID, "csv")
    cardCvc.send_keys(cvs)
    time.sleep(2)

    placeOrder = browser.find_element(By.ID, "submit").click()
    time.sleep(2)
