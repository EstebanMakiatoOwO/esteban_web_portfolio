import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "@app/layout/RootLayout";
import { HomePage } from "@/pages/HomePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
