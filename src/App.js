
import "./App.css";
import {useState} from "react"; 

function App() {
  let [todo,setTodos] = useState(
    [
      {
        work: "Create theme", 
        status: false,
      },
      {
        work: "Work on wordpress",
        status: false,
      },
      {
        work: "Organize office main department",
        status: false,
      },
      {
        work: "Error solve in HTML template",
        status: false,
      },
    ]);
   
  
  let handleChange = (e) => { 
    let update = [...todo]; 
    let item = e;
    // console.log(e) 

    // console.log(todo.indexOf(e));
    // update.status = !update.status;
    todo.splice(update.indexOf(e), 1,item)
    console.log(update) 
    setTodos(update)
  };

  let add = (text)=>{

  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-white">
              <div class="card-body">
                <form action="javascript:void(0);">
                  <input
                    type="text"
                    class="form-control add-task"
                    placeholder="New Task..."
                  /> 
                  <button className="btn-btn-sucess">Create</button>

                </form>
                <ul class="nav nav-pills todo-nav">
                  <li role="presentation" class="nav-item all-task active">
                    <a href="#" class="nav-link">
                      All
                    </a>
                  </li>
                  <li role="presentation" class="nav-item active-task">
                    <a href="#" class="nav-link">
                      Active
                    </a>
                  </li>
                  <li role="presentation" class="nav-item completed-task">
                    <a href="#" class="nav-link">
                      Completed
                    </a>
                  </li>
                </ul>
                <div class="todo-list">
                  {todo.map((e) => {
                    return (
                      <div class="todo-item">
                        <div class="checker">
                          <span class="">
                            <input
                              type="checkbox"
                              onChange={() => handleChange(e)}
                            />
                          </span>
                        </div>
                        {e.status ? (
                          <span>
                            <s>{e.work}</s>
                          </span>
                        ) : (
                          <span>{e.work}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
