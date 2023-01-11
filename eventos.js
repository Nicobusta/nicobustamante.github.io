/* const colorSwitch = document.querySelector('#switch input[type="checkbox"]'); */
document.getElementById('luna').style.display="none";


document.getElementById('sol').addEventListener("click", function( ){
    document.documentElement.setAttribute('tema', 'dark');
    document.getElementById('sol').style.display="none";
    document.getElementById('luna').style.display="block"; 
});

document.getElementById('luna').addEventListener("click", function( ){
    document.documentElement.setAttribute('tema', 'light');
    document.getElementById('luna').style.display="none";
    document.getElementById('sol').style.display="block"; 
});         
        