const API_KEY = `d27ad3921daa2f91ec33fd6c83c9df89`;

const loadWeater = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then (res => res.json())
    .then (data => displayWeather(data))
}

// Display Weather

const displayWeather = data =>{

    setInnertextById("temparature", data.main.temp)
    setInnertextById("city", data.name)
    setInnertextById("weather-condition", data.weather[0].main)

}

const setInnertextById = (id, text) =>{
    const getId = document.getElementById(id);
    getId.innerText = text;
}

// Search City

document.getElementById("search-btn").addEventListener("click", function(){
    const searchField = document.getElementById("search-field")
    const searchValue = searchField.value;
    searchField.value = '';
    loadWeater(searchValue)
})



loadWeater("gazipur")