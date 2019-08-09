import React from "react";
import Confetti from "react-dom-confetti";

class Output extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      saved: false
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.makeConfetti = this.makeConfetti.bind(this);
  }

  toggleClass() {
    //this.makeConfetti();
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  makeConfetti = () => {
    this.setState({ ...this.state, active: true });

    setTimeout(() => {
      this.setState({ ...this.state, active: false });
    }, 300);
  };

  renderLetter(name) {
    switch (name) {
      case "Brady":
        return "Oh Brain where to start. When I first saw you, I knew you were a Brad and could not be luckier to have a great drinking partner, as well as an excellent mentor. I was skeptical at first on how another intern was going to be my boss, but it actually was the best thing to happen to me. You're big ass head will take you very far in your life and I will see you on Monday. 🧠";
      case "Ethan":
        return "Ethan, my second dad, I don't know how many times you fucked my head with all of your wisdom and history stories when I got here. Literally the first week I learned more about American history and how things worked than I did in any class I took in college. You introduced a new way of thinking to me that will definitely be in my mind for the rest of my life. Whether it'd be the Golden Circle or Hypothesis Driven testing, your mentorship and guidance for me was invaluable and I hope our Patagonia vests will meet again in the near future. 🇺🇸";
      case "Eric":
        return "Eric, I am upset I did not try to connect with you more during this internship as you were nice and helpful to me whenever I needed it and provided me with great career advice. You went out of your way to help me whenever I needed it and even warned me of Danielle's unforgiving resume roasts 😨. Even though we did not work together as extensively as I liked, the times we did were great and you are a great teacher! Thanks again Eric!";
      case "Dan":
        return "Dan, thank you for always taking the time to make sure I’m ok. You were very welcoming in the beginning and really made me feel comfortable during my time here, even though you worked remotely. 😂";
      case "Danielle":
        return "Danielle, my sister mom, I wish you came to the Boston office more because I felt like you, me, and Brady have a funny sibling dynamic that would have made the days 100% funnier. Thank you, for tolerating my incompetence in the beginning with using JIRA and how our work flow works. You are a great PO and gave me great advice on what to do when I graduate next year. When you said “you’re friends and family will always be home” and to explore a new city, I think that stuck with me the most. Please don’t roast my IG posts when I’m gone. 😰";
      case "David":
        return "David, I cannot thank you enough for hiring me. I don't believe I have ever had so much fun at work and am honored to have been able to work with the ICT squad. You are a great bowler and also one of the smartest people I have ever worked with. I hope to work with you again in the future, as your leadership and knowledge provided me great insight into what a great leader is. 🎓📚";
      case "Marcus":
        return "Marcus, my man, I am so happy you were my intern buddy because not only did teach me a lot about React and Redux, but also gave me thoughtful career advice as well as great sports banter. I am going to miss our sports talks in the mornings and I hope to see you in Philly some time! Please reach out to me whenever you are around the Philly area and I can take you to our staple cheesesteak destinations. 😋";
      case "Sid":
        return "Sid, we did not work much together, but we did work A LOT during that damn volunteer event. Regardless, the few times I did ask for help you were prompt and helpful. Thanks Sid! I hope we never sand and paint another damn pool again. 🥵";
      case "Paul":
        return "Tall, thank you for being an amazing mentor and teaching me so much throughout the internship. You were really good at getting me and Tejna up to speed and made work a joy to come to everyday. Your guidance was crucial in the success of my internship and cannot thank you enough for it. I am happy I will never have to tell a pencil joke again and also can't believe I bought a hawaiian shirt. The thing I will miss the most though, are the Tall-Paul-Talks. I will most likely be adding you on Facebook because not only are you a great teacher and friend, but a promising financial advisor as well. 🌴";
      case "Ryan":
        return "Ryan, when I first met you I did not expect you to be so funny. I am so happy I got the chance to work alongside you because to me you provide a very calming and happy vibe. I still have no clue what your slack picture is, but thank you for being so helpful and patient when working with me. I hope you like your gift because I thought it was funny af. Thanks, Ryan! ❤️";
      case "Tejna":
        return "Tejna, I better see you exploring another city next summer and not back in Boston. Even though I am only 2 years older than you I appreciate the fact that you trusted me with my guidance and advice. I know I came off a little intimidating in the beginning, but you are right I am a softie on the inside and so is Brady. I am grateful to have been able to work alongside you and it was a great journey that we took together :) Please don't hesitate to reach out to me about any questions you have about life or CS stuff. 😄";
    }
  }

  render() {
    return (
      <div className="mm-calc-output" style={{ padding: 14 }}>
        <h1 className="title">Eddy's Appreciation Calculator</h1>
        {!this.state.saved && (
          <button
            style={{ float: "right" }}
            type="submit"
            class="btn btn-primary"
            id="calc_college_submit"
            onClick={event => {
              this.setState({ ...this.state, saved: true });
            }}
          >
            Save
          </button>
        )}
        {this.state.saved && (
          <p>
            This feature is coming soon! Create an account now and get helpful
            financial resources plus access to your saved results when the
            feature is available.
          </p>
        )}
        <div className="card-container">
          <div
            className={this.state.active ? "card flipped" : "card"}
            onClick={this.toggleClass}
          >
            <div className="front">
              {" "}
              <h1 style={{ border: "solid #009cde 1px", padding: 100 }}>
                Thank you!
                <br />
                {this.props.val}
              </h1>
            </div>
            <div className="back">
              <p>{this.renderLetter(this.props.val)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Output;
