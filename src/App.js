import {Outlet} from "react-router";
import {AuthProvider} from './common/contexts/AuthContext';
import Navbar from "./common/components/Navbar";
import {DataProvider} from "./common/contexts/DataContext";
import Footer from "./common/components/Footer";

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Navbar/>
        <Outlet/>
        <Footer />
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
