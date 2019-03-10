import bs4
import requests

def shoe_cost(url):
    res = requests.get(url)
    soup = bs4.BeautifulSoup(res.text, "lxml")
    
    cost = soup.select(".a-size-base")
    
    print(cost[2].text)
    
shoe_cost("https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Dshoes&field-keywords=adidas+superstar&sprefix=adidas+super%2Cshoes%2C251&crid=195KSP77AHTHO&rh=n%3A1571283031%2Ck%3Aadidas+superstar")