import { Routes, Route } from "react-router-dom";

import { refs } from "../../services/consts/refs";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import ArchivePage from "../../pages/ArchivePage/ArchivePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import StatisticPage from "../../pages/StatisticPage/StatisticPage";


function App() {

  return (
    <>
      <Routes>
        <Route path={refs.layout} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={refs.archive} element={<ArchivePage />} />
          <Route path={refs.staistic } element={ <StatisticPage/> } />
          <Route path={refs.notFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
