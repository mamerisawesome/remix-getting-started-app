import { InputHTMLAttributes } from "react";

type InputProps = {
  error?: string;
  id?: string;
  label?: string;
} & InputHTMLAttributes<any>;

let index = 0;

export const Input = (props: InputProps) => {
  const { className, error, id, label, ...inputProps } = props;

  if (!id) {
    index = index + 1;
  }

  const inputId = id || index.toString();

  const classes = [
    "w-full",
    "rounded",
    "border",
    "border-gray-500",
    "px-2",
    "py-1",
    "text-lg",
    className,
  ].join(" ");

  const errorDisplay = error ? (
    <em className="text-red-600">{error}</em>
  ) : (
    null
  );

  const labelDisplay = label ? (
    <label htmlFor={inputId}>
      {label} {errorDisplay}
    </label>
  ) : (
    null
  );

  return (
    <p>
      {labelDisplay}
      <input className={classes} id={inputId} {...inputProps} />
    </p>
  );
};
