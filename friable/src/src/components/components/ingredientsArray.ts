const foodIngredients: string[] = [
"MILK",
"Hummus",
"Beef",
 "GRAPE",
"Salt",
"BEANS",
"Broccoli",
"HOT DOGS",
"BEEF",
"BALL PARK-ANGUS",
'Almonds',
'Nuts', 
'Ricotta-cheese ',
'Kale',
 'Whole eggs',
 'Egg whites',
'Salsa',

'Pickles',
'Peanut butter',
'parmesan Cheese',
'American cheese',
'GRAPEFRUIT',
'Peaches',
'SUNFLOWER SEEDS',
'Bread',
'TURKEY',
'Cheese',
'Carrots',
'Mustard', 
'Figs',
'Kiwi',
'Cantaloupe',
'Nectarines',
'Oranges',
'Strawberries',
'Lettuce',
'cheddar Cheese', 
'cottage Cheese',
'mozzarella Cheese',
'EGG',
'Egg yolks',
'Cheese',
'coconut Oil',
'Turkey ground',
'Chicken',
'pasta Sauce',
'Pears',
'OLIVES',
'OATMEAL',
'Cookies',

'Haddock',
'fish',
'Fish haddock',
'Fish pollock',
'Fish tuna',
'Sugar',
 'Bean',
'Ketchup',
'CANOLA OIL',
'Corn oil',
'VEGETABLE OIL',
'Soybean oil',
'OLIVE OIL', 
'BUTTER',
'FLOURALL PURPOSE',
'RICE FLOUR',
'CORN FLOUR',
'RED ONIONS', 
'YELLOW ONIONS',
'Onions',
'Bananas',
'GARLIC',
'soy Flour',
'PASTRY FLOUR',
'WHITE ONIONS', 
'RED APPLES',
'Apples',
'HONEYCRISP APPLES',
'GRANNY SMITH APPLES',
'GALA APPLES',
'FUJI APPLES', 
'Soy milk',
'Almond milk',
'Oil peanut',
'Oil sunflower',
'Oil safflower',
'Oil olive',
'baby Spinach',
'mature Spinach',
'Tomato',
'Flour',
' whole grain Flour',
'semolina Flour',
'Apple juice',
'Orange juice',
'Grape juice',
'Cranberry juice','Cranberry',
'Grapefruit juice',
'Tomato juice',
'Orange juice',
'Mushroom portabella',
'Mushroom king-oyster',
'Mushroom enoki',
'Mushroom crimini',
'Mushroom maitake',
'Mushroom beech',
'Mushroom pioppini',
'mushrooms portabella',
'mushrooms hon shimiji',
'mushrooms crimini',
'mushrooms maitake',
'mushrooms pioppini',
'mushrooms enoki',
'Oat milk',
'Carrots mature',
'Carrots baby',
'Peppers bell green',
'Peppers bell yellow',
'Peppers bell red',
'Peppers bell orange',
'Buttermilk',
'Yogurt plain', 
'Yogurt Greek',
'feta Cheese',
'almond Flour', 
'oat Flour',
'potato Flour', 
'Peanut butter creamy',
'Sesame butter creamy',
'Almond butter creamy',
'Flaxseed',
'tahini sesameseed butter',
'flaxseed meal',
'Raspberries',
'Blueberries',
'Grapes',
'Applesauce',
'blueberries',
'Cream cheese',
'Cream heavy',
'Cream sour',
'Lettuce iceberg',
'Lettuce romaine',
'pine nuts',
'walnuts',
'pecans',
'Oats rolled',
'Oats old fashioned',
'Pineapple',
'Cherries',
'Beans',
'Potatoes', 
'Sweet potatoes',
'Celery',
'Cucumber',
'Cabbage-green',
'Cabbage-red',
'Green-beans',
'Flour-amaranth',
'Flour-quinoa',
'Flour-sorghum',
'Flour-buckwheat',
'Flour-rye',
'Flour-barley',
'Flour-cassava',
'Buckwheat',
'Millet',
'amaranth-flour',
'quinoa-flour',
'brown-Rice',
'white-Rice',
'Chicken-breast',
'brazil-nuts',
'cashew-nuts',
'hazelnuts',
'Peanuts',
'coconut-Flour',
'coconut',
'pumpkin-seeds',
'hazelnuts',
'macadamia-nuts',
'pistachio-nuts',
'sunflower-seed',
'chestnut-flour',
 "Flour",
  "Salt",
  "Butter",
  "Eggs",
  "Milk",
  "Yeast",
  "Baking powder",
  "Vanilla extract",
  "Cocoa powder",
  "Chocolate chips",
  "Olive oil",
  "Garlic",
  "Tomatoes",
  "Oregano",
  "Parmesan cheese",
  "Ground beef",
  "Chicken breast",
  "Lettuce",
  "Avocado",
  "Lemon",
  "Soy sauce",
  "Rice",
  "Quinoa",
  "Black beans",
  "Corn",
  "Bell peppers",
  "Chili powder",
  "Cumin",
  "Paprika",
  "Turmeric",
  "Ginger",
  "Coconut milk",
  "Curry paste",
  "Peanut butter",
  "Oats",
  "Almonds",
  "Raisins",
  "Maple syrup",
  "Greek yogurt",
  "Chia seeds",
  "Blueberries",
  "Bananas",
  "Spinach",
  "Kale",
  "Sesame seeds",
  "Sunflower seeds",
  "Quinoa",
  "Lentils",
  "Cucumber",
  "Carrots",
  "Zucchini",
  "Mushrooms",
  "Cheddar cheese",
  "Mayonnaise",
  "Mustard",
  "Ketchup",
  "Pasta",
  "Bread",
  "Pork",
  "Beef",
  "Salmon",
  "Tuna",
  "Shrimp",
  "Scallops",
  "Crab",
  "Lobster",
  "Squid",
  "Rice vinegar",
  "Apple cider vinegar",
  "Red wine vinegar",
  "White wine vinegar",
  "Sesame oil",
  "Truffle oil",
  "Saffron",
  "Bay leaves",
  "Cayenne pepper",
  "Thyme",
  "Rosemary",
  "Nutmeg",
  "Cardamom",
  "Cloves",
  "Coriander",
  "Cilantro",
  "Parsley",
  "Dill",
  "Mint",
  "Baking soda",
  "Molasses",
  "Coconut flakes",
  "Pineapple",
  "Peaches",
  "Watermelon",
  "Raspberries",
  "Strawberries",
  "Oranges",
  "Grapes",
  "Cranberries",
  "Hazelnuts",
  "Cashews",
  "Walnuts",
  "Pistachios",
  "Sourdough bread",
  "Bagels",
  "Croissants",
  "Cabbage",
  "Broccoli",
  "Cauliflower",
  "Brussels sprouts",
  "Artichokes",
  "Asparagus",
  "Radishes",
  "Eggplant",
  "Beets",
  "Pumpkin",
  "Sweet potatoes",
  "Potatoes",
  "Cottage cheese",
  "Ricotta cheese",
  "Cream cheese",
  "Gorgonzola cheese",
  "Blue cheese",
  "Feta cheese",
  "Goat cheese",
  "Brie cheese",
  "Camembert cheese",
  "Mozzarella cheese",
  "Provolone cheese",
  "Swiss cheese",
  "Gruyere cheese",
  "Havarti cheese",
  "Parmigiano-Reggiano cheese",
  "Gouda cheese",
  "Cheddar cheese",
  "Monterey Jack cheese",
  "Colby cheese",
  "Pepper jack cheese",
  "Brie cheese",
  "Camembert cheese",
  "Mozzarella cheese",
  "Provolone cheese",
  "Swiss cheese",
  "Gruyere cheese",
  "Havarti cheese",
  "Parmigiano-Reggiano cheese",
  "Gouda cheese",
  "Cheddar cheese",
  "Monterey Jack cheese",
  "Colby cheese",
  "Pepper jack cheese",
   "Pepper",
   "Garlic",

  "Olive oil", 

 "Flour", 
 "Eggs", 
 "Milk", 
  "Tomato",
 "Lemon",
 "Basil",
 "Parsley",
 "Cinnamon", 
 "Honey",
];

const uppercaseItems: string[] = foodIngredients.map(item => item.toUpperCase());

//console.log(uppercaseItems);


export default foodIngredients;