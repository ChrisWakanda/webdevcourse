export default function Margins(){
    return (
        <div id="wd-css-margins">
            <h2>Margins</h2>
            <h3>
                A.
            </h3>
            <div
                className="wd-margin-bottom wd-padded-top-left wd-border-fat
                        wd-border-red wd-border-solid wd-bg-color-yellow">
                Margin bottom, padded top-left
            </div>
            <h3>
                B.
            </h3>
            <div
                className="wd-margin-right-left wd-padded-bottom-right wd-border-fat
                        wd-border-blue wd-border-solid wd-bg-color-yellow">
                Margin left & right (centered) and padded bottom right
            </div>
            <h3>
                C.
            </h3>
            <div
                className="wd-margin-all-around wd-border-fat wd-padding-fat
                        wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
                Margin all around, padding all around
            </div>
        </div>

    )
}