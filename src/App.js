import './App.css'

function App() {

  function seeText(event) {
    console.log(event.target.value);
  } 

  return (
    <form>
      <label htmlFor="html">Введіть текст:</label>
      <br />
      <input type="text" onInput={seeText} />
    </form>
  );
}

export default App;