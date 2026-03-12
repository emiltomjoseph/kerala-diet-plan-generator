const appData = {
    meals: {
        breakfast: {
            veg: [
                { name: "Appam with Vegetable Stew", cal: 350, ingredients: ["Rice Flour", "Coconut Milk", "Yeast", "Potato", "Carrot", "Beans", "Green Peas", "Coconut Oil", "Spices"] },
                { name: "Puttu with Kadala Curry", cal: 400, ingredients: ["Rice Flour", "Coconut (Grated)", "Black Chickpeas", "Onion", "Tomato", "Coconut Oil", "Spices"] },
                { name: "Idiyappam with Vegetable Kurma", cal: 320, ingredients: ["Rice Flour", "Coconut (Grated)", "Mixed Vegetables", "Coconut Milk", "Cashews", "Spices"] },
                { name: "Dosa with Sambar & Chutney", cal: 300, ingredients: ["Dosa Batter", "Toor Dal", "Drumstick", "Carrot", "Brinjal", "Coconut", "Green Chilli"] },
                { name: "Idli (3 pcs) with Sambar", cal: 250, ingredients: ["Idli Batter", "Toor Dal", "Vegetables", "Spices"] },
                { name: "Upma with Banana", cal: 300, ingredients: ["Rava (Semolina)", "Onion", "Green Chilli", "Ginger", "Curry Leaves", "Banana"] },
                { name: "Oats Upma with Vegetables", cal: 280, ingredients: ["Oats", "Onion", "Carrot", "Beans", "Green Chilli"] }
            ],
            "non-veg": [
                { name: "Appam with Chicken Stew", cal: 450, ingredients: ["Rice Flour", "Coconut Milk", "Chicken", "Potato", "Carrot", "Coconut Oil", "Spices"] },
                { name: "Puttu with Egg Curry", cal: 420, ingredients: ["Rice Flour", "Coconut (Grated)", "Eggs", "Onion", "Tomato", "Coconut Milk", "Spices"] },
                { name: "Idiyappam with Egg Roast", cal: 380, ingredients: ["Rice Flour", "Coconut (Grated)", "Eggs", "Onion", "Tomato", "Spices"] },
                { name: "Bread Toast with Omelette (2 eggs)", cal: 350, ingredients: ["Bread slices", "Eggs", "Onion", "Green Chilli", "Pepper"] },
                { name: "Dosa with Egg Poriyal", cal: 340, ingredients: ["Dosa Batter", "Eggs", "Onion", "Green Chilli"] }
            ]
        },
        lunch: {
            veg: [
                { name: "Red Rice, Thoran, Sambar, Curd", cal: 500, ingredients: ["Red Rice", "Cabbage/Beans", "Coconut (Grated)", "Toor Dal", "Vegetables", "Curd"] },
                { name: "Kerala Sadhya Style Meal (Light)", cal: 550, ingredients: ["Rice", "Parippu", "Sambar", "Avial", "Thoran", "Payasam (Little)"] },
                { name: "Rice with Avial & Pickle", cal: 450, ingredients: ["Rice", "Mixed Vegetables (Carrot, Beans, Drumstick, Yam)", "Coconut", "Curd", "Pickle"] },
                { name: "Kanji (Rice Porridge) with Payar", cal: 350, ingredients: ["Rice", "Green Gram (Payar)", "Coconut", "Green Chilli"] },
                { name: "Chapati (3) with Mixed Veg Curry", cal: 400, ingredients: ["Wheat Flour", "Mixed Vegetables", "Onion", "Tomato", "Spices"] },
                { name: "Lemon Rice with Salad", cal: 420, ingredients: ["Rice", "Lemon", "Peanuts", "Cucumber", "Carrot", "Onion"] },
                { name: "Vegetable Biryani", cal: 500, ingredients: ["Basmati Rice", "Mixed Vegetables", "Ghee", "Spices", "Onion", "Tomato", "Curd"] }
            ],
            "non-veg": [
                { name: "Red Rice, Fish Curry (Kudampuli), Thoran", cal: 550, ingredients: ["Red Rice", "Fish (Sardine/Mackerel)", "Kudampuli", "Coconut", "Vegetables for Thoran"] },
                { name: "Rice with Chicken Curry (Kerala Style)", cal: 600, ingredients: ["Rice", "Chicken", "Onion", "Tomato", "Coconut Oil", "Curry Leaves", "Spices"] },
                { name: "Fish Biryani (Malabar Style)", cal: 650, ingredients: ["Basmati Rice", "Fish", "Onion", "Tomato", "Ghee", "Spices", "Garam Masala"] },
                { name: "Rice with Beef Fry & Moru Curry", cal: 700, ingredients: ["Rice", "Beef", "Coconut Slices", "Spices", "Curd", "Coconut", "Green Chilli"] },
                { name: "Chapati with Chicken Roast", cal: 500, ingredients: ["Wheat Flour", "Chicken", "Onion", "Tomato", "Spices"] },
                { name: "Ghee Rice with Chicken Curry", cal: 750, ingredients: ["Basmati Rice", "Ghee", "Cashews", "Raisins", "Chicken", "Onion", "Tomato", "Coconut Milk"] }
            ]
        },
        dinner: {
            veg: [
                { name: "Chapati (2) with Dal Curry", cal: 300, ingredients: ["Wheat Flour", "Moong Dal/Toor Dal", "Onion", "Tomato", "Spices"] },
                { name: "Oats Kanji", cal: 200, ingredients: ["Oats", "Coconut Milk", "Salt"] },
                { name: "Wheat Dosa with Chutney", cal: 250, ingredients: ["Wheat Flour", "Coconut", "Green Chilli", "Ginger"] },
                { name: "Ragi Puttu with Banana", cal: 280, ingredients: ["Ragi Flour", "Coconut (Grated)", "Banana"] },
                { name: "Salad with Chickpeas", cal: 250, ingredients: ["Chickpeas (Boiled)", "Cucumber", "Tomato", "Onion", "Lemon Juice", "Pepper"] },
                { name: "Vegetable Soup & Toast", cal: 200, ingredients: ["Mixed Vegetables (Carrot, Beans, Cabbage)", "Bread Slices", "Butter/Olive Oil"] }
            ],
            "non-veg": [
                { name: "Grilled Fish with Salad", cal: 300, ingredients: ["Fish Fillet", "Olive Oil", "Pepper", "Lemon", "Cucumber", "Lettuce", "Tomato"] },
                { name: "Chapati (2) with Egg Curry", cal: 350, ingredients: ["Wheat Flour", "Eggs", "Onion", "Tomato", "Coconut Milk"] },
                { name: "Chicken Soup with Veggies", cal: 250, ingredients: ["Chicken Pieces", "Carrot", "Beans", "Onion", "Celery", "Pepper"] },
                { name: "Boiled Eggs (2) & Salad", cal: 200, ingredients: ["Eggs", "Cucumber", "Tomato", "Lettuce", "Pepper"] },
                { name: "Grilled Chicken Breast with Stir Fry", cal: 350, ingredients: ["Chicken Breast", "Broccoli", "Carrot", "Capsicum", "Soy Sauce", "Garlic"] }
            ]
        }
    }
};

