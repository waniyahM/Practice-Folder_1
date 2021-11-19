var input,heading;
function setup(){
createCanvas(300,200);
background (178,255,102);
input = createInput();
input.positon(5, 60);
heading = createElement("h4","Enter any alphabet:");
heading.position(5,20);
textAlign(CENTER);
textSize(50);
}
function draw(){
    const value = input.value();
    switch(value){
        case 'a':
       console.log("vowel");
      break;
      case 'e':
      console.log("vowel");
      break;
      case 'i':
          console.log("vowel");
          break;
        case 'o':
            console.log("vowel");
            break;
        case 'u':
            console.log("vowel");
            break;
        default:
            console.log("Enter any character");
            
    }
}