function weather(city){
    const app = document.querySelector('.app');
const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?key=54WVMZ4EWS8679EM88HNGW7MC"
axios.get(url)

.then(function(response){
    console.log(response)
    response= response.data
    var weather="<main class='main-container'>"
    weather +="<div class='location-and-date'>"
    weather += "<h1 class='location-and-date__location'>"+city.charAt(0).toUpperCase() + city.slice(1)+"</h1> <div>"+new Date(response.days[0].datetime).toDateString()+"</div>"

    weather +="</div>"
    weather +="<div class='current-temperature'>"
    // weather +="<div class='current-temperature__icon-container'>"
    // weather +="<img src='icons/"+response.days[0].icon+".svg' class='current-temperature__icon' id='img'>"
    // weather +="</div>"
    weather +="<div class='current-temperature__content-container'>"
    weather +="<div class='current-temperature__value' id='temp'>"+([(response.days[0].temp-32)*5]/9).toFixed(1)+"&deg;</div>"
    weather +="<div class='current-temperature__summary' id='weather'>"+response.days[0].conditions+"</div>"
    weather +="</div>"
    weather +="</div>"

    weather +='<div class="current-stats">'
      weather +='<div>'
        weather +="<div class='current-stats__value'>"+([(response.days[0].tempmax-32)*5]/9).toFixed(0)+"&deg;</div>"
        weather +='<div class="current-stats__label">High</div>'
        weather +="<div class='current-stats__value'>"+([(response.days[0].tempmin-32)*5]/9).toFixed(0)+"&deg;</div>"
        weather +='<div class="current-stats__label">Low</div>'
        weather +='</div>'
        weather +='<div>'
          weather +='<div class="current-stats__value">7mph</div>'
          weather +='<div class="current-stats__label">Wind</div>'
          weather +='<div class="current-stats__value">0%</div>'
          weather +='<div class="current-stats__label">Rain</div>'
          weather +='</div>'
          weather +='<div>'
            weather +="<div class='current-stats__value'>"+response.days[0].sunrise+"</div>"
            weather +='<div class="current-stats__label">Sunrise</div>'
            weather +="<div class='current-stats__value'>"+response.days[0].sunset+"</div>"
            weather +='<div class="current-stats__label">Sunset</div>'
            weather +='</div>'
            weather +='</div>'
    weather +="</main>"
    document.getElementById("app").innerHTML= weather;
})

  .catch(function (error) {
    // handle error
    console.log(error);
  })

  .finally(function () {
    console.log("all asdvb")
    // always executed
  });
}
function call(){
    var e=  document.getElementById("input").value;
    console.log(e)
    weather(e)
  }