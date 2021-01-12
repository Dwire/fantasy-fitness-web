import React from 'react'

import wwcBanner from '../assets/images/winter_workout_heading.gif'
import rightArrowImg from '../assets/images/arrow_right.png'
import leftArrowImg from '../assets/images/arrow_left.png'
import moneyImg from '../assets/images/money.png'
import checkbox3Img from '../assets/images/checkbox3.png'
import weekImg from '../assets/images/week.png'
import teamWorkImg from '../assets/images/teamwork.png'
import checkXImg from '../assets/images/check_and_x.png'
import clockImg from '../assets/images/clock.png'
import noTrainersImg from '../assets/images/notrainers.png'
import teamCelibrateImg from '../assets/images/team_celibrate.png'

const HomePage = () => {
  return (
    <div>
      <div className='home-banner'>
        <img className="home-banner-image" src={wwcBanner} alt="banner"/>
      </div>

      <div className="home-intro">
        <h1>Intro</h1>
        <h3>Teams of 3 will be RANDOMLY drafted this Sunday so it's time to get re-acquainted (or just first time acquainted) with the rules. </h3>
        <p>
          The goal of this challenge is accountability and encouragement towards achieving healthy habits. 
          Push yourself past your comfort zone, some of these challenges might be difficult for you to complete. Work with your team to divvy up squares amongst yourselves. 
          A team united always beats a team divided. 
          There is real money involved and scoring is based on the honor system. One day in the distant future we will implant chips in all participants, but for now, please be honest with yourself
          and with the Winter Workout community who are all connected through direct relationships with Forrest, Brad, and Alex.
        </p>
      </div>
      <div className="rules-header">
        <h1>RULES</h1>
          {/* <img className="arrow-down-left" src={require('../assets/images/arrow_down_left.png')} alt="down left arrow"/> */}
      </div>
      <div className="home-rules">
        <div className="div1 div1-mobile">
          <img className="home-icon" src={moneyImg} alt="money"/>
          <p>There is a $50 per person entry fee. At the end of the challenge, the top team splits the grand prize($). This year there is NO 2nd place. Instead, each week will have mini pot that will go to the highest perfoming team of that week. Yo...that's like some serious chedda. We talking triple digits.</p>
        </div>
        <div className="div2 arrow-grid">
          <img className="arrow-right arrow" src={rightArrowImg} alt="right arrow"/>
        </div>
        <div className="div3 div3-mobile"> 
          <img className="home-icon" src={checkbox3Img} alt="checkbox"/>
          <p>Each team completes as many squares as possible for the current week. It is theoretically possible to complete all squares in a given week (but good luck trying!) Each square counts as 1 point. The team with the most points at the end of 6 weeks wins. FYI- there will be some flash challenges available for grabs each week! Keep your eyes glued to those message boards.</p>
        </div>
        <div className="div4 arrow-grid"> 
          <img className="arrow-left arrow" src={leftArrowImg} alt="left arrow"/>
        </div>
        <div className="div5 div5-mobile"> 
          <img className="home-icon" src={weekImg} alt="week"/>
          <p>Each week runs from Monday-Sunday. All completed challenge must be marked "completed" by 10:00 pm EST on Sunday to count for the week. The scores for the previous week will be locked in every  Monday. Late entries will not count. Do yourself a favor and do not lose points because of bad bookkeeping.</p>
        </div>
        <div className="div6 arrow-grid">
          <img className="arrow-right arrow" src={rightArrowImg} alt="right arrow"/>
        </div>
        <div className="div7 div7-mobile">
          <img className="home-icon" src={teamWorkImg} alt="teamwork"/>
          <p>Each square may only be completed once (i.e. 2 team members cannot get credit for the same square). Each square/challenge has 3 status options: "Open", "Claimed", or "Completed". Use the "Claimed" status to reserve chellenges you intend on completing, and the "Completed" status to record the point once the challenge is finished.</p>
        </div>
        <div className="div8 arrow-grid">
          <img className="arrow-left arrow" src={leftArrowImg} alt="left arrow"/>
        </div>
        <div className="div9 div9-mobile">
          <img className="home-icon" src={checkXImg} alt="check and x box"/>
          <p>Each person may complete more than 1 square per day, but each workout can only count for 1 square. For example: if you complete the "100 challenge," this does not also count for the "strength training" square. Example 2: If you run 3 miles, you can count EITHER the "run 3 miles" square or "30 mins of cardio" square - not both.</p>
        </div>
        <div className="div10 arrow-grid"> 
          <img className="arrow-right arrow" src={rightArrowImg} alt="right arrow"/>
        </div>
        <div className="div11 div11-mobile">
          <img className="home-icon" src={clockImg} alt="clock"/>
          <p>The activity in each square must be started and completed within 1 day unless otherwise stated.</p>
        </div>
        <div className="div12 arrow-grid">
          <img className="arrow-left arrow" src={leftArrowImg} alt="left arrow"/>
        </div>
        <div className="div13 div13-mobile">
          <img className="home-icon" src={noTrainersImg} alt="trainers"/>
          <p>We know that some of you are instructors, out there motivating people to move their bodies. Good for you, it's good work that we all apreciate. However, teaching a class does not count. Walking around and telling people what to do makes you cool but it ain't the same as grinding. Consider it your warm up and Get Grinding.</p>
        </div>
        <div className="div14 arrow-grid"> 
          <img className="arrow-right arrow" src={rightArrowImg} alt="right arrow"/>
        </div>
        <div className="div15 div15-mobile">
          <img className="home-icon" src={teamCelibrateImg} alt="team celibrate"/>
          <p>If a player on your team fails to complete at least 2 squares in a given week your team will lose 1 point. Sucks to suck, so don't suck. Okay? You finished hazing week. You can do this... don't be a Brad.</p> 
        </div>
      </div>

      <div className="site-contacts">
        <div className="contacts-header">
          <h1>Contacts</h1>
        </div>
        <div className="contacts-umpire">
          <h1>THE LAW</h1>
          <p>The Winter Workout Umpire crew will be lead by Kimber-lee Jacobsen. Take your complaints, inquiries and rule questions to her</p> 
          <p>Kim Cell: 774-451-3396</p> 
        </div>
        <div className="contacts-tech-support">
          <h1>SITE WARNING</h1>
          <p>This website is BUGGY! This site is in an early beta stage and will continue to be worked on throughout the Winter Workout Challenge. We are aware of many bugs that currently exist and will be working to upgrade the site both aesthetically and functionally. 
            Please contact Greg if you are unable to use the site. Remember he has a full time job outside of WWC tech support so be patient.</p>
          <p>Greg Cell: (401)793-1073</p>
        </div>
      </div>
     
    </div>
  )
}

