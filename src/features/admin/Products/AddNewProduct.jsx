import { bookCategories } from "../../../constants/categories";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import Form from "../../../ui/Form";
import FormRow from "../../../ui/FormRow";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import InputText from "../../../ui/InputText";
import Label from "../../../ui/Label";
import Row from "../../../ui/Row";

function AddNewProduct() {
  return (
    <>
      <Heading>Add new product</Heading>
      <Form>
        <FormRow>
          <Label name="Book title" />
          <Input type="text" />
        </FormRow>
        <FormRow>
          <Label name="Book description" />
          <InputText />
        </FormRow>
        <FormRow>
          <Label name="Book category" />
          <div className="mt-4 -mb-10 grid grid-cols-4 gap-x-10 gap-y-5">
            {bookCategories.map((category) => (
              <Row type="horizontal" key={category}>
                <p className="text-stone-900">{category}</p>
                <Input type="checkbox" value={category} />
              </Row>
            ))}
          </div>
        </FormRow>

        <FormRow type="horizontal">
          <FormRow>
            <Label name="Price" />
            <Input type="number" min={0} />
          </FormRow>
          <FormRow>
            <Label name="Discount" />
            <div className="flex gap-2 items-center justify-center">
              <Input type="number" min={0} max={100} />
              <span className="text-lg font-semibold">%</span>
            </div>
          </FormRow>
        </FormRow>

        <FormRow type="horizontal">
          <FormRow>
            <Label name="products in stock" />
            <Input type="number" min={0} />
          </FormRow>
          <Label name="Featured" />
          <Input type="checkbox" />
        </FormRow>

        <FormRow>
          <Label name="Status" />
          <Input type="select" name="Status">
            <option>Published</option>
            <option>Unpublished</option>
          </Input>
        </FormRow>

        <FormRow>
          <Label name="Product image" />
          <FileInput />
        </FormRow>

        <div className="flex justify-end mt-8">
          <Row type="horizontal">
            <Button type="secondary">Discard</Button>
            <Button>Add Product</Button>
          </Row>
        </div>
      </Form>
    </>
  );
}

export default AddNewProduct;
