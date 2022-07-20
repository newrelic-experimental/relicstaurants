import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
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
    time.sleep(2)
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
    pay = browser.find_element(By.CSS_SELECTOR, "body > div:nth-child(4) > div > div.ant-drawer-content-wrapper > div > div > div.ant-drawer-body > div > div > div > div > div > div > table > tfoot > tr:nth-child(2) > td:nth-child(2) > button").click()
    time.sleep(2)
    browser.refresh()
    time.sleep(2)