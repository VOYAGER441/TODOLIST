import React, { useState } from "react";
import './index.css'
function TodolList() {

    const [works, setWork] = useState([]);
    const [newWork, setNewWork] = useState("");

    function handelInputChange(e) {
        setNewWork(e.target.value)
    }
    function addWork() {
        if (newWork.trim() !== "") {
            setWork(t => [...t, newWork])
            setNewWork("");
        }
    }

    function deleteWork(index) {
        setWork(w => w.filter((_, i) => i !== index));
    }
    function moveUpWork(index) {
        if (index > 0) {
            const updateWork = [...works];
            [updateWork[index], updateWork[index - 1]] = [updateWork[index - 1], updateWork[index]];
            setWork(updateWork);
        }

    }
    function moveDownWork(index) {
        if (index <works.length-1) {
            const updateWork = [...works];
            [updateWork[index], updateWork[index + 1]] = [updateWork[index + 1], updateWork[index]];
            setWork(updateWork);
        }
    }


    return (<>
        <hr></hr>
        <div className="todolist">
            <h1>TO-DO-List</h1>
            {/* add task */}
            <div>
                <input type="text"
                    placeholder="Enter a task..."
                    value={newWork}
                    onChange={handelInputChange}

                />
                <button className="addWork" onClick={addWork} >Add Task</button>
            </div>

            <ol>
                {/* show task and delete,moveUp,moveDown button */}
                {works.map((work, index) =>
                    <li key={index}><span className="work">{work}  </span>

                        <button className="delete-button"
                            onClick={() => deleteWork(index)}
                        >Delete Task ❌</button>
                        <button className="moveUp-button"
                            onClick={() => moveUpWork(index)}
                        >Move Up 👆</button>
                        <button className="moveDown-button"
                            onClick={() => moveDownWork(index)}
                        >Move Down 👇</button>


                    </li>
                )}

            </ol>
        </div>
        <hr></hr>
    </>)
}

export default TodolList;