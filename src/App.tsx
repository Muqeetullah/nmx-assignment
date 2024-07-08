import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import { AppProvider } from "./context/SIdeBarController";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import Notification from "./utils/notification";

export default function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <UserProvider>
          <BookProvider>
            <AppRoutes />
            <Notification />
          </BookProvider>
        </UserProvider>
      </AuthProvider>
    </AppProvider>
  );
}
