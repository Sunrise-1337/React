function Input(props) {
  const {value, event} = props
  console.log(value)
  return (
    <div className="Input">
      <input onChange={e => event(e.target.value)} value={value} type="text" name="name" placeholder="Your name"/>
      <button>Check</button>
    </div>
  );
}

export default Input;
