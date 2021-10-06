/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app"; 

const appNode = document.getElementById("app");

const formatPrice = price => {
    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style: "currency",
        currency:"USD"
    }).format(price)
    return newPrice
}

//web api 

// Conectarse con el server 
async function fecthData()  {
    const respuesta = await fetch(`${url}/api/avo`)
    const response = await respuesta.json()
    const items = []
    response.data.forEach((elem) => {
        //img 
        const img = document.createElement("img")
        img.src = `${url}${elem.image}`
        img.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        const title = document.createElement("h2")
        title.textContent = elem.name
        title.className = "text-lg'"
        //price
        const price = document.createElement("div")
        price.textContent = formatPrice(elem.price)
        price.className = 'text-gray-600'

        const priceAndTitle = document.createElement('div')
        priceAndTitle.className = 'text-center md:text-left'
        priceAndTitle.append(title, price)
        
        const container = document.createElement("div")
        container.append(img, priceAndTitle)
        container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
       
        items.push(container)
    }); 
    appNode.append(...items);
}
fecthData(url)