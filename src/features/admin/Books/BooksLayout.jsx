import { Outlet, useLocation } from "react-router-dom";
import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import { useEffect, useState } from "react";

function BooksLayout() {
  const [activeTab, setActiveTab] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("addnewbook")) setActiveTab(2);
    else setActiveTab(1);
  }, [activeTab, location.pathname]);

  return (
    <div>
      <Row type="horizontal">
        <Button
          type={activeTab === 1 ? "primary" : "secondary"}
          to="/books"
          onClick={() => setActiveTab(1)}
        >
          Products List
        </Button>
        <Button
          type={activeTab === 2 ? "primary" : "secondary"}
          to="/books/addnewbook"
          onClick={() => setActiveTab(2)}
        >
          Add new product
        </Button>
      </Row>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default BooksLayout;
