const planets=document.querySelectorAll('.planet');
const planetData=[
    {
        name:'mercury',distance:40,
        speed:1.4
    },
    {
        name:'venus',distance:80,
        speed:1.1
    },
    {
        name:'earth',distance:120,
        speed:0.9
    },
    {
        name:'mars',distance:160,
        speed:0.7
    },
{
    name:'jupiter',distance:200,
    speed:0.6
},
{
    name:'saturn',distance:240,
    speed:0.5
},
{
name:'uranus',distance:280,
speed:0.3
},
{
    name:'neptune',distance:320,
    speed:0.2
},
{
    name:'pluto',distance:350,
speed:0.1
}

];

function movePlanets(){
    const currentTime=new Date().getTime();
planetData.forEach(planet=>{
const planetElement=document.querySelector(`.${planet.name}`);
const angle=(currentTime*planet.speed)/1000;
const x=planet.distance* Math.cos(angle);
const y=planet.distance*Math.sin(angle);
planetElement.style.transform=`translate(${x}px, ${y}px)`;
});
    
requestAnimationFrame(movePlanets);
}

movePlanets();