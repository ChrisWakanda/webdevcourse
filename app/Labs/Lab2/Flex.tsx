export default function Flex() {
    return (
        <>
            <div id="wd-css-flex">
            <h2>Flex:</h2>
            <h3>A.</h3>
            <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow">
                    Column 1</div>
                    <div className="wd-bg-color-blue">
                    Column 2</div>
                    <div className="wd-bg-color-red">
                    Column 3</div>
                </div>
            <h3>B.</h3>
            <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow">
                    Column 1</div>
                    <div className="wd-bg-color-blue">
                    Column 2</div>
                    <div className="wd-bg-color-red wd-flex-grow-1">
                    Column 3</div>
                </div>
            <h3>C.</h3>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow wd-width-75px">
                    Column 1</div>
                    <div className="wd-bg-color-blue">
                    Column 2</div>
                    <div className="wd-bg-color-red wd-flex-grow-1">
                    Column 3</div>
                </div>
            </div>
        </>

    )
}