import React, { useState } from "react";
import './Current.css'
import Story from "./story";

let allStories = [
  {
    imageSource: "https://www.islamcan.com/islamic-pictures/masjid.jpg",
    title: "1- Wisdom of Iyas Ibn Muawiyah",
    story:
      <p>
        A man came to Iyas Ibn Mu'awiyah, a Muslim judge famous for his wisdom, and the following conversation took place between them:<br />
        Man: What is the Islamic ruling regarding wine?<br />
        Judge: It is Haram (Forbidden).<br />
        Man: How about water?<br />
        Judge: It is Halal (Permissible).<br />
        Man: How about dates and grapes?<br />
        Judge: They are Halal.<br />
        Man: Why is it that all these ingredients are Halal, and yet when you combine them, they become Haram?<br />
        The judge looked at the man and said: If I hit you with this handful of dirt, do you think it would hurt you?<br />
        Man: It would not.<br />
        Judge: How about if I hit you with this handful of straw?<br />
        Man: It would not hurt me.<br />
        Judge: How about a handful of water?<br />
        Man: It surely would not hurt me.<br />
        Judge: How about if I mix them, and let them dry to become a brick, and then hit you with it, would it hurt you?<br />
        Man: It would hurt me and might even kill me!<br />
        Judge: The same reasoning applies to what you asked me!!<br />
        Iyas Ibn Muawiyah Al-Muzani was a tabi'i Qadi (judge) in the 2nd century AH who lived in Basra (modern day Iraq). He was renowned for possessing immense cleverness which became a favourite topic in Arabic folklore.<br />
      </p>,
   
  },
  {
    imageSource: "https://www.islamcan.com/islamic-pictures/magrib.jpg",
    title: "2- Chaos in a Restaurant",
    story:
      "A son took his old father to a restaurant for an evening dinner. Father being very old and weak, while eating, dropped food on his shirt and trousers. Other diners watched him in disgust while his son was calm. After he finished eating, his son who was not at all embarrassed, quietly took him to the washroom, wiped the food particles, removed the stains, combed his hair and fitted his spectacles firmly. When they came out, the entire restaurant was watching them in dead silence, not able to grasp how someone could embarrass themselves publicly like that. The son settled the bill and started walking out with his father. At that time, an old man amongst the diners called out to the son and asked him, Don't you think you have left something behind?. The son replied, No sir, I havent. The old man retorted, Yes, you have! You left a lesson for every son and hope for every father. The restaurant went silent. One of the biggest honors that exist, is able to take care of those older adults who ever cared for us too. Our parents, and all those elderly who sacrificed their lives, with all of his time, money and effort by us, deserve our utmost respect. If you also feel respect for older adults, share this story with all your friends.",
   
  },
  {
    imageSource: "https://www.islamcan.com/islamic-pictures/quran-kabah.jpg",
    title: "3- Allah's Pharmacy",
    story:
      "'Allah is All-Knowing All-Wise' Quran 76:30 A sliced Carrot looks like the human eye The pupil, iris and radiating lines look just like the human eye...and YES science now shows that carrots greatly enhance blood flow to and function of the eyes. Grapes hang in a cluster that has the shape of the heart. Each grape looks like a blood cell and all of the research today shows that grapes are also profound heart and blood vitalizing food .",
   
  },
  {
    imageSource: "https://www.islamcan.com/islamic-pictures/zayed-mosque.jpg",
    title: "4- The Lost Ring",
    story:
      "Once a young man lost his ring. He went to search for it under the bright street light. Others who saw him desperately searching for a missing ring, came to help him.When no one was successful in finding the ring, people asked him if he was sure that he dropped the ring in this place. He said, 'No, I lost it there,' and pointed to his house. Furious, the people asked: 'Then why are you looking for it here?' The young man, trying to look clever said, 'Because it is dark where I lost it, and this place is bright with light!' Everyone thought he was a fool and told him to go and search for the ring where he actually lost it. What we can learn from this story is that while our success lies in preparing for the hereafter, we are too busy looking for it in this world. If we spend all our lives only looking for success in this world, we will soon leave empty handed and take nothing with us.",
   
  },
];

function CurrentStory() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [backDisabled, setBackDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const nextStory = () => {
    let b = currentStoryIndex;
    b++;

    if (b > 3)
      setNextDisabled(true);
    else
      setCurrentStoryIndex(b);

    if (b > 0) {
      setBackDisabled(false);
    }

  };


  const backStory = () => {
    let a = currentStoryIndex;
    a--;

    if (a < 0) {
      setBackDisabled(true);
    } else setCurrentStoryIndex(a);
    if (a < 3) {
      setNextDisabled(false);
    }
  };

  return (
    <div className='main'>

      <Story
        storyTitle={allStories[currentStoryIndex].title}        
        story={allStories[currentStoryIndex].story}
        imageSource={allStories[currentStoryIndex].imageSource}
      />
      <br />
      <button disabled={backDisabled} onClick={backStory}>
        Back
      </button>
      <button disabled={nextDisabled} onClick={nextStory}>Next</button>
    </div >
  );
}

export default CurrentStory;
