import {Header} from "./components/Header.tsx";

function App() {

    return (
        <div className="xl:bg-gradient-to-br xl:from-firstBodyGradientCol xl:via-secondBodyGradientCol xl:to-thirdBodyGradientCol
      h-screen w-screen xl:flex xl:flex-col xl:items-center">
            <Header/>
        </div>
    )
}

export default App
