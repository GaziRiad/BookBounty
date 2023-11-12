import Table from "../../../ui/Table";
import Pagination from "../../../ui/Pagination";
import BookRow from "./BookRow";

import Spinner from "../../../ui/Spinner";
import { useBook } from "./useBook";

function BooksTable() {
  const { data, error, isLoading } = useBook();

  if (isLoading) return <Spinner />;

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
