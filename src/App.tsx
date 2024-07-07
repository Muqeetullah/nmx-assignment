import "./App.css";
import { AppProvider } from "./context/SIdeBarController";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
