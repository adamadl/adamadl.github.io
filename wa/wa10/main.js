const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "In the heart of a bustling metropolis, where skyscrapers touched the clouds, :insertx: ventured out on a scorching day with the temperature soaring at 94 fahrenheit, bravely braving the concrete jungle. As they navigated the city's labyrinthine streets, they stumbled upon a hidden gem, :inserty:, a place of wonder and mystery. In that moment, under the relentless heat, they experienced a revelation, and :insertz: forever altered their perspective. Bob, an astute observer, shared in their newfound enlightenment, with the knowledge that :insertx: carried 300 pounds, marking the beginning of an unexpected journey.";
const insertX = ['Oscar the Elf', 'Mighty Zeus', 'Papa Noel'];
const insertY = ['the local cafe', 'an amusement park', 'a prestigious mansion'];
const insertZ = ['vanished in a puff of smoke', 'disintegrated into a pile of ashes', 'transformed into a tiny bird and flew away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

  if(customName.value !== '') {
    const name = customName.value;
    const placeholder = 'Bob'
    newStory = newStory.replace(placeholder, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32) * 5/9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}