// App.js
import React from "react";
import { Suspense } from "react";
import "./App.css";
import Website from "./pages/website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/properties/properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import { MantineProvider } from '@mantine/core';




function App() {
  const queryClient = new QueryClient();

  return (
   
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Website />} />
                  <Route path="properties">
                    <Route index element={<Properties />} />
                    <Route path=":propertyId" element={<Property />} />
                  </Route>
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
  
  );
}

export default App;
