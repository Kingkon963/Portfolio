import Navbar from "./Navbar";

export default function ContentSection({ children }) {
  return (
    <div className="contentSection">
      <Navbar />
      {children}

      <style jsx>{`
        .contentSection {
          background-color: #162a31;
          height: 75vh;
          margin-top: 0vh;
        }
      `}</style>
    </div>
  );
}
