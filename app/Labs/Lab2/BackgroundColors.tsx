export default function BackgroundColors() {
    return (
        <div>
            <h3>
                Background Colors:
            </h3>
            <h4>
                A. White on Blue Heading:
            </h4>
            <h4 className="wd-bg-color-blue wd-fg-color-white">
                Here is the white text on blue heading.
            </h4>
            <h4>
                B. Black on Red Para:
            </h4>
            <p className="wd-bg-color-red wd-fg-color-black">
                Here is the black text on red para.
            </p>
            <h4>
                C. White on Green Span:
            </h4>
            <span className="wd-bg-color-green wd-fg-color-white">
                Here is the white text on green span.
            </span>
        </div>
    )
}