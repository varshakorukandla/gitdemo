import Navbar from "./components/Navbar"
import DefaultExportSample from "./samples/DefaultExportSample"
import { Module1, Module2 } from "./samples/ModuleExportSample"

const App = () => {
    const data = {
        appname: "Hello"
    }
    const logodata = "mylogo"
    const test = "hello world"
    return (
        <>
            <p className="text-yellow-500">{test}</p>
            <Navbar appdata={data} logo={logodata} />
            <DefaultExportSample />
            <Module1 />
            <Module2 />
        </>
    )
}

export default App