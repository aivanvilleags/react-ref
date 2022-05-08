import { Route, Routes } from "react-router";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetups />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
