const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

let goods = [
  {
    product_name: "Shirt",
    product_description: "Blue color, 100% cotton",
    product_price: 50,
    product_image: "https://m.media-amazon.com/images/I/415N3L8jVvL._AC_SX522_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "men",
  },
  {
    product_name: "Blouse",
    product_description: "Leather details, black color",
    product_price: 60,
    product_image: "https://m.media-amazon.com/images/I/812bXp6SVQL._AC_SY500_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "women",
  },
  {
    product_name: "Trousers",
    product_description: "Brown color, side pocket",
    product_price: 75,
    product_image: "https://m.media-amazon.com/images/I/71TOtMq54ML._AC_SY500_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "men",
  },
  {
    product_name: "Skirt",
    product_description: "Black color, mini",
    product_price: 40,
    product_image: "https://m.media-amazon.com/images/I/61BpLiZkznL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "women",
  },
  {
    product_name: "Towel",
    product_description: "Platinium color, leather",
    product_price: 20,
    product_image: "https://m.media-amazon.com/images/I/91SCeMhT5eL._AC_SX522_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "men",
  },
  {
    product_name: "Handbag",
    product_description: "Portable, leather",
    product_price: 90,
    product_image: "https://m.media-amazon.com/images/I/613WZZ7epVL._AC_SY500_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "women",
  },
  {
    product_name: "Boots",
    product_description: "For winter, waterproof",
    product_price: 120,
    product_image: "https://m.media-amazon.com/images/I/81SL0T6GIbL._AC_SX500_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "men",
  },
  {
    product_name: "Shoes",
    product_description: "High heels, black color",
    product_price: 85,
    product_image: "https://m.media-amazon.com/images/I/51NBQKtlncL._AC_SY500_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "women",
  },
  {
    product_name: "Hat",
    product_description: "Black color, leather",
    product_price: 45,
    product_image: "https://m.media-amazon.com/images/I/815shP7zzWL._AC_SX679_.jpg",
    store_name: "Fashion World",
    store_address: "Baku city, Nizami street 5",
    gender: "men",
  },
  {
    product_name: "Trousers",
    product_description: "Blue color, cashmere, for women",
    product_price: 70,
    product_image: "https://m.media-amazon.com/images/I/610pqQA0BmL._AC_SY500_.jpg",
    store_name: "Elegant Fashion",
    store_address: "Baku city, 28 May street 12",
    gender: "women",
  },
  {
    product_name: "Coat",
    product_description: "Suede leather, black color",
    product_price: 250,
    product_image: "https://m.media-amazon.com/images/I/91J3gbUq3YL._AC_SY500_.jpg",
    store_name: "Elegant Fashion",
    store_address: "Baku city, 28 May street 12",
    gender: "men",
  },
  {
    product_name: "Jacket",
    product_description: "Long, windy",
    product_price: 200,
    product_image: "https://m.media-amazon.com/images/I/61EM-URDU7L._AC_SX466_.jpg",
    store_name: "Elegant Fashion",
    store_address: "Baku city, 28 May street 12",
    gender: "women",
  },
  {
    product_name: "Belt",
    product_description: "Leather, metal buckle",
    product_price: 40,
    product_image: "https://m.media-amazon.com/images/I/81kFP1nIHWL._AC_SX569_.jpg",
    store_name: "Elegant Fashion",
    store_address: "Baku city, 28 May street 12",
    gender: "men",
  },
  {
    product_name: "Brooch",
    product_description: "Golden, set",
    product_price: 220,
    product_image: "https://m.media-amazon.com/images/I/71Fw4a7UNBL._AC_SY500_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "women",
  },
  {
    product_name: "Scarf",
    product_description: "Hazel color, long",
    product_price: 35,
    product_image: "https://m.media-amazon.com/images/I/71pjJWGRwQL._AC_SY741_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "men",
  },
  {
    product_name: "Headband",
    product_description: "Metal details, elastic",
    product_price: 50,
    product_image: "https://m.media-amazon.com/images/I/71w5IHGf3HL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "women",
  },
  {
    product_name: "Suit",
    product_description: "Two-piece, black color",
    product_price: 320,
    product_image: "https://m.media-amazon.com/images/I/51a5AVJ2yIL._AC_SX679_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "men",
  },
  {
    product_name: "Jumpsuit",
    product_description: "For summer, light color",
    product_price: 150,
    product_image: "https://m.media-amazon.com/images/I/71aHsVowu0L._AC_SY500_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "women",
  },
  {
    product_name: "Sweater",
    product_description: "Plain color, woolen",
    product_price: 70,
    product_image: "https://m.media-amazon.com/images/I/91BYYtoeDpL._AC_SY500_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "men",
  },
  {
    product_name: "Low Socks",
    product_description: "Elegant, for summer",
    product_price: 15,
    product_image: "https://m.media-amazon.com/images/I/91avLADgrTL._AC_SX679_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "women",
  },
  {
    product_name: "Sports Uniform",
    product_description: "Spandex, for sports",
    product_price: 55,
    product_image: "https://m.media-amazon.com/images/I/712IvfkdlQL._AC_SX522_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "men",
  },
  {
    product_name: "T-shirt",
    product_description: "T-Shirt, Classic Crewneck Women's Tee, Plus Size Available",
    product_price: 45,
    product_image: "https://m.media-amazon.com/images/I/71lSMYXAhtL._AC_SX522_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "women",
  },
  {
    product_name: "Bag",
    product_description: "Designer, main compartment",
    product_price: 100,
    product_image: "https://m.media-amazon.com/images/I/814tG7vGlwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "men",
  },
  {
    product_name: "Perfume",
    product_description: "Rose scent, long-lasting",
    product_price: 80,
    product_image: "https://m.media-amazon.com/images/I/71aexvDrUaL._SX425_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "women",
  },
  {
    product_name: "Watch",
    product_description: "Patterned, multicolored",
    product_price: 40,
    product_image: "https://m.media-amazon.com/images/I/71RRI0WgfKL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    store_name: "Aliyev Fashion Center",
    store_address: "Baku city, Azadliq avenue 89",
    gender: "men",
  },
  {
    product_name: "Watch",
    product_description: "women watch,two tone",
    product_price: 65,
    product_image: "https://m.media-amazon.com/images/I/71ARVLzvPWL._AC_SY741_.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    gender: "women",
  },
  {
    product_name: "Sweatshirt",
    product_description: "Champion Men's Hoodie, Powerblend, Fleece Comfortable Hoodie, Sweatshirt for Men",
    product_price: 65,
    product_image: "https://m.media-amazon.com/images/I/81aGn3hP4oL._AC_SX522_.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    gender: "men",
  },
  {
    product_name: "Sunglasses",
    product_description: "New Wayfarer Mirrored Sunglasses",
    product_price: 70,
    product_image: "https://m.media-amazon.com/images/I/51CYFO-CiJL._AC_SX679_.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    gender: "women",
  },
  {
    product_name: "Beanie",
    product_description: "Levi's All Season Comfy Leather Logo Patch Cuffed Hero Beanie",
    product_price: 65,
    product_image: "https://m.media-amazon.com/images/I/815JLR9JH7L._AC_SX425_.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    gender: "men",
  },
  {
    product_name: "Shirt",
    product_description: "Legendary Whitetails Women's Cottage Escape Flannel Shirt",
    product_price: 100,
    product_image: "https://m.media-amazon.com/images/I/81bX5sLjTAS._AC_SX425_.jpg",
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    gender: "women",
  },
];



