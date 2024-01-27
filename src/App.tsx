import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Home, CartPage, FavoritaPage } from "./pages";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorite" element={<FavoritaPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
