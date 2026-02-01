const products = [
  // Fruits & Veggies
  { id: 1, name: "Bananas", category: "Fruits & Veggies", price: 40, image: "/images/banana.avif" },
  { id: 2, name: "Tomatoes", category: "Fruits & Veggies", price: 30, image: "/images/tomato.avif" },
  { id: 3, name: "Apples", category: "Fruits & Veggies", price: 60, image: "/images/apples.avif" },
  { id: 4, name: "Cucumbers", category: "Fruits & Veggies", price: 25, image: "/images/cucumber.avif" },
  { id: 5, name: "Carrots", category: "Fruits & Veggies", price: 35, image: "/images/carrot.avif" },
  { id: 6, name: "Spinach", category: "Fruits & Veggies", price: 20, image: "/images/spinach.avif" },
  { id: 7, name: "Strawberries", category: "Fruits & Veggies", price: 80, image: "/images/strawberry.avif" },
  { id: 8, name: "Grapes", category: "Fruits & Veggies", price: 70, image: "/images/grapes.avif" },

  // Dairy & Bread
  { id: 9, name: "Milk", category: "Dairy & Bread", price: 25, image: "/images/milk.avif" },
  { id: 10, name: "Cheese", category: "Dairy & Bread", price: 80, image: "/images/cheese.avif" },
  { id: 11, name: "Bread", category: "Dairy & Bread", price: 35, image: "/images/bread.avif" },
  { id: 12, name: "Butter", category: "Dairy & Bread", price: 60, image: "/images/butter.avif" },
  { id: 13, name: "Yogurt", category: "Dairy & Bread", price: 50, image: "/images/yoghurt.avif" },
  { id: 14, name: "Paneer", category: "Dairy & Bread", price: 90, image: "/images/paneer.avif" },
  { id: 15, name: "Cream", category: "Dairy & Bread", price: 70, image: "/images/cream.avif" },
  { id: 16, name: "Eggs", category: "Dairy & Bread", price: 60, image: "/images/eggs.avif" },

  // Snacks
  { id: 17, name: "Chips", category: "Snacks", price: 15, image: "/images/chips.avif" },
  { id: 18, name: "Chocolate", category: "Snacks", price: 20, image: "/images/chocolate.avif" },
  { id: 19, name: "Cookies", category: "Snacks", price: 30, image: "/images/cookies.avif" },
  { id: 20, name: "Nuts", category: "Snacks", price: 70, image: "/images/nuts.avif" },
  { id: 21, name: "Popcorn", category: "Snacks", price: 25, image: "/images/popcorn.avif" },
  { id: 22, name: "Biscuits", category: "Snacks", price: 35, image: "/images/biscuit.avif" },
  { id: 23, name: "Energy Bars", category: "Snacks", price: 50, image: "/images/energy bar.avif" },
  { id: 24, name: "Trail Mix", category: "Snacks", price: 60, image: "/images/trail max.avif" },

  // Drinks
  { id: 25, name: "Orange Juice", category: "Drinks", price: 60, image: "/images/orange juice.avif" },
  { id: 26, name: "Soda", category: "Drinks", price: 25, image: "/images/soda.avif" },
  { id: 27, name: "Water Bottle", category: "Drinks", price: 15, image: "/images/water bottle.avif" },
  { id: 28, name: "Energy Drink", category: "Drinks", price: 80, image: "/images/energy drink.avif" },
  { id: 29, name: "Coffee", category: "Drinks", price: 90, image: "/images/coffee.avif" },
  { id: 30, name: "Tea", category: "Drinks", price: 50, image: "/images/tea.avif" },
  { id: 31, name: "Smoothie", category: "Drinks", price: 120, image: "/images/smoothie.avif" },
  { id: 32, name: "Lemonade", category: "Drinks", price: 40, image: "/images/lemonade.avif" },

  // Personal Care
  { id: 33, name: "Shampoo", category: "Personal Care", price: 120, image: "/images/shampoo.avif" },
  { id: 34, name: "Soap", category: "Personal Care", price: 40, image: "/images/soap.avif" },
  { id: 35, name: "Toothpaste", category: "Personal Care", price: 60, image: "/images/toothpaste.avif" },
  { id: 36, name: "Lotion", category: "Personal Care", price: 150, image: "/images/lotion.avif" },
  { id: 37, name: "Deodorant", category: "Personal Care", price: 130, image: "/images/deodrant.avif" },
  { id: 38, name: "Face Wash", category: "Personal Care", price: 90, image: "/images/face wash.avif" },
  { id: 39, name: "Hand Sanitizer", category: "Personal Care", price: 80, image: "/images/hand santizer.avif" },
  { id: 40, name: "Hair Oil", category: "Personal Care", price: 110, image: "/images/hair oil.avif" },

  // Household
  { id: 41, name: "Detergent", category: "Household", price: 120, image: "/images/detergent.avif" },
  { id: 42, name: "Dish Soap", category: "Household", price: 50, image: "/images/dish soap.avif" },
  { id: 43, name: "Floor Cleaner", category: "Household", price: 90, image: "/images/floor cleaner.avif" },
  { id: 44, name: "Garbage Bags", category: "Household", price: 40, image: "/images/garbage bags.avif" },
  { id: 45, name: "Air Freshener", category: "Household", price: 60, image: "/images/air freshener.avif" },
  { id: 46, name: "Mop", category: "Household", price: 150, image: "/images/mop.avif" },
  { id: 47, name: "Broom", category: "Household", price: 100, image: "/images/broom.avif" },
  { id: 48, name: "Cleaning Cloths", category: "Household", price: 70, image: "/images/cleaning cloths.avif" },

    // Frozen Foods
  { id: 49, name: "Frozen Peas", category: "Frozen Foods", price: 90, image: "/images/frozen peas.avif" },
  { id: 50, name: "Frozen Corn", category: "Frozen Foods", price: 85, image: "/images/frozen corn.avif" },
  { id: 51, name: "Frozen Fries", category: "Frozen Foods", price: 120, image: "/images/frozen fries.avif" },
  { id: 52, name: "Frozen Pizza", category: "Frozen Foods", price: 220, image: "/images/frozen pizza.avif" },
  { id: 53, name: "Frozen Nuggets", category: "Frozen Foods", price: 180, image: "/images/frozen nuggets.avif" },
  { id: 54, name: "Frozen Berries", category: "Frozen Foods", price: 200, image: "/images/frozen berries.avif" },
  { id: 55, name: "Frozen Paratha", category: "Frozen Foods", price: 140, image: "/images/frozen paratha.avif" },
  { id: 56, name: "Frozen Momos", category: "Frozen Foods", price: 160, image: "/images/momos.avif" },

  // Bakery & Confectionery
  { id: 57, name: "White Bread", category: "Bakery & Confectionery", price: 35, image: "/images/white bread.avif" },
  { id: 58, name: "Brown Bread", category: "Bakery & Confectionery", price: 45, image: "/images/brown bread.avif" },
  { id: 59, name: "Cake", category: "Bakery & Confectionery", price: 250, image: "/images/cake.avif" },
  { id: 60, name: "Pastry", category: "Bakery & Confectionery", price: 60, image: "/images/pastry.avif" },
  { id: 61, name: "Donuts", category: "Bakery & Confectionery", price: 80, image: "/images/donut.avif" },
  { id: 62, name: "Cupcake", category: "Bakery & Confectionery", price: 50, image: "/images/cupcake.avif" },
  { id: 63, name: "Chocolate Bar", category: "Bakery & Confectionery", price: 40, image: "/images/chocolate bar.avif" },
  { id: 64, name: "Cookies Box", category: "Bakery & Confectionery", price: 120, image: "/images/cookies box.avif" },

  // Baby Care
  { id: 65, name: "Baby Diapers", category: "Baby Care", price: 450, image: "/images/diapers.avif" },
  { id: 66, name: "Baby Wipes", category: "Baby Care", price: 120, image: "/images/baby wipes.avif" },
  { id: 67, name: "Baby Soap", category: "Baby Care", price: 60, image: "/images/baby soap.avif" },
  { id: 68, name: "Baby Shampoo", category: "Baby Care", price: 140, image: "/images/baby shampoo.avif" },
  { id: 69, name: "Baby Lotion", category: "Baby Care", price: 160, image: "/images/baby lotion.avif" },
  { id: 70, name: "Baby Powder", category: "Baby Care", price: 90, image: "/images/baby powder.avif" },
  { id: 71, name: "Feeding Bottle", category: "Baby Care", price: 180, image: "/images/bottle.avif" },
  { id: 72, name: "Baby Oil", category: "Baby Care", price: 110, image: "/images/baby oil.avif" },

  // Pet Supplies
  { id: 73, name: "Dog Food", category: "Pet Supplies", price: 600, image: "/images/dog food.avif" },
  { id: 74, name: "Cat Food", category: "Pet Supplies", price: 500, image: "/images/cat food.avif" },
  { id: 75, name: "Pet Treats", category: "Pet Supplies", price: 150, image: "/images/pet treats.avif" },
  { id: 76, name: "Pet Shampoo", category: "Pet Supplies", price: 220, image: "/images/pet shampoo.avif" },
  { id: 77, name: "Dog Collar", category: "Pet Supplies", price: 180, image: "/images/dog collar.avif" },
  { id: 78, name: "Pet Toy", category: "Pet Supplies", price: 130, image: "/images/pet toy.avif" },
  { id: 79, name: "Cat Litter", category: "Pet Supplies", price: 300, image: "/images/cat litter.avif" },
  { id: 80, name: "Pet Bowl", category: "Pet Supplies", price: 90, image: "/images/pet bowl.avif" },

  // Health & Wellness
  { id: 81, name: "Protein Powder", category: "Health & Wellness", price: 1200, image: "/images/protein powder.avif" },
  { id: 82, name: "Multivitamins", category: "Health & Wellness", price: 300, image: "/images/vitamins.avif" },
  { id: 83, name: "Fish Oil", category: "Health & Wellness", price: 450, image: "/images/fish oil.avif" },
  { id: 84, name: "Ayurvedic Syrup", category: "Health & Wellness", price: 180, image: "/images/syrup.avif" },
  { id: 85, name: "Health Drink", category: "Health & Wellness", price: 250, image: "/images/health drink.avif" },
  { id: 86, name: "Glucose Powder", category: "Health & Wellness", price: 160, image: "/images/glucose.avif" },
  { id: 87, name: "Pain Relief Spray", category: "Health & Wellness", price: 140, image: "/images/spray.avif" },
  { id: 88, name: "Herbal Tea", category: "Health & Wellness", price: 220, image: "/images/herbal tea.avif" },

    // Organic & Natural
  { id: 89, name: "Organic Rice", category: "Organic & Natural", price: 180, image: "/images/organic rice.avif" },
  { id: 90, name: "Organic Wheat Flour", category: "Organic & Natural", price: 160, image: "/images/organic flour.avif" },
  { id: 91, name: "Organic Honey", category: "Organic & Natural", price: 320, image: "/images/organic honey.avif" },
  { id: 92, name: "Organic Jaggery", category: "Organic & Natural", price: 140, image: "/images/jaggery.avif" },
  { id: 93, name: "Organic Tea", category: "Organic & Natural", price: 220, image: "/images/organic tea.avif" },
  { id: 94, name: "Organic Coffee", category: "Organic & Natural", price: 350, image: "/images/organic coffee.avif" },
  { id: 95, name: "Organic Pulses", category: "Organic & Natural", price: 190, image: "/images/organic pulses.avif" },
  { id: 96, name: "Organic Spices", category: "Organic & Natural", price: 210, image: "/images/organic spices.avif" },

  // Kitchen Essentials
  { id: 97, name: "Cooking Oil", category: "Kitchen Essentials", price: 160, image: "/images/oil.avif" },
  { id: 98, name: "Salt", category: "Kitchen Essentials", price: 20, image: "/images/salt.avif" },
  { id: 99, name: "Sugar", category: "Kitchen Essentials", price: 45, image: "/images/sugar.avif" },
  { id: 100, name: "Pressure Cooker", category: "Kitchen Essentials", price: 1200, image: "/images/cooker.avif" },
  { id: 101, name: "Gas Lighter", category: "Kitchen Essentials", price: 90, image: "/images/lighter.avif" },
  { id: 102, name: "Non-stick Pan", category: "Kitchen Essentials", price: 650, image: "/images/pan.avif" },
  { id: 103, name: "Knife Set", category: "Kitchen Essentials", price: 300, image: "/images/knife.avif" },
  { id: 104, name: "Storage Containers", category: "Kitchen Essentials", price: 450, image: "/images/containers.avif" },

  // Beauty & Cosmetics
  { id: 105, name: "Face Cream", category: "Beauty & Cosmetics", price: 220, image: "/images/face cream.avif" },
  { id: 106, name: "Lipstick", category: "Beauty & Cosmetics", price: 180, image: "/images/lipstick.avif" },
  { id: 107, name: "Kajal", category: "Beauty & Cosmetics", price: 120, image: "/images/kajal.avif" },
  { id: 108, name: "Foundation", category: "Beauty & Cosmetics", price: 350, image: "/images/foundation.avif" },
  { id: 109, name: "Perfume", category: "Beauty & Cosmetics", price: 650, image: "/images/perfume.avif" },
  { id: 110, name: "Face Mask", category: "Beauty & Cosmetics", price: 90, image: "/images/face mask.avif" },
  { id: 111, name: "Makeup Remover", category: "Beauty & Cosmetics", price: 160, image: "/images/remover.avif" },
  { id: 112, name: "Hair Serum", category: "Beauty & Cosmetics", price: 240, image: "/images/serum.avif" },

  // Grains & Pulses
  { id: 113, name: "Basmati Rice", category: "Grains & Pulses", price: 210, image: "/images/basmati.avif" },
  { id: 114, name: "Toor Dal", category: "Grains & Pulses", price: 160, image: "/images/toor dal.avif" },
  { id: 115, name: "Chana Dal", category: "Grains & Pulses", price: 140, image: "/images/chana dal.avif" },
  { id: 116, name: "Masoor Dal", category: "Grains & Pulses", price: 150, image: "/images/masoor.avif" },
  { id: 117, name: "Moong Dal", category: "Grains & Pulses", price: 170, image: "/images/moong.avif" },
  { id: 118, name: "Rajma", category: "Grains & Pulses", price: 190, image: "/images/rajma.avif" },
  { id: 119, name: "Kabuli Chana", category: "Grains & Pulses", price: 180, image: "/images/chana.avif" },
  { id: 120, name: "Millets", category: "Grains & Pulses", price: 200, image: "/images/millets.avif" },

  // Spices & Condiments
  { id: 121, name: "Turmeric Powder", category: "Spices & Condiments", price: 60, image: "/images/turmeric.avif" },
  { id: 122, name: "Red Chilli Powder", category: "Spices & Condiments", price: 70, image: "/images/chilli.avif" },
  { id: 123, name: "Garam Masala", category: "Spices & Condiments", price: 90, image: "/images/garam masala.avif" },
  { id: 124, name: "Cumin Seeds", category: "Spices & Condiments", price: 80, image: "/images/cumin.avif" },
  { id: 125, name: "Black Pepper", category: "Spices & Condiments", price: 110, image: "/images/pepper.avif" },
  { id: 126, name: "Mustard Seeds", category: "Spices & Condiments", price: 55, image: "/images/mustard.avif" },
  { id: 127, name: "Soy Sauce", category: "Spices & Condiments", price: 120, image: "/images/soy sauce.avif" },
  { id: 128, name: "Tomato Ketchup", category: "Spices & Condiments", price: 95, image: "/images/ketchup.avif" },

  // Instant & Ready-to-Eat
  { id: 129, name: "Instant Noodles", category: "Instant & Ready-to-Eat", price: 45, image: "/images/noodles.avif" },
  { id: 130, name: "Cup Noodles", category: "Instant & Ready-to-Eat", price: 60, image: "/images/cup noodles.avif" },
  { id: 131, name: "Ready Rice", category: "Instant & Ready-to-Eat", price: 90, image: "/images/ready rice.avif" },
  { id: 132, name: "Pasta Meal", category: "Instant & Ready-to-Eat", price: 120, image: "/images/pasta.avif" },
  { id: 133, name: "Soup Pack", category: "Instant & Ready-to-Eat", price: 70, image: "/images/soup.avif" },
  { id: 134, name: "Poha Mix", category: "Instant & Ready-to-Eat", price: 65, image: "/images/poha.avif" },
  { id: 135, name: "Upma Mix", category: "Instant & Ready-to-Eat", price: 75, image: "/images/upma.avif" },
  { id: 136, name: "Frozen Meal", category: "Instant & Ready-to-Eat", price: 180, image: "/images/meal.avif" },

  // Cleaning Supplies
  { id: 137, name: "Toilet Cleaner", category: "Cleaning Supplies", price: 90, image: "/images/toilet cleaner.avif" },
  { id: 138, name: "Glass Cleaner", category: "Cleaning Supplies", price: 80, image: "/images/glass cleaner.avif" },
  { id: 139, name: "Disinfectant Liquid", category: "Cleaning Supplies", price: 110, image: "/images/disinfectant.avif" },
  { id: 140, name: "Scrub Pads", category: "Cleaning Supplies", price: 40, image: "/images/scrub.avif" },
  { id: 141, name: "Cleaning Gloves", category: "Cleaning Supplies", price: 60, image: "/images/gloves.avif" },
  { id: 142, name: "Phenyl", category: "Cleaning Supplies", price: 70, image: "/images/phenyl.avif" },
  { id: 143, name: "Surface Cleaner", category: "Cleaning Supplies", price: 120, image: "/images/surface cleaner.avif" },
  { id: 144, name: "Dustbin Bags", category: "Cleaning Supplies", price: 50, image: "/images/bin bags.avif" },

  // Stationery & Misc
  { id: 145, name: "Notebook", category: "Stationery & Misc", price: 40, image: "/images/notebook.avif" },
  { id: 146, name: "Pen Set", category: "Stationery & Misc", price: 60, image: "/images/pen.avif" },
  { id: 147, name: "Marker", category: "Stationery & Misc", price: 35, image: "/images/marker.avif" },
  { id: 148, name: "Stapler", category: "Stationery & Misc", price: 90, image: "/images/stapler.avif" },
  { id: 149, name: "Calculator", category: "Stationery & Misc", price: 220, image: "/images/calculator.avif" },
  { id: 150, name: "Tape Roll", category: "Stationery & Misc", price: 30, image: "/images/tape.avif" },
  { id: 151, name: "Scissors", category: "Stationery & Misc", price: 70, image: "/images/scissors.avif" },
  { id: 152, name: "Glue Stick", category: "Stationery & Misc", price: 25, image: "/images/glue.avif" },

];

export default products;