let myBag = [];
let orders = [];

let i = 1;
goods = goods.map((item) => {
  let obj = { ...item, id: i++ };
  return obj;
});

let backup = [...goods]

const refillGoods = () => {
  goods = [...backup];
};

const restoreProducts = () => {
  setTimeout(() => {
    refillGoods();
    console.log("Products restored.");
  }, 5 * 60 * 1000); // 5 minutes in milliseconds
};

app.get("/goods", (req, res) => {
  res.json(goods);
});

app.get("/my-bag", (req, res) => {
  res.json(myBag);
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/add-mybag", (req, res) => {
  let obj = req.body;
  let existingProduct = myBag.find(item => item.product_name === obj.product_name);

  if (existingProduct) {
    existingProduct.count += 1;
    res.send(`Element with ${obj.product_name} was added to bag`);
  } else {
    obj.count = 1;
    myBag.push(obj);
    res.send(`Element with ${obj.product_name} was added to bag`);
  }
});


app.post("/add-orders", (req, res) => {
  let obj = req.body;
  orders.push(obj);
  res.send(`Orders of ${obj.firstName} ${obj.lastName} was added orders`);
});

app.delete("/delete-mybag/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let name = myBag.find((item) => id === item.id).product_name;
  myBag = myBag.filter((item) => id !== item.id);
  res.send(`Element with ${name} was deleted from bag`);
});

app.delete("/delete-all-mybag", (req, res) => {
  myBag = [];
  res.json(myBag);
});

app.put("/update-order-count/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { count } = req.body;

  const productToUpdate = myBag.find((item) => id === item.id);

  if (productToUpdate) {
    productToUpdate.count = count;
    res.send(`Count for ${productToUpdate.product_name} changed to ${count}`);
  } else {
    res.status(404).send("Product not found");
  }
});

app.delete("/delete-admin/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let name = goods.find((item) => id === item.id).product_name;
  goods = goods.filter((item) => id !== item.id);
  res.send(`Element ${name} was deleted from goods`);
  restoreProducts();
});

app.post("/add-admin", (req, res) => {
  let obj = req.body;
  goods.push({ ...obj, id: i++ });
  res.send(`Element with ${obj.product_name} was added to goods`);
  restoreProducts();
});

app.put("/change-admin/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = goods.findIndex((item) => id === item.id);
  goods[index] = req.body;
  res.send(`Element ${req.body.product_name} was changed`);
  restoreProducts();
});

app.get("/search-goods/:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  let filteredArray = goods.filter((item) => {
    const regex = new RegExp(searchValue, "i");
    return regex.test(item.product_name);
  });
  res.json(filteredArray);
});

app.listen(HOST, () => {
  console.log(HOST + " OK");
});
