// Components
import Input from "./Input";
import InputPwd from "./InputPwd";
import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/shared/components/shadcn/field";

const InputComponent = ({ ...props }) => {
  if (props.type === "password") return <InputPwd {...props} />;
  return <Input {...props} />;
};

const InputField = ({
  id = "",
  name = "",
  label = "",
  className = "",
  description = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <Field data-disabled={props.disabled} className={className}>
      {label && (
        <FieldLabel htmlFor={id || name} className="max-w-max">
          {label}
          {props.required && <span className="text-primary">*</span>}
        </FieldLabel>
      )}
      <InputComponent
        name={name}
        id={id || name}
        className={inputClassName}
        {...props}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
};

export default InputField;
