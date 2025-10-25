"use client"
import { ReactNode } from "react";
import "./styles.css";
import KambazNavigation from "./kambaznavigation";
import store from "./store";
import { Provider } from "react-redux";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <Provider store={store}>
            <div id="wd-kambaz">
                <div className="d-flex">
                    <div>
                        <KambazNavigation/>
                    </div>
                    <div className="wd-main-content-offset p-3 flex-fill">
                        {children}
                    </div>

                </div>
            </div>
        </Provider>
    )
}