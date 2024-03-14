import {Header} from "./components/Header.tsx";
import {Main} from "./components/Main.tsx";

function App() {

    return (
        <div className="xl:bg-gradient-to-br xl:from-firstBodyGradientCol xl:via-secondBodyGradientCol xl:to-thirdBodyGradientCol
      h-screen w-screen xl:flex xl:flex-col xl:items-center">
            <Header/>
            <Main/>
        </div>
    )
}

export default App
