const searchButton = document.getElementById('searchButton');
const nutritionInfo = document.getElementById('nutritionInfo');
const foodInput = document.getElementById('foodInput');
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



searchButton.addEventListener('click', () => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    const foodName = foodInput.value;
    if (foodName.trim() === '') {
        alert('Please enter a food name.');
        return;
    }

    const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${foodName}`;
    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText)
        console.log(response)
        let output = ``
        for(i = 0; i < response.length; i++){
            output += `<div id ="nutri-box" style="width: 25%; margin: 10px;">
                        <h3>Nutritional Info(per ${response[i].serving_size_g}gm)</h3>
                        <h4>${capitalizeFirstLetter(response[i].name)}</h4>
                        <p>Calories: ${response[i].calories} Cal</p>
                        <p>Carbs: ${response[i].carbohydrates_total_g} g</p>
                        <p>Protein: ${response[i].protein_g} g</p>
                        <p>Cholesterol: ${response[i].cholesterol_mg} mg</p>
                        <p>Fat: ${response[i].fat_total_g} g</p>
                        <p>Saturated fat: ${response[i].fat_saturated_g} g</p>
                        <p>Fibre: ${response[i].fiber_g} g</p>
                        <p>Potassium: ${response[i].potassium_mg} mg</p>
                        <p>Sugars: ${response[i].sugar_g} g</p>
                        <p>Sodium: ${response[i].sodium_mg} mg</p>
                       </div>`
        }
        document.getElementById('nutritionInfo').innerHTML = output
	}
    
});

xhr.open('GET', url);
xhr.setRequestHeader('X-RapidAPI-Key', '6afcb173damsh4c630189d420dd4p18ea3fjsn1c95813fde53');
xhr.setRequestHeader('X-RapidAPI-Host', 'nutrition-by-api-ninjas.p.rapidapi.com');

xhr.send(data);

});
