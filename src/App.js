
import Hd from "./component/Hd";
import Mainb from "./layout/Mainb"
import Mainservice from './component/Mainservice';
import Livereview from './component/LiveReveiw';
import data from './data/db.json'

//하나의 data 파일을 props로 전달하는 방식!!

function Header() {
    return (
        <>
        <Hd/>
        <Mainb/>
        <Mainservice msdata={data.mainservice} keyid='main_service'></Mainservice>
        <Livereview></Livereview>
        </>
    )
}

export default Header