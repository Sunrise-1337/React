import React, {useState, useEffect} from 'react';

function List({set, name, list}) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(list)
  }, [list])

  const crossNSet = (e, ar, set, name, id) => {
    let ar2 = [...ar];
    e.preventDefault()
    ar2[id].done = true;
    localStorage.setItem(name, JSON.stringify(ar2))
    set(ar2)
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
              onClick={e => crossNSet(e, arr, set, name, elem.id)}>
                Done
              </a>}
          </li>
        )}
      </ul>
    </div>
  );
}

export default List;