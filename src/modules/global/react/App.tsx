import { Outlet } from "react-router-dom";

function App() {
  return (
    <div data-testid="app" className="text-gray-800">
      <Outlet />
    </div>
  );
}

export default App;
