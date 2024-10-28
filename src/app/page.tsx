import NavBar from "@/components/navBar/NavBar";
// import Page from "./users/page";
import { AppProvider } from "@/Context";
import Page from "../app/addUser/page";
export default function Home() {
  return (
    <AppProvider>
      <div style={{ display: "flex" }}>
        <NavBar />
        <Page />
      </div>
    </AppProvider>
  );
}
