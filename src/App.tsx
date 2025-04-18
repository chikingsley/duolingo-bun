import { Routes, Route } from "react-router-dom";
import { QuestsPage } from "./pages/quests";
import { LeaderboardPage } from "./pages/leaderboard";
import { LearnPage } from "./pages/learn";
import { ShopPage } from "./pages/shop";
import Layout from "./layout";
import { HomePage } from "./pages/home";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
