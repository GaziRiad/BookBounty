import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { useSignUp } from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";

function SignUpAdminForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  const { signup, isLoading } = useSignUp();

  function handleFormSubmit(data, e) {
    e.preventDefault();
    const newAdmin = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      avatar: "",
    };
    signup(newAdmin);
  }
  return (
    <div>
      <Heading>Create new admin</Heading>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow label="Full name">
          <Input type="text" id="fullName" register={register} />
        </FormRow>
        <FormRow label="Email">
          <Input type="text" id="email" register={register} />
        </FormRow>
        <FormRow label="Password">
          <Input type="text" id="password" register={register} />
        </FormRow>
        <FormRow label="Confirm password" error={errors.confirmPassword}>
          <Input
            type="text"
            id="confirmPassword"
            register={register}
            validation={{
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            }}
          />
        </FormRow>
        <div className="mt-4">
          <Row type="horizontal">
            <Button type="secondary" disabled={isLoading}>
              Discard
            </Button>
            <Button disabled={isLoading}>
              {isLoading ? <SpinnerMini /> : "Create admin"}
            </Button>
          </Row>
        </div>
      </Form>
    </div>
  );
}

export default SignUpAdminForm;
