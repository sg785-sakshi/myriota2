import "./styles.css";
import DeviceList from "./components/device-list";

export default function App() {
  fetch("https://mockend.com/org/repo/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div>
      <header>
        <h1> Myriota Skeleton Application</h1>
      </header>
      <div className="App">
        <div className="content">
          <DeviceList />
        </div>
      </div>
    </div>
  );
}
