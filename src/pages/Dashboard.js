import React from "react";

export default function Dashboard() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Dashboard</h2>
            <p style={styles.subtitle}>Overzicht van je mobiele diensten</p>

            {/* Stat Cards */}
            <div style={styles.statsColumn}>
                <div style={styles.statCard}>
                    <p style={styles.statLabel}>Data verbruik</p>
                    <h4 style={styles.statValue}>4.2 GB / 10 GB</h4>
                </div>

                <div style={styles.statCard}>
                    <p style={styles.statLabel}>Verbruik  minuten</p>
                    <h4 style={styles.statValue}>120 / Onbeperkt</h4>
                </div>

                <div style={styles.statCard}>
                    <p style={styles.statLabel}>SMS</p>
                    <h4 style={styles.statValue}>34 / Onbeperkt</h4>
                </div>
            </div>

            {/* Usage Card */}
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Mobiele Data Verbruik</h3>

                <div style={styles.barBackground}>
                    <div style={{ ...styles.barFill, width: "42%" }} />
                </div>

                <p style={styles.usageText}>4.2 GB van 10 GB gebruikt</p>
            </div>

            {/* Recent Invoices */}
            <h3 style={styles.sectionTitle}>Laatste facturen</h3>

            <div style={styles.invoiceCard}>
                <div>
                    <h4 style={styles.invoiceMonth}>Januari</h4>
                    <p style={styles.invoiceStatus}>Betaald</p>
                </div>
                <h3 style={styles.invoiceAmount}>€29.99</h3>
            </div>

            <div style={styles.invoiceCard}>
                <div>
                    <h4 style={styles.invoiceMonth}>December</h4>
                    <p style={styles.invoiceStatus}>Betaald</p>
                </div>
                <h3 style={styles.invoiceAmount}>€29.99</h3>
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

    brand: {
        color: "#5A2D82",
        marginBottom: 20,
        fontSize: "28px",
        fontWeight: "700"
    },

    title: {
        color: "#5A2D82",
        marginBottom: 5
    },

    subtitle: {
        color: "#666",
        marginBottom: 25
    },

    /* Stat Cards stacked vertically */
    statsColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "30px"
    },

    statCard: {
        background: "white",
        padding: "12px 14px",
        borderRadius: "10px",
        width: "180px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.08)"
    },

    statLabel: {
        color: "#666",
        marginBottom: 4,
        fontSize: "12px"
    },

    statValue: {
        color: "#5A2D82",
        fontSize: "16px",
        fontWeight: "600",
        margin: 0
    },

    /* Usage Card */
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "30px",
        maxWidth: "400px"
    },

    cardTitle: {
        color: "#5A2D82",
        marginBottom: 15
    },

    barBackground: {
        width: "100%",
        height: "12px",
        background: "#ddd",
        borderRadius: "6px",
        overflow: "hidden"
    },

    barFill: {
        height: "100%",
        background: "linear-gradient(90deg, #5A2D82, #00AEEF)"
    },

    usageText: {
        marginTop: 10,
        color: "#666"
    },

    /* Invoices */
    sectionTitle: {
        marginTop: 20,
        marginBottom: 10,
        color: "#5A2D82"
    },

    invoiceCard: {
        background: "white",
        padding: "15px 20px",
        borderRadius: "10px",
        marginBottom: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "400px"
    },

    invoiceMonth: {
        margin: 0,
        color: "#5A2D82"
    },

    invoiceStatus: {
        margin: 0,
        color: "#00AEEF",
        fontSize: "14px"
    },

    invoiceAmount: {
        margin: 0,
        color: "#333"
    }
};
