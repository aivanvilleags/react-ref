import { Route, Routes } from "react-router";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetups />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
