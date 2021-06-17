import { useState } from "react";
import CheckBoxesGroup from "./CheckBoxesGroup";
import RadioButtonsGroup from "./RadioButtonsGroup";

const bestFeaturesCheckboxes = [
  {
    name: "bestFeatures",
    value: "colour",
    text: "It's yellow!",
  },
  {
    name: "bestFeatures",
    value: "sound",
    text: "It Squeaks!",
  },
  {
    name: "bestFeatures",
    value: "logo",
    text: "It has a logo!",
  },
  {
    name: "bestFeatures",
    value: "size",
    text: "It's big!",
  },
];

//cahnge
const worstFeaturesCheckBoxes = [
  {
    name: "worstFeatures",
    value: "colour",
    text: "It's yellow!",
  },
  {
    name: "worstFeatures",
    value: "sound",
    text: "It Squeaks!",
  },
  {
    name: "worstFeatures",
    value: "logo",
    text: "It has a logo!",
  },
  {
    name: "worstFeatures",
    value: "size",
    text: "It's big!",
  },
];
//change
const spendTimeCheckboxes = [
  {
    name: "spendTimeFeatures",
    value: "water1",
    text: "Swimming!",
  },
  {
    name: "spendTimeFeatures",
    value: "water2",
    text: "Bathing!",
  },
  {
    name: "spendTimeFeatures",
    value: "speak",
    text: "Chatting!",
  },
  {
    name: "spendTimeFeatures",
    value: "dontSpeak",
    text: "I don't speak to it - its a big of cheap plastic!",
  },
];
export default function Form() {
  const [bestFeatures, setBestFeatures] = useState([]);
  const [worstFeatures, setWorstFeatures] = useState([]);
  const [spendTimeFeatures, setSpendTimeFeatures] = useState([]);

  //get handle fucntion to workwith respective state

  function handleBestFeatures(event) {
    console.log("event", event.target.name, event.target.value);
  }

  function handleWorstFeatures(event) {
    console.log("event", event.target.name, event.target.value);
  }
  function handleSpendTimeFeatures(event) {
    console.log("event", event.target.name, event.target.value);
  }
  console.log("state", bestFeatures, worstFeatures, spendTimeFeatures);

  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <CheckBoxesGroup
          checkboxes={bestFeaturesCheckboxes}
          handleChange={handleBestFeatures}
        />
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <CheckBoxesGroup
          checkboxes={worstFeaturesCheckBoxes}
          handleChange={handleWorstFeatures}
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <RadioButtonsGroup />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtonsGroup />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <RadioButtonsGroup />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckBoxesGroup
          checkboxes={spendTimeCheckboxes}
          handleChange={handleSpendTimeFeatures}
        />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
