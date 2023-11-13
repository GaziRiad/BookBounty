import Table from "../../../ui/Table";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";

function AdminRow({ admin }) {
  return (
    <Table.TableRow
      key={admin.id}
      columns="grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px]
      grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px]"
    >
      <img
        src={admin.avatar ? admin?.avatar : "/default-user.jpg"}
        className="h-12 w-12 aspect-square rounded-full shadow-lg xl:h-16 xl:w-16"
      />
      <p className=" text-stone-800 font-semibold">{admin.fullName}</p>
      <p className=" text-stone-600 font-semibold">{admin.email}</p>
      <p className=" text-stone-600 font-semibold">{admin.phoneNumber}</p>
      <div className="flex gap-1">
        <button>
          <HiTrash size={20} />
        </button>
        <button>
          <HiPencilSquare size={20} />
        </button>
      </div>
    </Table.TableRow>
  );
}

export default AdminRow;
