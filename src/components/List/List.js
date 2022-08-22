import React, {useState, useEffect} from 'react';

function List({set, name, list}) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    console.log('yolo')
    setArr(list)
  }, [list])

  const crossNSet = (ar, set, name, id) => {
    ar[id].done = true;
    console.log(ar)
    localStorage.setItem(name, JSON.stringify(ar))
    set(ar)
  };

  return (
    <div className="List">
      <ul>
        {arr.map(elem => 
          <li key={elem.id}>
            <p 
              style={{textDecoration: elem.done ? 'line-through' : 'none'}}>
                {elem.task}
            </p>
            {!elem.done && <a 
              href="#" 
              onClick={() => crossNSet(arr, set, name, elem.id)}>
                Done
              </a>}
          </li>
        )}
      </ul>
    </div>
  );
}

export default List;