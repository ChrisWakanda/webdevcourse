export default function Dimensions() {
    return (
        <div id="wd-css-dimensions">
            <h2>Dimensions:</h2>
            <div>
                <h3>
                    A.
                </h3>
                <div className="wd-dimension-landscape wd-bg-color-yellow">
                Yellow div longer than its taller (landscape)
                </div>
                <h3>
                    B.
                </h3>
                <div className="wd-dimension-portrait wd-bg-color-blue
                                wd-fg-color-white">
                Blue div taller than its longer
                </div>
                <h3>
                    C.
                </h3>
                <div className="wd-dimension-square wd-bg-color-red">
                Red div height same as width
                </div>
            </div>
        </div>

    )
}