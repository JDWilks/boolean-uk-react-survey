export default function CheckBox({ name, value, text, handleChange }) {
  return (
    <li>
      <label>
        <input
          onChange={handleChange}
          name={name}
          type="checkbox"
          value={value}
        />
        {text}
      </label>
    </li>
  );
}
