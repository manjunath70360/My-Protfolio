import "./index.css"

const AddProject = ()=>{

  return(
    <div className="table-container">
      
<div className="title-con">
<h1 className="title">Add Project</h1>
</div>
      <form>
        <div className="input-text">
          <label for="input1">Project Name</label>
          <input id="input1" type="text" className="input"/>
        </div>
        <div className="input-text">
          <label for="input2">Project link</label>
          <input id="input2" type="text" className="input"/>
        </div>
        <div className="input-text">
          <label for="input3">Description</label>
          <textarea id="input3" rows='4' cols='40' className="input-textarea"/>
        </div>
        <div className="btn-con">
        <button type="button" className="add-btn">Add</button>
        </div>
          </form>
    </div>
  )
}

export default AddProject