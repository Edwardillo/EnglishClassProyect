var table = document.getElementById("responses")
var earnings = document.getElementById("tearnings")
var tpounds = document.getElementById("tpounds")
var actualTest = 0;
var currentTest = 0;
var percentperScript;
var orders = []
function order(date,name,reciever,phone,email,color,pounds,filling,frosting,decoration){
  this.date = date
  this.name = name
  this.reciever = reciever
  this.phone = phone
  this.email = email
  this.color = color
  this.pounds = parseInt(pounds)
  this.filling = filling
  this.frosting = frosting
  this.decoration = decoration
}

function updateTable(form){
  while(table.rows.length > 1) {
    table.deleteRow(1);
  }
  var e = 0;
  var p = 0;
  if(form){
    var date = form.date.value

    for (var i in orders) {
      if(orders[i].date == date){
        p += Number(orders[i].pounds)
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = orders[i].date
        cell = row.insertCell();
        cell.innerHTML = orders[i].pounds
        cell = row.insertCell();
        cell.innerHTML = orders[i].color
        cell = row.insertCell();
        cell.innerHTML = orders[i].filling
        cell = row.insertCell();
        cell.innerHTML = orders[i].frosting
        cell = row.insertCell();
        cell.innerHTML = orders[i].decoration
        cell = row.insertCell();
        cell.innerHTML = orders[i].name
        cell = row.insertCell();
        cell.innerHTML = orders[i].phone

      }
    }
  }else {
    for (var i in orders) {
      p += Number(orders[i].pounds)
      var row = table.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = orders[i].date
      cell = row.insertCell();
      cell.innerHTML = orders[i].pounds
      cell = row.insertCell();
      cell.innerHTML = orders[i].color
      cell = row.insertCell();
      cell.innerHTML = orders[i].filling
      cell = row.insertCell();
      cell.innerHTML = orders[i].frosting
      cell = row.insertCell();
      cell.innerHTML = orders[i].decoration
      cell = row.insertCell();
      cell.innerHTML = orders[i].name
      cell = row.insertCell();
      cell.innerHTML = orders[i].phone
    }
  }
  tpounds.innerHTML = p
  earnings.innerHTML = p * 900
}
function processForm(form){
  var TestVar = form.name.value;
  var o = new order(form.date.value,form.name.value,form.reciever.value,form.phone.value,form.email.value,form.color.value,form.pounds.value,form.filling.value,form.frosting.value,form.decoration.value)
  orders.push(o)
  form.reset()
  updateTable()
}
