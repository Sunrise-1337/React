function Menu() {
  const list = [
    {
      name:'Pandas',
      link:'#'
    },
    {
      name:'Cats',
      link:'google.com'
    },
    {
      name:'Dogs',
      link:'youtube.com'
    }
  ]

  return (
    <div className="menu">
      <ul>
        {
          list.map((elem, key) => 
            <li key={key}><a href={elem.link}>{elem.name}</a></li>
          )
        }
      </ul>
    </div>
  )
}

export default Menu;
