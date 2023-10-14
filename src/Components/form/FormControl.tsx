import Input from "./form-inputs/Input";
import SelectInput from "./form-inputs/SelectInput";
import PasswordInput from "./form-inputs/PasswordInput";
import Checkbox from "./form-inputs/Checkbox";
import { ReactNode } from "react";

interface formControlProps {
  formType?: string;
  placeholder?: string;
  label: string;
  name: string;
  type?: any;
  register?: any;
  errors?: any;
  control?: any;
  options?: any;
  otp?: any;
  setOtp?: any;
  children?: ReactNode;
}

function FormControl({
  formType,
  label,
  name,
  type,
  register,
  errors,
  options,
  control,
  otp,
  setOtp,
  children,
  ...props
}: formControlProps) {
  //INPUT SELECT
  if (formType === "select") {
    return (
      <SelectInput
        label={label}
        name={name}
        errors={errors}
        control={control}
        options={options}
        {...props}
      />
    );
  }

  //INPUT CHECKBOX
  if (formType === "checkbox") {
    return (
      <Checkbox
        label={label}
        options={options}
        name={name}
        register={register}
        errors={errors}
        {...props}
      />
    );
  }

  //INPUT PASSWORD
  if (formType === "password") {
    return (
      <PasswordInput
        label={label}
        name={name}
        register={register}
        errors={errors}
        {...props}
      />
    );
  }

  return (
    <Input
      label={label}
      name={name}
      type={type}
      register={register}
      errors={errors}
      {...props}
    />
  );
}

export default FormControl;
