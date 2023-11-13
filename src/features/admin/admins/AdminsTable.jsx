import { useSearchParams } from "react-router-dom";
import NameFilter from "../../../ui/NameFilter";
import Pagination from "../../../ui/Pagination";
import Spinner from "../../../ui/Spinner";
import Table from "../../../ui/Table";
import AdminRow from "./AdminRow";
import { useAdmins } from "./useAdmins";

function AdminsTable() {
  const { data, error, isLoading } = useAdmins();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("fullName")?.toLowerCase() || null;

  if (isLoading) return <Spinner />;
  const { data: admins, count } = data;

  const filteredAdmins = filter
    ? admins?.filter((admin) => admin.fullName.toLowerCase().includes(filter))
    : admins;

  return (
    <>
      <NameFilter filterField="fullName" />
      <div className="w-full mb-14 mt-2">
        <Table>
          <Table.Header
            columns="grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px]
          grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px]"
          >
            <p>Image</p>
            <p>Full Name</p>
            <p>Email</p>
            <p>Phone number</p>
          </Table.Header>
          <Table.Body
            data={filteredAdmins}
            render={(admin) => <AdminRow admin={admin} key={admin.id} />}
          />
        </Table>
        <Pagination count={count} />
      </div>
    </>
  );
}

export default AdminsTable;
