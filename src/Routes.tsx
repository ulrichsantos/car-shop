import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { NewCarsPage } from "./pages/NewCars";
import { SemiNewCarsPage } from "./pages/SemiNewCars";
import { FinancingPage } from "./pages/Financing";
import { ServicesPage } from "./pages/Services";
import { ContactPage } from "./pages/Contact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
       <Route path="/" element={<HomePage />} />
       <Route path="/zeroKm" element={<NewCarsPage />} />
       <Route path="/semiNovos" element={<SemiNewCarsPage />} />
       <Route path="/financiamento" element={<FinancingPage />} />
       <Route path="/servicos" element={<ServicesPage />} />
       <Route path="/contato" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}