const themeToggleBtn = document.getElementById('themeToggle');

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    const form = document.getElementById('dietForm');
    const resultsDiv = document.getElementById('results');
    const regenerateBtn = document.getElementById('regenerateBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generatePlan();
    });

    regenerateBtn.addEventListener('click', () => {
        generatePlan();
    });
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    // Simple text toggle for now, or icon class swap
    themeToggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}

function calculateBMR(weight, height, age, gender) {
    // Mifflin-St Jeor Equation
    if (gender === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

function generatePlan() {
    try {
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const activity = parseFloat(document.getElementById('activity').value);
        const preference = document.getElementById('preference').value;
        const goalSpeed = parseFloat(document.getElementById('goal').value);

        // 1. Calculate Calories
        const bmr = calculateBMR(weight, height, age, gender);
        const tdee = bmr * activity;
        // 7700 calories = 1kg fat. 
        // Deficit needed per day = (Goal in kg * 7700) / 7 days
        const deficit = (goalSpeed * 7700) / 7;
        const targetCalories = Math.round(tdee - deficit);

        // Safety check: Don't go below 1200 for women / 1500 for men roughly
        // For simplicity, hard clamp at 1200
        const finalCalories = Math.max(1200, targetCalories);

        // 2. Calculate Water (approx 30-35ml per kg)
        const waterIntake = (weight * 0.033).toFixed(1);

        // 3. Update DOM Stats
        document.getElementById('calorieTarget').textContent = finalCalories;
        document.getElementById('waterIntake').textContent = waterIntake;

        // 4. Generate Weekly Meals
        const weeklyMeals = renderWeeklyPlan(preference, finalCalories);

        // 5. Generate Grocery List
        generateGroceryList(weeklyMeals);

        // 5. Show Results
        const results = document.getElementById('results');
        results.classList.remove('hidden');
        results.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error("Error generating plan:", error);
        alert("Something went wrong while generating the plan. Please check your inputs.");
    }
}

function getRandomMeal(type, preference, targetCal, variance = 50) {
    let pool = appData.meals[type][preference];

    // Safety check: if pool is not found (e.g. data error), fallback to veg
    if (!pool) {
        console.warn(`Meal pool not found for ${type}/${preference}, falling back to veg`);
        pool = appData.meals[type]['veg'];
    }

    // If non-veg, we can also include veg items for variety
    if (preference === 'non-veg') {
        // mix in veg options to the pool so valid choices aren't restricted too much
        pool = [...pool, ...appData.meals[type]['veg']];
    }

    // Simple random selection
    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
}

function renderWeeklyPlan(preference, dailyCalories) {
    const container = document.getElementById('weeklyPlan');
    container.innerHTML = '';

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const allMeals = [];

    days.forEach(day => {
        const breakfast = getRandomMeal('breakfast', preference);
        const lunch = getRandomMeal('lunch', preference);
        const dinner = getRandomMeal('dinner', preference);

        // Collect meals for grocery list
        allMeals.push(breakfast, lunch, dinner);

        // Calculate total for the day to show
        const dayTotal = breakfast.cal + lunch.cal + dinner.cal;

        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <div class="day-header">
                <span class="day-title">${day}</span>
                <span class="day-total" style="font-size: 0.9rem; color: #aaa;">Approx. ${dayTotal} kcal</span>
            </div>
            <div class="meal-row">
                <span class="meal-type">Breakfast</span>
                <span class="meal-name">${breakfast.name}</span>
                <span class="meal-cal">${breakfast.cal} kcal</span>
            </div>
             <div class="meal-row">
                <span class="meal-type">Lunch</span>
                <span class="meal-name">${lunch.name}</span>
                <span class="meal-cal">${lunch.cal} kcal</span>
            </div>
             <div class="meal-row">
                <span class="meal-type">Dinner</span>
                <span class="meal-name">${dinner.name}</span>
                <span class="meal-cal">${dinner.cal} kcal</span>
            </div>
        `;
        container.appendChild(card);
    });

    return allMeals;
}

function generateGroceryList(meals) {
    const allIngredients = new Set();

    meals.forEach(meal => {
        if (meal.ingredients) {
            meal.ingredients.forEach(item => allIngredients.add(item));
        }
    });

    // Sort alphabetically
    const sortedIngredients = Array.from(allIngredients).sort();

    renderGroceryList(sortedIngredients);
}

function renderGroceryList(ingredients) {
    const container = document.getElementById('groceryListContainer');
    if (!container) return;

    container.innerHTML = '';

    if (ingredients.length === 0) {
        container.innerHTML = '<p class="empty-list">No ingredients generated.</p>';
        return;
    }

    ingredients.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'grocery-item glass-panel';
        itemDiv.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" id="item-${item.replace(/\s+/g, '-')}" class="custom-checkbox">
                <label for="item-${item.replace(/\s+/g, '-')}">${item}</label>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}
