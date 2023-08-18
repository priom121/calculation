function calculateTriangleArea(){
                              // triangle base 
    const baseValueText = document.getElementById('base-triangle');
    const baseValueString = baseValueText.value ;
    const base = parseFloat(baseValueString);
    console.log(base);  
//     height
const heightValueText = document.getElementById('height-triangle') ;
const heightValueString = heightValueText.value;
const height = parseFloat(heightValueString);
console.log(height); 
// area
const area = 0.5 * base * height;
console.log(area);
 
const areaSpan = document.getElementById('triangle-area');
areaSpan.innerText = area;
}

// Reusable Rectangle  function///

function calculateRectangleArea (){
   const width = InputField('width-Rectangle')
   console.log(width);
 const length = InputField('length-Rectangle');
 console.log(length);
 const area = width * length;
 setElementInnerText('Rectangle-area',area);
}


function calculateParallelogramArea(){
  const baseParallelogram = InputField('base-Parallelogram')
  const heightParallelogram=InputField ('height-Parallelogram');
  const area = baseParallelogram * heightParallelogram;
  setElementInnerText('Parallelogram-area',area)
}


// common function of rectangle , parallelogram , ellipsis.....

function InputField(filedId){
  const inputValueText =document.getElementById(filedId) ;
  const inputValueString = inputValueText.value ; 
  const value = parseFloat(inputValueString);
  return value;
}

// area set ----------
function setElementInnerText (elementId,area){
  const element  = document.getElementById(elementId);
  element.innerText = area;

}


