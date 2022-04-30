//challenge 1
function ageInDays (){
    var birthYear = prompt('what year were you born');
    var ageInDayss = (2022-birthYear)*365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode('You are'+' ' + ageInDayss + ' ' + 'days of age')
    h3.setAttribute('id','ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h3);

}
function reset (){
    document.getElementById('ageInDays').remove();
}
