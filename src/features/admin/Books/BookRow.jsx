import { GiConfirmed } from "react-icons/gi";
import Table from "../../../ui/Table";
import { formatCurrency } from "../../../utils/helpers";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Tag from "../../../ui/Tag";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { useDeleteBook } from "./useDeleteBook";

function BookRow({ book }) {
  const { deleteBook, isDeleting, error } = useDeleteBook();

  function handleDelete(id) {
    deleteBook(id);
  }

  return (
    <Table.TableRow
      key={book.id}
      columns="grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px]
grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px]"
    >
      <p className=" text-stone-800 font-semibold">{book.name}</p>
      <img
        src={book.image}
        className="h-12 w-16 aspect-square rounded-lg shadow-lg xl:h-20 xl:w-32"
      />
      <p className=" text-stone-800 font-semibold">
        {formatCurrency(book.price)}
      </p>
      <p className=" text-stone-800 font-semibold">{book.discount}%</p>
      <p className=" text-stone-800 font-semibold">{book.stock} pieces</p>
      <span
        className={` px-4 ${
          book.featured ? "text-green-500" : "text-stone-900"
        }`}
      >
        {book.featured ? (
          <GiConfirmed size={26} />
        ) : (
          <AiOutlineCloseCircle size={26} />
        )}
      </span>
      <Tag type={book.status}>{book.status}</Tag>
      <div className="flex gap-1">
        <button onClick={() => handleDelete(book.id)} disabled={isDeleting}>
          <HiTrash size={20} />
        </button>
        <button>
          <HiPencilSquare size={20} />
        </button>
      </div>
    </Table.TableRow>
  );
}

export default BookRow;
