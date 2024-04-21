import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ImageModalContextProvider } from "./context/ImageModal.tsx";
import { ScrollToTop } from "./ScrollToTop.tsx";
import "./styles/responsive.scss";
import { ToggleMenuContextProvider } from "./context/ToggleMenu.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ImageModalContextProvider>
      <ToggleMenuContextProvider>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ToggleMenuContextProvider>
    </ImageModalContextProvider>
  </BrowserRouter>
);
