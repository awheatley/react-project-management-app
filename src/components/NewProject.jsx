import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>
        <Input label="Title" id="title" />
        <Input label="description" id="description" textarea/>
        <Input label="Due Date" id="due-date" />

      </div>
    </div>
  )
}