export default HomePage




// intro - the goal of this challenge is more about accountablity and encouragment tawards achieving healthy habits. 
// some of these challenges you may not be able to complete. Work with your team to contribute squares that you can to your teams goal
// and push yourself to do a few squares you were not sure you could do.
// There is real money involved but the scoring is based on the honor system. Please be honest with yourself towards your goals of health
// and with the winter work out community who are all connected through directe relationships with Forrest, Brad, and Alex



{/* <div className='home-body'>
        	
          <p>1 There is a $50 per person entry fee. At the end of the challenge, the top team splits $480 and the 2nd place team gets their money back . Yo... That's like some serious Chedda. We talking triple digits.</p>
  
          <p> 2	Each team completes as many squares as possible in 1 week. It is theoretically possible to complete all squares in a given week (but good luck trying!) Each square counts as 1 point. The team with the most points win. (FYI- there will be some flash challenges available for grabs each week!- keep your eyes glued to those message boards.)</p>
  
          <p>3	The week runs from Monday-Sunday. All squares must be initialled (once you initial a square you will be rewarded a point) by 10PM EST on Sunday. The scores for the previous week will be locked in each Monday, late entries will not count. Do yourself a favor and do not lose points because of bad bookkeeping. Maybe you will get lucky and land an accountant on your team.</p>
  
          <p>4	Each square may only be completed once (i.e. 2 team members cannot get credit for the same square.) The person completing the square should enter their initials above the square (see game board.)</p>
  
          <p>5	Each person may complete more than 1 square in one day; however, each workout can only count for 1 square. For example: if you complete the "100 challenge," this does not also count for the "strength training" square. Example 2: If you run 3 miles, you can count EITHER the 'run 3 miles' square or '30 mins of cardio' square - not both. </p>
  
          <p>6	The activity in each square must be started and completed within 1 day unless otherwise stated.</p>
  
          <p>7	There will be a group text including all participants. This group is for updates on Flash Challenges and other 'must know' competition details. You are in no way, shape or form allowed to respond within the group texts. If you have a motherfucking question, text the game master separately. This rule is built for everyone's sanity. Your team will receive a point deduction for every text you place in this group text. NO exceptions.</p>
  
          <p>8	If a player on your team fails to complete at least two squares in a given week your team will lose 1 point. Sucks to suck, so don't suck. Okay?</p>
        </div> */}


