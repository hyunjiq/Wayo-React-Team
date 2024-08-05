
import Hd from "./component/Hd";
import Mainb from "./layout/Mainb"
import Mainservice from './component/Mainservice';
import Livereview from './component/LiveReveiw';
import data from './data/db.json'
import Social from "./layout/Social";
import Appbanner from "./layout/Appbanner"
import Form from "./layout/Form";

//하나의 data 파일을 props로 전달하는 방식!!

function Header() {
    return (
        <>
        <Hd/>
        <Mainb/>
        <Mainservice msdata={data.mainservice} keyid='main_service'></Mainservice>
        <Livereview></Livereview>
        <Social />
        <Form />
        <Appbanner />
        </>
    )
}

export default Header