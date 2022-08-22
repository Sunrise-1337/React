import React, {useState} from 'react';

function TaskWrap(props) {
  const [task, setTask] = useState('');
  const { func, name, list } = props;
  const taskClick = (task) => {
    func(el => [...el, {'task': task, 'done': false, 'id': list.length}])
    localStorage.setItem(name, JSON.stringify(list))
  };

  return (
    <div className="TaskWrap" hidden={true}>
      <input onChange={(e) => setTask(e.target.value)} value={task} type="text" name="name" placeholder="New task"/>
      <button onClick={() => {taskClick(task)}}>Add</button>
    </div>
  );
}

export default TaskWrap;
