import data from './data/db.json';
import Hd from "./component/Hd";
import Mainb from "./layout/Mainb"
import Mainservice from './component/Mainservice';

//하나의 data 파일을 props로 전달하는 방식!!

function Header() {
    return (
        <>
        <Hd/>
        <Mainb/>
        <Mainservice msdata={data.mainservice} keyid='main_service'></Mainservice>
        </>
    )
}

export default Header