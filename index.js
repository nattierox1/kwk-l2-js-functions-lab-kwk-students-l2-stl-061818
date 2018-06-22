// Code your solution in this file!
function distanceFromHqInBlocks (street) {
 let blocks = street -42;
 return Math.abs(blocks);
}

function distanceFromHqInFeet (street) {
  let block = street - 42;
  let feet = blocks * 264; 
  return Math.abs(feet);
}


function distanceTravelledInFeet (startingBlock, endingBlock) {
 let streetDif = endingBlock - startingBlock;
 let feet = streetDif * 264;
 
 return Math.abs(feet);
}

function calculaltesFarePrice(startingBlock, endingBlock){
  if (feet <= 400); {
    return"Free sample.";
  }
}

else if (400 < feet && feet < 2000) {
  return Math.abs(feet * 0.02);
  
}


