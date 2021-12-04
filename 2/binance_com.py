from selenium import webdriver
import logging
from selenium.webdriver.support.select import Select
import time

logger = logging.getLogger('binance')
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

driver = webdriver.Edge(executable_path=r'C:\Users\user\Downloads\edgedriver_win64\msedgedriver.exe')

logger.info('Przechodzę na stronę https://www.binance.com/en')
driver.get('https://www.binance.com/en')

driver.find_element_by_class_name("css-1pni31c").click()
driver.find_element_by_xpath("// a[contains(text(), 'Log In')]").click()

driver.find_element_by_name("email").send_keys('xyz')
driver.find_element_by_name("password").send_keys('xyz')

logIn = driver.find_element_by_id("click_login_submit")
logIn.click()
logger.error('bląd logowania')
