import bs4
import requests

def shoe_cost(url):
    res = requests.get(url)
    soup = bs4.BeautifulSoup(res.text, "lxml")
    
    cost = soup.select("._1vC4OE")
    
    size = soup.select(".o_gtXB")    

    
    print(cost[0].getText())
    
    
    #Main Description Page of product
    res = requests.get("https://www.flipkart.com/adidas-adiray-m-running-shoes-men/p/itmf7g8fxnxydsuc?pid=SHOF7G8FQHSYNKHZ&lid=LSTSHOF7G8FQHSYNKHZBV5ME8&marketplace=FLIPKART&sattr[]=size&st=size")
    soup = bs4.BeautifulSoup(res.text, "lxml")
    
    discount = soup.select("VGWI6T _1iCvwn _9Z7kX3")
    
    originalPrice = soup.select("_3auQ3N _1POkHg")
    
    numberOfReviews = soup.select("_38sUEc")
    
    deliveryTime = soup.select("_29Zp1s")
    
    rating = soup.select("hGSR34 bqXGTW")
    
    
    print(numberOfReviews[0].getText())
    
    
shoe_cost("https://www.flipkart.com/search?q=adidas&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")