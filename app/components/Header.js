import React from "react";
import { FaReact, FaHackerNews } from "react-icons/fa";
const styles = {
  wrapper: {
    backgroundColor: "#343a40",
    color: "#fff",
    height: "30px",
    padding: "10px"
  },
  inner: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 20px"
  }
};
const Header = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>
        <h2
          style={{
            margin: "0",
            fontSize: "20px",
            fontWeight: "normal",
            float: "left"
          }}
        >
          HackerNews
        </h2>
        <div style={{ float: "right" }}>
          <FaReact size="34" color="rgb(0, 216, 255)" />{" "}
          <FaHackerNews size="34" color="rgb(255, 102, 0)" />
        </div>
      </div>
    </div>
  );
};
export default Header;
