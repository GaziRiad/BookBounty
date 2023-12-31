import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { PrimeReactProvider } from "primereact/api";

import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Books from "./pages/Books";
import Admins from "./pages/Admins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import NewBook from "./pages/NewBook";
import BooksTable from "./features/admin/Books/BooksTable";
import PaginationSizeContext from "./contexts/PaginationSizeContext";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <PaginationSizeContext>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/books" element={<Books />}>
                  <Route path="/books/addnewbook" element={<NewBook />} />
                  <Route path="/books" element={<BooksTable />} />
                </Route>
                <Route path="/admins" element={<Admins />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <ReactQueryDevtools initialIsOpen={false} />
        </PaginationSizeContext>
      </PrimeReactProvider>
    </QueryClientProvider>
  );
}

export default App;
