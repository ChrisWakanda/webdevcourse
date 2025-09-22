import "./index.css";
import ForegroundColors from "./ForegroundColors"; "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";"./BackgroundColors";
export default function Lab2(){
    return (
        <div>
            <h2>
                Lab 2 - Cascanding Style Sheets (CSS) Basics
            </h2>
            <h3>
                Styling with the 'STYLE' attribute
            </h3>
            <p id="para-1" style={{color: "darkblue", backgroundColor: "lightblue"}}>
                Foreground color - Font color. Background color - color of the background of the tag that you chose. Ex: here it is p, which is paragraph. The entire size of the paragraph on screen will then be the color chosen for 'backgroundColor'
            </p>
            <h3>
                Styling with ID Selectors:
            </h3>
            <h4>
                A. 
            </h4>
            <p id="para-2">
                This para has been made via css id selectors (white on red). There are multiple classes that one can combine, some from tailwind some from bootstrap, some from react icons etc etc which all have different classes and names - this results in combining multiple classes from different sources as listed below which makes us confused as to which classes are ours and which are actually inherent classes of these technologies. Hence, here, the professor has pre-pended each className with 'wd' to make sure that all classes that defined by him are easily recognizable. 
            </p>
            <h4>
                B. 
            </h4>
            <p id="para-3">
                This para has been made via css id selectors (black on yellow). There are multiple classes that one can combine, some from tailwind some from bootstrap, some from react icons etc etc which all have different classes and names - this results in combining multiple classes from different sources as listed below which makes us confused as to which classes are ours and which are actually inherent classes of these technologies. Hence, here, the professor has pre-pended each className with 'wd' to make sure that all classes that defined by him are easily recognizable. 
            </p>
            <h3>
                Styling with Class Selectors:
            </h3>
            <h4>
                A.
            </h4>
            <p className="wd-fg-color-blue wd-bg-color-yellow">
                This para is made via class selectors (blue on yellow para) There are multiple classes that one can combine, some from tailwind some from bootstrap, some from react icons etc etc which all have different classes and names - this results in combining multiple classes from different sources as listed below which makes us confused as to which classes are ours and which are actually inherent classes of these technologies. Hence, here, the professor has pre-pended each className with 'wd' to make sure that all classes that defined by him are easily recognizable. 
            </p>
            <h4>
                B.
            </h4>
            <h3 className="wd-fg-color-blue wd-bg-color-yellow">
                This heading is made via class selectors (blue on yellow heading) There are multiple classes that one can combine, some from tailwind some from bootstrap, some from react icons etc etc which all have different classes and names - this results in combining multiple classes from different sources as listed below which makes us confused as to which classes are ours and which are actually inherent classes of these technologies. Hence, here, the professor has pre-pended each className with 'wd' to make sure that all classes that defined by him are easily recognizable. 
            </h3>
            <div id="wd-css-document-structure">
                <div>
                    <h3>Document Structure Selectors:</h3>
                    <div className="wd-selector-alpha">
                        This is the white text inside the red div
                        <span className="wd-selector-beta">
                            This is the blue text inside the yellow span inside the red div.
                        </span>
                        blah blah blah
                    </div>
                </div>
            </div>
            <ForegroundColors/>
            <BackgroundColors/>
        </div>
    )
}