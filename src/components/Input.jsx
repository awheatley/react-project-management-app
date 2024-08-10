export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label htmlFor={props.id}>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}