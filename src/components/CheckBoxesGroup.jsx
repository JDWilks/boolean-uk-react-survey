import CheckBox from "./CheckBox";

export default function CheckBoxesGroup({ checkboxes, handleChange }) {
  // const checkboxes = [
  //   {
  //     name: "bestFeatures",
  //     value: "colour",
  //     text: "It's yellow!"
  //   },
  //   {
  //     name: "bestFeatures",
  //     value: "sound",
  //     text: "It Squeaks!"
  //   },
  //   {
  //     name: "bestFeatures",
  //     value: "logo",
  //     text: "It has a logo!"
  //   },
  //   {
  //     name: "bestFeatures",
  //     value: "size",
  //     text: "It's big!"
  //   }
  // ]

  return (
    <ul>
      {checkboxes.map((checkbox) => (
        <CheckBox
          name={checkbox.name}
          value={checkbox.value}
          text={checkbox.text}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
}
