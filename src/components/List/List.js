import React, {useState, useEffect} from 'react';

function List({list}) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    console.log('gaerg')
    setArr(list)
  }, [list])

  return (
    <div className="List">
      <ul>
        {arr.map(elem => {
          return <li key={elem.id}><p>{elem.task}</p><a href="#">Done</a></li>
        })}
      </ul>
    </div>
  );
}

export default List;