// reusable function--------------------

function calculateTriangleArea(){
const baseTriangle = InputField('base-triangle')
const heightTriangle = InputField('height-triangle')
const area = 0.5 * baseTriangle * heightTriangle;
setInnerTextField('triangle-area', area)
}

// rectangle-------------start
function calculateRectangleArea(){
  const widthRectangle = InputField('width-Rectangle');
  const lengthRectangle = InputField('length-Rectangle');
  const area = widthRectangle*lengthRectangle;
  setInnerTextField('Rectangle-area', area)

  if(isNaN(widthRectangle)|| isNaN(lengthRectangle)){
    alert('please provide me a number');
    return
  } 
  
}
  


// parallelogram-----start----------
function calculateParallelogramArea(){
  const baseParallelogram = InputField('base-Parallelogram')
  const heightParallelogram = InputField('height-Parallelogram')
  const area = baseParallelogram * heightParallelogram;
  setInnerTextField ('Parallelogram-area', area);
}

// Ellipsis ---- start------------

function calculateEllipsisArea() {
  const majorRadius = InputField('major-radius')
  const MinorRadius = InputField('minor-radius');
  const area = 3.14* majorRadius * MinorRadius;
  setInnerTextField('elipsis-area',  area)
}

// pentagon-------start----

function calculatePentagonArea() {
  const press = InputField('press')
  const base = InputField('base')
  const area = 0.5* press * base;
  setInnerTextField('pentagon-area', area)
  
}

// common function for triangle,, rectangle,, Parallelogram ,,
function InputField (elementId){
const elementTextValue = document.getElementById(elementId);
const elementTextString = elementTextValue.value ;
const value =parseFloat(elementTextString);
return value;
}

// set function for every geometry...

function setInnerTextField (elementId ,area){
const triangleArea = document.getElementById(elementId);
triangleArea.innerText = area;
}