// -There is a $50 per person entry fee. At the end of the challenge, the top team splits $? and the 2nd place team gets their money back . Yo... That's like some serious Chedda. We talking triple digits.
// -Each team completes as many squares as possible for the week they are in. It is theoretically possible to complete all squares in a given week (but good luck trying!) Each square counts as 1 point. The team with the most points at the end of six weeks wins. (FYI- there will be some flash challenges available for grabs each week!- keep your eyes glued to those message boards.)
// -Each week runs from Monday-Sunday. All squares must be initialled (once you initial a square you will be rewarded a point) by 10PM EST on Sunday. The scores for the previous week will be locked in each Monday, late entries will not count. Do yourself a favor and do not lose points because of bad bookkeeping. Maybe you will get lucky and land an accountant on your team.
// -Each square may only be completed once (i.e. 2 team members cannot get credit for the same square.) The person completing the square should enter their initials above the square (see game board.)
// -Each person may complete more than 1 square in one day; however, each workout can only count for 1 square. For example: if you complete the "100 challenge," this does not also count for the "strength training" square. Example 2: If you run 3 miles, you can count EITHER the 'run 3 miles' square or '30 mins of cardio' square - not both. 
// -The activity in each square must be started and completed within 1 day unless otherwise stated.
// -There will be a group text including all participants. This group is for updates on Flash Challenges and other 'must know' competition details. You are in no way, shape or form allowed to respond within the group texts. If you have a motherfucking question, text the Winter Workout Umpire separately. This rule is built for everyone's sanity. Your team will receive a point deduction for every text you place in this group text. NO exceptions. Yes. Liking a text counts. If we get a notification, you loose a point. The Winter Workout Umpire crew will be lead by Kimber-lee Jacobsen. Take your complaints, inquiries and rule questions to her: 774-451-3396
// -If a player on your team fails to complete at least two squares in a given week your team will lose 1 point. Sucks to suck, so don't suck. Okay? You finished hazing week. You can do this.
// -We know that some of you are instructors. Out there motivating people to move their bodies. Good for you, it's good work that we all apreciate. However, teaching a class does not count. Walking around and telling people what to do makes you cool but it ain't the same as grinding. Consider it your warm up and Get Grinding.

// intro - the goal of this challenge is about accountability and encouragement towards achieving healthy habits. 
// some of these challenges might be difficult for you to complete. Work with your team to divide the squares amongst yourselves. A team united always beats a team divided. 
// and push yourself to do a few squares you were not sure you could do. 
// There is real money involved but the scoring is based on the honor system. One day in the distant future we will implant chips on all participants, but for now, please be honest with yourself
// and with the winter work out community who are all connected through direct relationships with Forrest, Brad, and Alex.  



