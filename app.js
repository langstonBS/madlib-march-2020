
//check the js is loading 
console.log('i have loaded');
//Get dom elements


//git inputs by id
const nameIs = document.getElementById('Name');//the author name
const pWord1 = document.getElementById('Aword1');//first word
const pWord2 = document.getElementById('Aword2');
const pWord3 = document.getElementById('Aword3');
const pWord4 = document.getElementById('Aword4');
const pWord5 = document.getElementById('Aword5');
const pWord6 = document.getElementById('Aword6');
const pWord7 = document.getElementById('Aword7');
const pWord8 = document.getElementById('Aword8');
const pWord9 = document.getElementById('Aword9');
const pWord10 = document.getElementById('Aword10');
const pWord11 = document.getElementById('Aword11');
const pWord12 = document.getElementById('Aword12');
const pWord13 = document.getElementById('Aword13');


//let AuthorName = document.getElementById('AName');
//gets the input contatiner
const inputContatner = document.getElementById('input-contatiner');
const madLibContatner = document.getElementById('madlib-container');

//is the butten ID
const buttenPress = document.getElementById('madlib-butten');

//event listner for butten clikc and call change words 
buttenPress.addEventListener('click', chageWords);

//event listener to  chage somthing
function chageWords(){
    // checks if butten words
    console.log('buton workds');
    //gets the autor name
    console.log(nameIs);
    console.log(pWord1);
    console.log(pWord2);
    console.log(pWord3);
    console.log(pWord4);
    console.log(pWord5);
    console.log(pWord6);
    console.log(pWord7);
    console.log(pWord8);
    console.log(pWord9);
    console.log(pWord10);
    console.log(pWord11);
    console.log(pWord12);
    console.log(pWord13);
    
    const AuthorName = document.getElementById('AName');
    AuthorName.textContent = nameIs.value;

    const anserer1 = document.getElementById('word1');
    anserer1.textContent = pWord1.value;

    const answer2 = document.getElementById('word2');
    answer2.textContent = pWord2.value;

    const answer3 = document.getElementById('word3');
    answer3.textContent = pWord3.value;

    const answer4 = document.getElementById('word4');
    answer4.textContent = pWord4.value;

    const answer5 = document.getElementById('word5');
    answer5.textContent = pWord5.value;

    const answer6 = document.getElementById('word6');
    answer6.textContent = pWord6.value;
    
    const answer7 = document.getElementById('word7');
    answer7.textContent = pWord7.value;
   
    const answer8 = document.getElementById('word8');
    answer8.textContent = pWord8.value;
   
    const answer9 = document.getElementById('word9');
    answer9.textContent = pWord9.value;
    
    const answer10 = document.getElementById('word10');
    answer10.textContent = pWord10.value;
   
    const answer11 = document.getElementById('word11');
    answer11.textContent = pWord11.value;
   
    const answer12 = document.getElementById('word12');
    answer12.textContent = pWord12.value;
    
    const answer13 = document.getElementById('word13');
    answer13.textContent = pWord13.value;
  
    //change the code and 
    inputContatner.style.display = 'none';
    madLibContatner.style.display = 'block';
}
//get butten imputs

//fuction that
//get user ellenmtes
//add elemets to the scrip poem
//show the poem now changed 


