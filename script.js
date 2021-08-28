const Stats = {
  cash: new OmegaNum(0),
  
}

function newSave()
{
 const Stats = {
  cash: new OmegaNum(0),
  
}
}

load()
function save(){
  localStorage.setItem("JSONONSave",JSON.stringify(Stats))
}
function load(){

  var loadStats = JSON.parse(localStorage.getItem("JSONONSave"))
  if (typeof loadStats.cash != undefined)
    {
      Stats.cash = new OmegaNum(loadStats.cash)
    }
}
function update()
{
      document.getElementById("money").innerHTML = Stats.cash
}
function give()
{
  Stats.cash = Stats.cash.add(Stats.cash.add(1))
   update()

}
