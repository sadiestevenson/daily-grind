//alert("ITs working!");


/* 
One unique image, with appropriate and matching content in the alt tag. 
Here are the items we need to change for each coffee: 
image-src of pic
alt- alt tag og pic
description-  a paragraph of content about the coffee
name of today's coffee
color representing coffee
 today the current day of the week
 */

function coffeeTemplate(coffee){

let myReturn = "";
 myReturn += `
 
       <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}Coffee Special:</strong> ${coffee.day}daily coffee special is <strong class="feature">${coffee.name}</strong>, which makes us wish it was always Fall, as this is one of our top sellers!
       </p>
       `;
 
 
      return myReturn;
 
}




let myDate = new Date ();
let myDay = myDate.getHours ();
let coffee = "";





Switch(myDa){
    
  case 0:
    today = "Sunday";
    break;
    
  case 2:
    today = "Tuesday";
  break;
  
 case 3:
 today = "Wednesday";
 
 coffee = {
 
 color: "pink";
  name = "Bubble Tea",
  pic: "images/bubble-tea.jpg",
  alt: "A picture of a Bubble Tea",
  Day: "Wed",
  desc: `i like bubble tea`
 
 };
  
   case 4:
 today = "Wednesday";
 
 coffee = {
 
 color: "pink";
  name = "Bubble Tea",
  pic: "images/bubble-tea.jpg",
  alt: "A picture of a Bubble Tea",
  Day: "Wed",
  desc: `i like bubble tea`
  

  
 };
 
 
  default:
  today ="Something went weong!";
  
}

alert(coffee.pic);

console.log(coffee);
