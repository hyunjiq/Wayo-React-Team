
import data from './data/db.json'
import Hd from "./component/Hd";
import Mainb from "./layout/Mainb"
import Mainservice from './component/Mainservice';
import Livereview from './component/LiveReveiw';
import Withplace from './component/Withplace';
import Social from "./layout/Social";
import Appbanner from "./layout/Appbanner"
import Quik from './component/Quik';
import Ft from './component/Ft';

//하나의 data 파일을 props로 전달하는 방식!!

function Header() {
    return (
        <>
            <Hd/>
            {/* <Mainb/>
            <Mainservice msdata={data.mainservice} keyid='main_service'></Mainservice>
            <Livereview></Livereview> */}
            <Withplace></Withplace>
            {/* <Social />
            <Appbanner />
            <Quik></Quik> */}
            <Ft></Ft>
        </>
    )
}

export default Header