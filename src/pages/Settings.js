import React from "react";

export default function Settings() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Settings</h2>
            <p style={styles.subtitle}>Manage your account, preferences and security</p>

            {/* Profile */}
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Profile</h3>

                <div style={styles.row}>
                    <label style={styles.label}>Full Name</label>
                    <input style={styles.input} defaultValue="Sarah Jacobs" />
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>Email</label>
                    <input style={styles.input} defaultValue="sarah@mail.com" />
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>Phone</label>
                    <input style={styles.input} defaultValue="+32 470 123 456" />
                </div>
            </div>

            {/* Preferences */}
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Preferences</h3>

                <div style={styles.row}>
                    <label style={styles.label}>Language</label>
                    <select style={styles.input}>
                        <option>English</option>
                        <option>Nederlands</option>
                        <option>Français</option>
                    </select>
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>Notifications</label>
                    <select style={styles.input}>
                        <option>All notifications</option>
                        <option>Only important</option>
                        <option>None</option>
                    </select>
                </div>
            </div>

            {/* Security */}
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Security</h3>

                <div style={styles.row}>
                    <label style={styles.label}>Password</label>
                    <button style={styles.button}>Change Password</button>
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>Two‑Factor Authentication</label>
                    <button style={styles.buttonSecondary}>Enable</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "30px",
        background: "#F5F5FA",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
    },
    title: {
        color: "#5A2D82",
        marginBottom: 5
    },
    subtitle: {
        color: "#666",
        marginBottom: 25
    },
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "25px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    },
    cardTitle: {
        color: "#5A2D82",
        marginBottom: 15
    },
    row: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px"
    },
    label: {
        marginBottom: "5px",
        color: "#555",
        fontSize: "14px"
    },
    input: {
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px"
    },
    button: {
        padding: "10px 14px",
        background: "#5A2D82",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    },
    buttonSecondary: {
        padding: "10px 14px",
        background: "#00AEEF",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }
};
