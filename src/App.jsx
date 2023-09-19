import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment } from "./redux/slices/counter/index";
import MyComp from "./MyComp";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Redux Toolkit 😎</h1>
      <div className="card">
        <h2>Count in first Component  : {count}</h2>
      </div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComp />
    </>
  );
}

export default App;
