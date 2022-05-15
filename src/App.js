import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";

function App() {
  return (
    <main>
      <div className="form-container">
        <PersonalInfo />;
        <Experience />
        <Education />
      </div>
      <div className="resume-container">
        <Resume />
      </div>
    </main>
  );
}

export default App;
