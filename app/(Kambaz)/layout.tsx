"use client"
import Session from "./Account/Session";
import { ReactNode } from "react";
import "./styles.css";
import KambazNavigation from "./kambaznavigation";
import store from "./store";
import { Provider } from "react-redux";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <Provider store={store}>
            <Session>
                <div id="wd-kambaz" suppressHydrationWarning >
                    <div className="d-flex">
                        <div>
                            <KambazNavigation/>
                        </div>
                        <div className="wd-main-content-offset p-3 flex-fill">
                            {children}
                        </div>

                    </div>
                </div>
            </Session>
        </Provider>
    )
}