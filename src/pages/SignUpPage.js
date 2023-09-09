import React from "react";
import { useForm } from "react-hook-form";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import Label from "components/label/Label";
import Input from "components/input/Input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";
import useToggleValue from "hooks/useToggleValue";

const schema = yup.object({
  name: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 character or greater")
    .matches(
      /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "The password must contain at least one capital letter and one special character"
    )
    .required("Please enter your password"),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { value: acceptTerm, handleToggleValue: handleTerm } = useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center font-me-smdium lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2">
        <img src="./icon-google.png" alt="icon" />
        <span>Sign up with Google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">PassWord *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-6 lg:mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleTerm}>
            <p className="lg:text-sm text-xs text-text2 flex-1">
              I agree to the{" "}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the
              <span className="text-secondary underline"> Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button className="bg-primary w-full" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
