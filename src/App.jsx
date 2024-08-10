import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </div>
  );
}

export default App;