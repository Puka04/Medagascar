import requests
from bs4 import BeautifulSoup

drugName = 'glucovance'

URL = 'https://www.rxlist.com/'+drugName+'-drug.htm'

headers = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'}


def scrape():
    page = requests.get(URL, headers=headers)

    soup = BeautifulSoup(page.content, 'html.parser')

    fpage = soup.find(class_="pgContent")
    find_p = fpage.find_all('p')

    dis1 = ""

    for text in find_p:
        dis1 = dis1+text.get_text()

    res1 = dis1.find('of')
    res2 = dis1.find('.')
    lst = ""

    for i in range(res1+3, res2):
        lst = lst+dis1[i]

    print(lst)

    f = open("./scrape.txt", "a")
    f.write(lst+"\n")
    f.close()


scrape()
