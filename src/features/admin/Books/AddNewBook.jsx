import { useForm } from "react-hook-form";
import { bookCategories } from "../../../constants/categories";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import Form from "../../../ui/Form";
import FormRow from "../../../ui/FormRow";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import InputText from "../../../ui/InputText";
import Row from "../../../ui/Row";
import { useState } from "react";
import { useCreateBook } from "./useCreateBook";

function AddNewBook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [categories, setCategories] = useState([]);

  const { addBook, error, isLoading } = useCreateBook();

  function handleCheckBox(e) {
    if (e.target.checked)
      setCategories((categories) => [...categories, e.target.value]);
    if (!e.target.checked)
      setCategories((categories) => [
        ...categories.filter((el) => el === e.target.value),
      ]);
  }

  function handleFormSubmit(data, e) {
    e.preventDefault();
    const newBook = {
      ...data,
      categories,
      image: data.image[0],
      status: data.status === "Published" ? true : false,
    };
    console.log(newBook);
    addBook(newBook);
    reset();
  }

  return (
    <>
      <Heading>Add new product</Heading>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow label="Book title" error={errors.name}>
          <Input
            type="text"
            id="name"
            register={register}
            validation={{ required: "Title is required" }}
          />
        </FormRow>

        <FormRow label="Book description" error={errors.description}>
          <InputText
            id="description"
            register={register}
            validation={{ required: "Description is required" }}
          />
        </FormRow>

        <div className="-mb-2 lg:-mb-8">
          <Row type="vertical">
            <p className=" text-stone-600 font-semibold">Categories:</p>
            <div className="overflow-x-scroll">
              <div className="-mt-2 grid grid-cols-4 gap-x-44 gap-y-3 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-5 lg:mt-4 ">
                {bookCategories.map((category, i) => (
                  <div
                    key={category}
                    className="flex items-center gap-1 md:gap-4"
                  >
                    <label className="text-stone-600 text-sm" htmlFor={i}>
                      {category}
                    </label>
                    <Input
                      type="checkbox"
                      id="categories"
                      value={category}
                      onChange={handleCheckBox}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Row>
        </div>

        <div className="-mb-2 lg:-mb-8">
          <Row type="horizontal">
            <FormRow label="Price" error={errors.price}>
              <Input
                type="number"
                id="price"
                register={register}
                validation={{ min: 0, required: "Price is required" }}
                style={"!w-full"}
              />
            </FormRow>
            <FormRow label="Discount" error={errors.discount}>
              <Input
                type="number"
                id="discount"
                register={register}
                validation={{ min: 0, max: 100 }}
                style={"!w-full"}
              />
            </FormRow>
          </Row>
        </div>

        <FormRow label="products in stock" error={errors.stock}>
          <Input
            type="number"
            id="stock"
            register={register}
            validation={{ min: 0, required: "stock is required" }}
          />
        </FormRow>
        <FormRow type="horizontal" label="Featured">
          <Input type="checkbox" id="featured" register={register} />
        </FormRow>

        <FormRow label="Status">
          <Input type="select" id="status" register={register}>
            <option>Published</option>
            <option>Unpublished</option>
          </Input>
        </FormRow>

        <FormRow label="Product image">
          <FileInput id="image" register={register} />
        </FormRow>

        <div className="flex justify-end mt-8">
          <Row type="horizontal">
            <Button type="secondary" disabled={isLoading}>
              Discard
            </Button>
            <Button disabled={isLoading}>Add Product</Button>
          </Row>
        </div>
      </Form>
    </>
  );
}

export default AddNewBook;
