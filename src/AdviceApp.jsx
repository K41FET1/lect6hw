import React, { useState } from "react";
import axios from "axios";

function AdviceApp() {
  const [advice, setAdvice] = useState("Click the button to get advice.");
  const [adviceNumber, setAdviceNumber] = useState(0);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
      setAdviceNumber(response.data.slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.adviceBox}>
        <p style={styles.adviceNumber}>ADVICE #{adviceNumber}</p>
        <p style={styles.adviceText}>"{advice}"</p>
        <div style={styles.buttonContainer}>
          <button onClick={fetchAdvice} style={styles.button}>
            <span style={styles.buttonText}>🎲</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C3E50",
  },
  adviceBox: {
    width: "400px",
    maxWidth: "90%",
    backgroundColor: "#34495E",
    padding: "20px 40px",
    borderRadius: "10px",
    textAlign: "center",
    color: "#FFFFFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  adviceNumber: {
    color: "#1ABC9C",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  adviceText: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#1ABC9C",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.1s",
  },
  buttonText: {
    fontSize: "24px",
    color: "#2C3E50",
  },
};

export default AdviceApp;
