import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Bootcamps from "./components/Bootcamps";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <html className="html">
      <body className="body">
        <div className="container">
          <Header />
          <NavigationBar />
          <br></br>
          <Bootcamps />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default App;
