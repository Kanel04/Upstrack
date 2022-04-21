import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarketplacePage from "./pages/Marketplace";
import HomePage from "./pages/Home";
import CreatorPage from './pages/Creator';
import CommunityPage from './pages/Community/indes';
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/marketplace" element={<MarketplacePage />}></Route>
        <Route path="/creator" element={<CreatorPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
      </Routes>
    </Router>
  );
};
