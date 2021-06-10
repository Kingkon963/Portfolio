import Element from "./Element";
import keyGenerator from "../utils/keyGenerator";

export default function ListSection({ title, elements, size }) {
  return (
    <>
      <h3>{title}</h3>
      <hr />
      <div className="container">
        {elements.map((e) => {
          return <Element e={e} size={size} key={keyGenerator()} />;
        })}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr; //45px 45px 45px 45px;;
          justify-content: flex-start;
          column-gap: 1em;
          row-gap: 1em;
          padding: 0 0.1em;
          color: #b7d6ec;
        }
        h3 {
          color: #b7d6ec;
          opacity: 86%;
          font-weight: normal;
          font-size: 0.9em;
          margin: 0px;
        }
        hr {
          background-color: #e4e4e4;
          width: 100%;
          margin-bottom: 1em;
        }
      `}</style>
    </>
  );
}
