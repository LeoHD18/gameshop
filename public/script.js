var num_fifa = 0; 
var num_sims = 0; 
var num_war = 0; 
var num_fm = 0; 
var num_red = 0; 
var num_witcher = 0; 
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const form = document.getElementById('checkout-form')
const inputCard = document.querySelector('#inputCard')
const alertTrigger = document.getElementById('submit-btn')




function increase(n){
    switch (n){
        case 1:
            num_fifa += 1;
            fifa_display.value = num_fifa;
            break;
        case 2:
            num_fm += 1;
            fm_display.value =  num_fm;
            break;
        case 3:
            num_sims += 1;
            sims_display.value = num_sims;
            break;
        case 4:
            num_war += 1;
            war_display.value = num_war;
            break;
        case 5:
            num_witcher +=1;
            witcher_display.value = num_witcher;
            break;
        case 6:
            num_red +=1;
            red_display.value = num_red;
            break;
    }
}
function decrease(n){
    switch(n){
        case 1:
            num_fifa -= 1;
            if(num_fifa < 0){
                num_fifa = 0;
            }
            fifa_display.value = num_fifa;
            break;
        case 2:
            num_fm -= 1;
            if(num_fm < 0){
                num_fm = 0;
            }
            fm_display.value = num_fm;
            break;
        case 3:
            num_sims -= 1;
            if(num_sims < 0){
                num_sims = 0;
            }
            sims_display.value = num_sims;
            break;
        case 4:
            num_war -= 1;
            if(num_war < 0){
                num_war = 0;
            }
            war_display.value = num_war;
            break;
        case 5:
            num_witcher -= 1;
            if(num_witcher < 0){
                num_witcher = 0;
            }
            witcher_display.value = num_witcher;
            break;
        case 6:
            num_red -= 1;
            if(num_red < 0){
                num_red = 0;
            }
            red_display.value = num_red;
            break;

    }
    
}

function gameSearch(){
    const input_search = document.getElementById('Search');
    const game_list = document.getElementById("game_list");
    const games = game_list.getElementsByClassName('card');
    input = input_search.value.toUpperCase();
    for(let i = 0; i< games.length; i ++) {
        var title = games[i].querySelector(".card-body .game_title");
    
    if(title.innerHTML.toUpperCase().indexOf(input) > -1 ) {
        games[i].style.display = "";
    }
    else {
        games[i].style.display = "none";
    }
}
}

const alert =(message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<div>${message}</div>`,
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
    

form.addEventListener('submit', event => {
    if(!validate()){
        alertPlaceholder.innerHTML =""
            alert('<i class ="bi-exclamation-circle"></i> Something went wrong!', 'danger')
    }
    event.preventDefault()
    event.stopPropagation()
}, false)

let validate = function(){
    val = true;
    let email = document.getElementById('inputEmail4')
    let name = document.getElementById('inputName')
    let card = document.getElementById('inputCard')
    let address = document.getElementById('inputAddress')
    let city = document.getElementById('inputCity')
    let zipcode = document.getElementById('inputZip')
    let state = document.getElementById('inputState')
    let address2 = document.getElementById('inputAddress2')
   
    
    if (!email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
      email.setAttribute("class", "form-control is-invalid");
      val = false;
    }
    else{
        email.setAttribute("class", "form-control is-valid");
        // order.Email = email.value
    }
  
    if (name.value.length == 0)
    {
      name.setAttribute("class","form-control is-invalid")
      val = false
    }
    else{
      name.setAttribute("class", "form-control is-valid");
    //   order.Name = name.value
    }
  
    if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/))
    {
      card.setAttribute("class","form-control is-invalid")
      val = false
    }
    else{
      card.setAttribute("class", "form-control is-valid");
    //   order.Card = card.value
    //   order.Card = "****-****-****-" + order.Card.substring(15) 
    }
  
    if (!address.value.match(/(\d{1,}) [a-zA-Z0-9\s]/))
    {
      address.setAttribute("class","form-control is-invalid")
      val = false
    }
    else{
      address.setAttribute("class", "form-control is-valid");
    //   order.Address = address.value
    }
  
    var address22 = address2.value
    if (address22.length != 0 )
    {
      order.Address += " " + address22 + " "
    }
  
    if (!city.value.match(/[a-zA-Z0-7\s]/))
    {
      city.setAttribute("class","form-control is-invalid")
      val = false
    }
    else{
      city.setAttribute("class", "form-control is-valid");
    //   order.Address += " " + city.value
    }
  
    if (state.value.match("Choose..."))
    {
      state.setAttribute("class","form-control is-invalid")
      val = false
    }
    else{
      state.setAttribute("class", "form-control is-valid");
    //   order.Address += " " + state.value
    }
  
    if (!zipcode.value.match(/(^\d{5}$)/))
    {
      zipcode.setAttribute("class","form-control is-invalid")
      val = false
    }
    else{
      zipcode.setAttribute("class", "form-control is-valid");
    //   order.Address += " " + zipcode.value
    }
    
  
  
  
   
  
    if (val){
      form.classList.add("collapse")
      button_return.classList.add("collapse")
      for (const [key, value] of Object.entries(order)) {
          summaryList.innerHTML += '<li class="list-group-item"> <b>' + `${key}` + ': </b>' + `${value}` +'</li>'
      }
      summaryCard.classList.remove("collapse")
      alertPlaceholder.innerHTML = ""
      alert('<i class="bi-cart-check-fill"></i> You have made an order!', 'success')
    }
    return val;
  }

if (val){
    alertPlaceholder.innerHTML = ""
    alert('<i class="bi-cart-check-fill"></i> You have made an order!', 'success')
  }
