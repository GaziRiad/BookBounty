import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import { formatCurrency } from "../../../utils/helpers";
import { useBook } from "./useBook";

import { GiConfirmed } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Pagination from "../../../ui/Pagination";
import { HiTrash } from "react-icons/hi2";
import BookRow from "./BookRow";

function BooksTable() {
  const { data, error, isLoading } = useBook();
  if (isLoading) return <p>Loading...</p>;
  const { data: books, count } = data;

  return (
    <div className=" w-full mb-14">
      <Table>
        <Table.Header>
          <p>Name</p>
          <p>Image</p>
          <p>Price</p>
          <p>Discount</p>
          <p>In stock</p>
          <p>Featured</p>
          <p>Status</p>
        </Table.Header>
        <Table.Body
          data={books}
          render={(book) => <BookRow book={book} key={book.id} />}
        />
      </Table>
      <Pagination count={count} />
    </div>
  );
}

export default BooksTable;
