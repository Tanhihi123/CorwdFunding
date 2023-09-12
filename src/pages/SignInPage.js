import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import ButtonGoogle from "components/button/ButtonGoogle";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IconEyeToggle } from "components/icons";
import useToggleValue from "hooks/useToggleValue";
import { Input } from "components/input";
import { Button } from "components/button";
const schema = yup.object({
  email: yup
    .string()
    .email("")
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
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignIn = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center font-me-smdium lg:text-sm text-text3 lg:mb-8 dark:text-white">
        Dont have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary cursor-pointer">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full" kind="primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
