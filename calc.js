const username = localStorage.getItem("Name")
const userEmail = localStorage.getItem("Email")
const userPhone = localStorage.getItem("Phone")
const userDOB = localStorage.getItem("DOB")
const userGender = localStorage.getItem("Gender")
const user = `<i class="fa-solid fa-user"></i>
<P>Name: ${username}</P>
<p>Email: ${userEmail}</p>
<p>PhoneNo: ${userPhone}</p>
<p>DoB: ${userDOB}</p>
<p>Gender:${userGender}</p>`
document.getElementById('user').innerHTML = user
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".add-button");
    const foodList = document.querySelector(".food-list");
    const submitButton = document.querySelector(".submit-button");
  
    addButton.addEventListener("click", function() {
      const foodItem = document.createElement("div");
      foodItem.classList.add("food-item");
      foodItem.innerHTML = `
        <input type="text" class="food-name" placeholder="Food Item">
        <input type="number" class="food-quantity" placeholder="Quantity in grams">
      `;
      foodList.appendChild(foodItem);
    });
    submitButton.addEventListener("click", function() {
        const foodNameInputs = document.querySelectorAll(".food-name");
        const foodQuantityInputs = document.querySelectorAll(".food-quantity");
    
        foodData = [];
        for (let i = 0; i < foodNameInputs.length; i++) {
          const name = foodNameInputs[i].value.trim();
          const quantity = parseInt(foodQuantityInputs[i].value);
          
          if (name && !isNaN(quantity) && quantity > 0) {
            foodData.push({ name, quantity });
          }
        }
    
        console.log("Food Data:", foodData);
        let foodList = ``
        for(let i = 0; i < foodData.length; i++){
            foodList += foodData[i].name + " "
        }
        console.log(foodList)
        const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${encodeURIComponent(foodList)}`;
        const data = null;
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText)
            console.log(response)
            let protien = 0; let calories = 0; let carbs = 0; let cholesterol = 0; let fat = 0; let fiber = 0; let potassium = 0; let sodium = 0; let sugar = 0;

            for(let i = 0; i<response.length; i++){
                calories += foodData[i].quantity*(response[i].calories/100)
                carbs += foodData[i].quantity*(response[i].carbohydrates_total_g/100)
                protien += foodData[i].quantity*(response[i].protein_g/100)
                cholesterol += foodData[i].quantity*(response[i].cholesterol_mg/100)
                fat += foodData[i].quantity*(response[i].fat_total_g/100)
                fiber += foodData[i].quantity*(response[i].fiber_g/100)
                potassium += foodData[i].quantity*(response[i].potassium_mg/100)
                sugar += foodData[i].quantity*(response[i].sugar_g/100)
                sodium += foodData[i].quantity*(response[i].sodium_mg/100)
            }
            const output = `<div id ="nutri-box" style="width: 25%; margin: 10px;">
            <p>Calories: ${calories.toFixed(2)} Calories</p>
            <p>Carbs: ${carbs.toFixed(2)} g</p>
            <p>Protein: ${protien.toFixed(2)} g</p>
            <p>Cholesterol: ${cholesterol.toFixed(2)} mg</p>
            <p>Fat: ${fat.toFixed(2)} g</p>
            <p>Fibre: ${fiber.toFixed(2)} g</p>
            <p>Potassium: ${potassium.toFixed(2)} mg</p>
            <p>Sugars: ${sugar.toFixed(2)} g</p>
            <p>Sodium: ${sodium.toFixed(2)} mg</p>
           </div>`
           document.getElementById('nutribox').innerHTML = output
        }
        
    });
    
    xhr.open('GET', url);
    xhr.setRequestHeader('X-RapidAPI-Key', '6afcb173damsh4c630189d420dd4p18ea3fjsn1c95813fde53');
    xhr.setRequestHeader('X-RapidAPI-Host', 'nutrition-by-api-ninjas.p.rapidapi.com');
    
    xhr.send(data);
        

      });
    });

  
  