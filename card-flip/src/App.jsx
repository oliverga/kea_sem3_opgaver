import "./App.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card showBack={false} />
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <SkeletonTheme baseColor="#262626" highlightColor="#525252">
          <Skeleton
            style={{
              height: "14rem",
              borderRadius: "0.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <Skeleton
            style={{
              height: "2rem",
              borderRadius: "0.5rem",
              marginBottom: "0.75rem",
            }}
            count={3}
          />
        </SkeletonTheme>
      </div>
    </>
  );
}

export default App;
