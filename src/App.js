import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" homeText="Home" />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze Below" />
      </div>
    </>
  );
}
