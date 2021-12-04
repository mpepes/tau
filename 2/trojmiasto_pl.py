from selenium import webdriver
import logging
from selenium.webdriver.support.select import Select

logger = logging.getLogger('trojmiasto')
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

driver = webdriver.Chrome(executable_path=r'C:\Users\user\Downloads\chromedriver_win32\chromedriver.exe')

logger.info('Przechodzę na stronę trojmiasto.pl')
driver.get('https://www.trojmiasto.pl/')
searchInput = driver.find_element_by_id('search_input').send_keys('praca')
searchSubmit = driver.find_element_by_id('search_submit_button')
searchSubmit.click()
driver.find_element_by_class_name('serviceList__item').click()
driver.find_element_by_class_name('employers__searchbar__input').send_keys('jit')
driver.find_element_by_class_name('btn__praca').click()
driver.find_element_by_class_name('emplotersListItemCounter').click()

## logger.warning('Jakieś ostrzeżenie')
## temp = driver.find_element_by_id('login.email')
## temp.send_keys("login")
## logger.error('Jakiś Error')

driver.close()