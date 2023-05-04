import React from 'react';

const fakeInterview = [
  {
    whom: "Interviewer",
    text: "Carrie, it's great to have you here. Let's start with your iconic role as Princess Leia in Return of the Jedi. What was your experience like filming this movie?"
  },
  {
    whom: "Carrie Fisher",
    text: "Thank you for having me. Return of the Jedi was a fun and challenging experience. It was great to be back with the cast and crew and to see the evolution of my character, Princess Leia."
  },
  {
    whom: "Interviewer",
    text: "Can you tell us about some of the challenges you faced during the filming of this movie?"
  },
  {
    whom: "Carrie Fisher",
    text: "Well, there were a lot of challenges, both physical and emotional. The bikini scene was definitely a physical challenge, but I tried to approach it with humor and not take it too seriously. On an emotional level, saying goodbye to the character and the franchise was difficult."
  },
  {
    whom: "Interviewer",
    text: "Speaking of the bikini scene, it has become one of the most iconic moments in the Star Wars franchise. What was your reaction to the attention it received?"
  },
  {
    whom: "Carrie Fisher",
    text: "It was a bit surprising, to be honest. I never thought the scene would become as iconic as it has. But I'm glad that it has inspired women to embrace their bodies and feel empowered."
  },
  {
    whom: "Interviewer",
    text: "Lastly, do you have any favorite memories or moments from filming Return of the Jedi?"
  },
  {
    whom: "Carrie Fisher",
    text: "There are so many great memories from filming that movie. But one moment that stands out is the scene where Leia finally tells Han Solo that she loves him. It was a long time coming, and it was a great moment for the characters and the fans."
  },

]

const Interview1 = () => {

  return (
    <article>
      <h2>Interview with Carrie Fisher for May 4th, 2023 (heading 2)</h2>
      <p>Look at the source code for this section, very little code, but an array for the interview.</p>
      {
        fakeInterview.map(item => (
          <div className='interview-line'>
            <span className='speaker'>{item.whom}</span>
            <span className={item.whom === "Interviewer"? 'interviewer' : ''}>{item.text}</span>
          </div>
        ))
      }
    </article>
  )
}

export default Interview1;