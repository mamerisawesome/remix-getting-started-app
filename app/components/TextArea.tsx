import { TextareaHTMLAttributes } from "react";

let index = 0;

type TextAreaProps = {
  error?: string;
  id?: string;
  label?: string;
} & TextareaHTMLAttributes<any>;

export const TextArea = (props: TextAreaProps) => {
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
    "font-mono",
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
      <textarea className={classes} id={inputId} {...inputProps} />
    </p>
  );
};
