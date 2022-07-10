import Header from "../components/Header";
import SideLeft from "../components/SideLeft";
import Container from "../components/Container";
import SideRight from "../components/SideRight";
 
function Main() {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-row">
                <SideLeft />
                <Container />
                <SideRight />
            </div>
        </div>
    )
}
 
export default Main;