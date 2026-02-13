// MacroScope - Nutrition & Health Calculator

// Food Search Functionality
async function searchFood() {
  const foodInput = document.getElementById('foodInput').value.trim();
  const resultDiv = document.getElementById('foodResult');

  if (!foodInput) {
    resultDiv.innerHTML = '<p>Please enter a food item to search.</p>';
    return;
  }

  resultDiv.innerHTML = '<p>Searching...</p>';

  // Demo data for common foods
  const demoFoods = {
    'chicken': {
      name: 'Chicken Breast',
      serving: '100g',
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6
    },
    'pizza': {
      name: 'Pepperoni Pizza',
      serving: '1 slice (107g)',
      calories: 285,
      protein: 10.4,
      carbs: 35.6,
      fat: 10.4
    },
    'pasta': {
      name: 'Spaghetti',
      serving: '1 cup cooked',
      calories: 220,
      protein: 8.1,
      carbs: 43.2,
      fat: 1.3
    },
    'burger': {
      name: 'Beef Burger',
      serving: '1 patty (100g)',
      calories: 250,
      protein: 20,
      carbs: 0,
      fat: 20
    },
    'rice': {
      name: 'White Rice',
      serving: '1 cup cooked',
      calories: 205,
      protein: 4.3,
      carbs: 44.5,
      fat: 0.4
    },
    'apple': {
      name: 'Apple',
      serving: '1 medium',
      calories: 95,
      protein: 0.5,
      carbs: 25.1,
      fat: 0.3
    },
    'banana': {
      name: 'Banana',
      serving: '1 medium',
      calories: 105,
      protein: 1.3,
      carbs: 27,
      fat: 0.4
    },
    'salad': {
      name: 'Green Salad',
      serving: '1 cup',
      calories: 15,
      protein: 1.4,
      carbs: 3,
      fat: 0.2
    },
    'chicken curry': {
      name: 'Chicken Curry',
      serving: '1 cup',
      calories: 240,
      protein: 25,
      carbs: 8,
      fat: 12
    },
    'dal': {
      name: 'Dal (Lentil Curry)',
      serving: '1 cup',
      calories: 180,
      protein: 12,
      carbs: 30,
      fat: 3
    },
    'naan': {
      name: 'Naan Bread',
      serving: '1 piece',
      calories: 260,
      protein: 8,
      carbs: 45,
      fat: 5
    },
    'biryani': {
      name: 'Chicken Biryani',
      serving: '1 cup',
      calories: 350,
      protein: 20,
      carbs: 45,
      fat: 12
    },
    'samosa': {
      name: 'Vegetable Samosa',
      serving: '1 piece',
      calories: 150,
      protein: 3,
      carbs: 18,
      fat: 7
    },
    'chana masala': {
      name: 'Chana Masala (Chickpea Curry)',
      serving: '1 cup',
      calories: 220,
      protein: 10,
      carbs: 35,
      fat: 5
    },
    'paneer butter masala': {
      name: 'Paneer Butter Masala',
      serving: '1 cup',
      calories: 320,
      protein: 15,
      carbs: 12,
      fat: 25
    },
    'rajma': {
      name: 'Rajma (Kidney Bean Curry)',
      serving: '1 cup',
      calories: 200,
      protein: 12,
      carbs: 35,
      fat: 3
    },
    'aloo gobi': {
      name: 'Aloo Gobi (Potato Cauliflower)',
      serving: '1 cup',
      calories: 120,
      protein: 4,
      carbs: 20,
      fat: 4
    },
    'palak paneer': {
      name: 'Palak Paneer (Spinach Paneer)',
      serving: '1 cup',
      calories: 280,
      protein: 18,
      carbs: 8,
      fat: 20
    },
    'roti': {
      name: 'Chapati/Roti',
      serving: '1 piece',
      calories: 120,
      protein: 4,
      carbs: 20,
      fat: 3
    },
    'dosa': {
      name: 'Plain Dosa',
      serving: '1 piece',
      calories: 180,
      protein: 4,
      carbs: 30,
      fat: 4
    },
    'idli': {
      name: 'Idli',
      serving: '1 piece',
      calories: 40,
      protein: 2,
      carbs: 8,
      fat: 0.5
    },
    'butter chicken': {
      name: 'Butter Chicken',
      serving: '1 cup',
      calories: 380,
      protein: 28,
      carbs: 10,
      fat: 25
    },
    'masala dosa': {
      name: 'Masala Dosa',
      serving: '1 piece',
      calories: 350,
      protein: 8,
      carbs: 55,
      fat: 12
    },
    'uttapam': {
      name: 'Uttapam (Vegetable)',
      serving: '1 piece',
      calories: 220,
      protein: 6,
      carbs: 35,
      fat: 6
    },
    'vada pav': {
      name: 'Vada Pav',
      serving: '1 piece',
      calories: 280,
      protein: 8,
      carbs: 35,
      fat: 12
    },
    'pani puri': {
      name: 'Pani Puri (Gol Gappe)',
      serving: '6 pieces',
      calories: 180,
      protein: 4,
      carbs: 30,
      fat: 5
    },
    'bhel puri': {
      name: 'Bhel Puri',
      serving: '1 cup',
      calories: 250,
      protein: 6,
      carbs: 40,
      fat: 8
    },
    'pav bhaji': {
      name: 'Pav Bhaji',
      serving: '1 serving',
      calories: 320,
      protein: 10,
      carbs: 45,
      fat: 12
    },
    'dhokla': {
      name: 'Dhokla',
      serving: '1 piece',
      calories: 80,
      protein: 3,
      carbs: 12,
      fat: 2
    },
    'khakra': {
      name: 'Methi Khakra',
      serving: '1 piece',
      calories: 60,
      protein: 2,
      carbs: 8,
      fat: 2
    },
    'thepla': {
      name: 'Methi Thepla',
      serving: '1 piece',
      calories: 120,
      protein: 3,
      carbs: 15,
      fat: 5
    },
    'khichdi': {
      name: 'Moong Dal Khichdi',
      serving: '1 cup',
      calories: 180,
      protein: 8,
      carbs: 30,
      fat: 4
    },
    'poha': {
      name: 'Poha (Flattened Rice)',
      serving: '1 cup',
      calories: 200,
      protein: 4,
      carbs: 35,
      fat: 5
    },
    'upma': {
      name: 'Vegetable Upma',
      serving: '1 cup',
      calories: 220,
      protein: 6,
      carbs: 35,
      fat: 6
    },
    'kheer': {
      name: 'Rice Kheer',
      serving: '1 cup',
      calories: 280,
      protein: 6,
      carbs: 45,
      fat: 8
    },
    'ras malai': {
      name: 'Ras Malai',
      serving: '2 pieces',
      calories: 150,
      protein: 4,
      carbs: 20,
      fat: 6
    },
    'gulab jamun': {
      name: 'Gulab Jamun',
      serving: '2 pieces',
      calories: 200,
      protein: 3,
      carbs: 30,
      fat: 8
    },
    'jalebi': {
      name: 'Jalebi',
      serving: '2 pieces',
      calories: 180,
      protein: 2,
      carbs: 25,
      fat: 7
    },
    'barfi': {
      name: 'Besan Barfi',
      serving: '1 piece',
      calories: 120,
      protein: 3,
      carbs: 15,
      fat: 6
    },
    'laddoo': {
      name: 'Besan Laddoo',
      serving: '1 piece',
      calories: 150,
      protein: 4,
      carbs: 20,
      fat: 7
    },
    'mathri': {
      name: 'Mathri',
      serving: '1 piece',
      calories: 100,
      protein: 2,
      carbs: 12,
      fat: 5
    },
    'kachori': {
      name: 'Dal Kachori',
      serving: '1 piece',
      calories: 220,
      protein: 6,
      carbs: 25,
      fat: 12
    },
    'pakora': {
      name: 'Vegetable Pakora',
      serving: '4 pieces',
      calories: 160,
      protein: 4,
      carbs: 15,
      fat: 9
    },
    'bhujia': {
      name: 'Aloo Bhujia',
      serving: '1 cup',
      calories: 300,
      protein: 8,
      carbs: 35,
      fat: 15
    },
    'murukku': {
      name: 'Murukku',
      serving: '1 piece',
      calories: 80,
      protein: 2,
      carbs: 10,
      fat: 4
    },
    'adai': {
      name: 'Adai Dosa',
      serving: '1 piece',
      calories: 250,
      protein: 8,
      carbs: 40,
      fat: 6
    },
    'appam': {
      name: 'Appam',
      serving: '1 piece',
      calories: 120,
      protein: 3,
      carbs: 20,
      fat: 3
    },
    'puttu': {
      name: 'Rice Puttu',
      serving: '1 cup',
      calories: 180,
      protein: 4,
      carbs: 35,
      fat: 2
    },
    'kanji': {
      name: 'Rice Kanji',
      serving: '1 cup',
      calories: 150,
      protein: 3,
      carbs: 30,
      fat: 2
    },
    'avial': {
      name: 'Avial (Mixed Vegetables)',
      serving: '1 cup',
      calories: 120,
      protein: 4,
      carbs: 15,
      fat: 6
    },
    'sambar': {
      name: 'Sambar',
      serving: '1 cup',
      calories: 140,
      protein: 6,
      carbs: 20,
      fat: 4
    },
    'rasam': {
      name: 'Rasam',
      serving: '1 cup',
      calories: 80,
      protein: 3,
      carbs: 12,
      fat: 2
    },
    'thukpa': {
      name: 'Thukpa (Noodle Soup)',
      serving: '1 bowl',
      calories: 220,
      protein: 8,
      carbs: 35,
      fat: 6
    },
    'momos': {
      name: 'Chicken Momos',
      serving: '4 pieces',
      calories: 200,
      protein: 12,
      carbs: 25,
      fat: 6
    },
    'thali': {
      name: 'Vegetarian Thali',
      serving: '1 full meal',
      calories: 450,
      protein: 15,
      carbs: 65,
      fat: 12
    },
    'bisi bele bath': {
      name: 'Bisi Bele Bath',
      serving: '1 cup',
      calories: 280,
      protein: 8,
      carbs: 45,
      fat: 8
    },
    'pongal': {
      name: 'Ven Pongal',
      serving: '1 cup',
      calories: 240,
      protein: 6,
      carbs: 40,
      fat: 6
    },
    'keerai masiyal': {
      name: 'Keerai Masiyal (Spinach)',
      serving: '1 cup',
      calories: 100,
      protein: 5,
      carbs: 15,
      fat: 3
    },
    'poriyal': {
      name: 'Vegetable Poriyal',
      serving: '1 cup',
      calories: 120,
      protein: 4,
      carbs: 18,
      fat: 4
    },
    'kootu': {
      name: 'Vegetable Kootu',
      serving: '1 cup',
      calories: 160,
      protein: 6,
      carbs: 25,
      fat: 5
    },
    'thuvaiyal': {
      name: 'Coconut Thuvaiyal',
      serving: '2 tbsp',
      calories: 60,
      protein: 1,
      carbs: 4,
      fat: 5
    },
    'pickle': {
      name: 'Mixed Vegetable Pickle',
      serving: '1 tbsp',
      calories: 30,
      protein: 0.5,
      carbs: 3,
      fat: 2
    },
    'chutney': {
      name: 'Coconut Chutney',
      serving: '2 tbsp',
      calories: 40,
      protein: 1,
      carbs: 3,
      fat: 3
    },
    'papad': {
      name: 'Urad Dal Papad',
      serving: '1 piece',
      calories: 25,
      protein: 1,
      carbs: 4,
      fat: 1
    },
    'sev': {
      name: 'Sev (Chickpea Flour Noodles)',
      serving: '1 cup',
      calories: 280,
      protein: 8,
      carbs: 35,
      fat: 12
    },
    'fafda': {
      name: 'Fafda',
      serving: '1 piece',
      calories: 150,
      protein: 4,
      carbs: 15,
      fat: 8
    },
    'handvo': {
      name: 'Handvo',
      serving: '1 piece',
      calories: 180,
      protein: 6,
      carbs: 25,
      fat: 7
    },
    'undhiyu': {
      name: 'Undhiyu',
      serving: '1 cup',
      calories: 220,
      protein: 6,
      carbs: 30,
      fat: 10
    },
    'dhansak': {
      name: 'Dhansak',
      serving: '1 cup',
      calories: 280,
      protein: 12,
      carbs: 35,
      fat: 8
    },
    'patra': {
      name: 'Patra (Colocasia Leaves)',
      serving: '1 piece',
      calories: 100,
      protein: 2,
      carbs: 15,
      fat: 4
    },
    'khichu': {
      name: 'Khichu',
      serving: '1 cup',
      calories: 200,
      protein: 4,
      carbs: 35,
      fat: 5
    },
    'bhakhri': {
      name: 'Methi Bhakhri',
      serving: '1 piece',
      calories: 140,
      protein: 4,
      carbs: 20,
      fat: 6
    },
    'dahi vada': {
      name: 'Dahi Vada',
      serving: '2 pieces',
      calories: 180,
      protein: 6,
      carbs: 25,
      fat: 7
    },
    'raj kachori': {
      name: 'Raj Kachori',
      serving: '1 piece',
      calories: 350,
      protein: 8,
      carbs: 45,
      fat: 15
    },
    'chaat': {
      name: 'Pani Puri Chaat',
      serving: '1 plate',
      calories: 220,
      protein: 6,
      carbs: 35,
      fat: 8
    },
    'kulfi': {
      name: 'Malai Kulfi',
      serving: '1 piece',
      calories: 180,
      protein: 4,
      carbs: 20,
      fat: 10
    },
    'falooda': {
      name: 'Falooda',
      serving: '1 glass',
      calories: 280,
      protein: 6,
      carbs: 45,
      fat: 8
    },
    'lassi': {
      name: 'Sweet Lassi',
      serving: '1 glass',
      calories: 200,
      protein: 6,
      carbs: 25,
      fat: 8
    },
    'masala chai': {
      name: 'Masala Chai',
      serving: '1 cup',
      calories: 80,
      protein: 2,
      carbs: 12,
      fat: 3
    },
    'filter coffee': {
      name: 'South Indian Filter Coffee',
      serving: '1 cup',
      calories: 120,
      protein: 2,
      carbs: 15,
      fat: 5
    }
  };

  // Simulate API delay
  setTimeout(() => {
    const query = foodInput.toLowerCase();
    let found = false;

    for (const key in demoFoods) {
      if (query.includes(key)) {
        const food = demoFoods[key];
        resultDiv.innerHTML = `
          <h3>${food.name}</h3>
          <p><strong>Serving Size:</strong> ${food.serving}</p>
          <p><strong>Calories:</strong> ${food.calories}</p>
          <p><strong>Protein:</strong> ${food.protein}g</p>
          <p><strong>Carbs:</strong> ${food.carbs}g</p>
          <p><strong>Fat:</strong> ${food.fat}g</p>
        `;
        found = true;
        break;
      }
    }

    if (!found) {
      resultDiv.innerHTML = '<p>Food not found in demo database. Try: chicken, pizza, pasta, burger, rice, apple, banana, or salad.</p>';
    }
  }, 1000);
}

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
  const resultDiv = document.getElementById('bodyMetricsResult');

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = '<p>Please enter valid weight and height values.</p>';
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = Math.round(bmi * 10) / 10;

  let category = '';
  let color = '';
  let advice = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#2196F3';
    advice = '';
  } else if (bmi < 25) {
    category = 'Normal weight';
    color = '#4CAF50';
    advice = '';
  } else if (bmi < 30) {
    category = 'Overweight';
    color = '#FF9800';
    advice = '<p style="background: #fff3e0; padding: 15px; border-radius: 6px; margin-top: 15px; border-left: 4px solid #FF9800;"><strong>💡 Dietary Tips to Lose Weight:</strong><br>• Increase protein intake (chicken, lentils, eggs)<br>• Eat more vegetables and whole grains<br>• Reduce sugary drinks and fried foods<br>• Control portion sizes<br>• Stay hydrated with water<br>• Include regular physical activity</p>';
  } else {
    category = 'Obese';
    color = '#F44336';
    advice = '<p style="background: #ffebee; padding: 15px; border-radius: 6px; margin-top: 15px; border-left: 4px solid #F44336;"><strong>⚠️ Health & Dietary Recommendations:</strong><br>• Consult a healthcare professional or dietitian<br>• Focus on lean proteins (grilled chicken, fish, dal)<br>• Eat plenty of vegetables and whole grains<br>• Limit refined carbs, oils, and processed foods<br>• Eat smaller, frequent meals<br>• Increase physical activity gradually<br>• Reduce calorie intake by 500-750 calories/day<br>• Stay hydrated and get adequate sleep</p>';
  }

  resultDiv.innerHTML = `
    <h3>Your BMI: ${roundedBMI}</h3>
    <p style="color: ${color}"><strong>Category:</strong> ${category}</p>
    <div class="bmi-bar">
      <div class="bmi-bar-fill" style="width: ${Math.min(bmi / 40 * 100, 100)}%; background: linear-gradient(to right, ${color}, ${color});"></div>
      <div class="bmi-bar-marker" style="left: ${Math.min(bmi / 40 * 100, 100)}%;"></div>
    </div>
    <div class="bmi-categories">
      <span>Underweight</span>
      <span>Normal</span>
      <span>Overweight</span>
      <span>Obese</span>
    </div>
    
    <p style="margin-top: 20px; font-weight: bold; border-top: 2px solid #e0e0e0; padding-top: 15px;">Healthy Weight Range for Your Height (${parseFloat(document.getElementById('height').value)} cm):</p>
    <div style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin: 10px 0;">
      <p style="margin: 5px 0;"><strong>Underweight:</strong> Below ${Math.round(18.5 * (height * height))} kg</p>
      <p style="margin: 5px 0;"><strong>Normal Weight:</strong> ${Math.round(18.5 * (height * height))} - ${Math.round(24.9 * (height * height))} kg ✓</p>
      <p style="margin: 5px 0;"><strong>Overweight:</strong> ${Math.round(25 * (height * height))} - ${Math.round(29.9 * (height * height))} kg</p>
      <p style="margin: 5px 0;"><strong>Obese:</strong> Above ${Math.round(30 * (height * height))} kg</p>
    </div>
    ${advice}
  `;
}

// BMR Calculator
function calculateBMR() {
  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const resultDiv = document.getElementById('bodyMetricsResult');

  if (!gender || !age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = '<p>Please fill in all fields with valid values.</p>';
    return;
  }

  // Mifflin-St Jeor Equation
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  resultDiv.innerHTML = `
    <h3>Your Basal Metabolic Rate</h3>
    <p><strong>BMR:</strong> ${Math.round(bmr)} calories/day</p>
    <p><em>This is the calories your body needs at rest. To calculate daily needs including activity, multiply by your activity factor (1.2 for sedentary, 1.375 for light activity, etc.).</em></p>
  `;
}

// Add event listeners for Enter key
document.getElementById('foodInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchFood();
  }
});

document.getElementById('weight').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calculateBMI();
  }
});

document.getElementById('height').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    calculateBMI();
  }
});