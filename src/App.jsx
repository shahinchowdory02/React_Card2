import "./App.css";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

function App() {
  const users = [
    { img: "img1", intro: "", tag: "Satisfied" },
    { img: "img2", intro: "", tag: "UnderServed" },
    { img: "img3", intro: "", tag: "Underbanked" },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
