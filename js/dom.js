let cellak = document.getElementsByClassName('cella');

for( let i=0; i< cellak.length; i++){
    console.log( cellak[i].innerHTML )
}


for( let i=5; i< cellak.length; i++){
    cellak[i].innerHTML = (i+1);
}

document.getElementById('r1c1').style.backgroundColor='darksalmon';
document.getElementById('r1c1').style.color='purple';
document.getElementById('r3c1').style.border='2px dotted yellow';

/*
függvény
<div id="r1c1" class="cella">A</div>
           <div id="r1c2" class="cella">B</div>
           <div class="cella">C</div>
           <!-- -->
           <div class="cella">D</div>
           <div class="cella">E</div>
           <div class="cella">F</div>
           <!-- -->
           <div id="r3c1" class="cella">G</div>
           <div class="cella">H</div>
           <div class="cella">I</div>
*/



    