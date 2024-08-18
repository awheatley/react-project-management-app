import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  function handleStartAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((previousState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter(
          (project) => project.id !== previousState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((previousState) => {
      const newTask = {
        text,
        projectId: previousState.selectedProjectId,
        id: Math.random(),
      };

      return {
        ...previousState,
        tasks: [...previousState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        tasks: previousState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  let content = (
    <SelectedProject
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;
