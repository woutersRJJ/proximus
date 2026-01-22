import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`sidebar ${open ? "open" : ""}`}>
                <button
                    onClick={() => setOpen(!open)}
                    style={{ margin: 10, background: "white", borderRadius: 6 }}
                >
                    {open ? "Close" : "Open"}
                </button>

                {open && (
                    <nav style={{ color: "white", padding: 20 }}>
                        <Link
                            to="/dashboard"
                            style={{ display: "block", marginBottom: 10, color: "white", textDecoration: "none" }}
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/settings"
                            style={{ display: "block", marginBottom: 10, color: "white", textDecoration: "none" }}
                        >
                            Settings
                        </Link>
                    </nav>
                )}
            </div>

            <div className="main-content">
                {children}
            </div>
        </>
    );
}
