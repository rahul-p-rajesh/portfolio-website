import { type CSSProperties, lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Avatar() {
  const splineStyling: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="background-section  absolute inset-0  w-full h-screen z-0 flex justify-center items-center">
      <Suspense fallback={<div />}>
        <Spline
          style={splineStyling}
          scene="/spline/character_cube_camera_hover.spline"
        />
      </Suspense>
      {/* Gradient overlay at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-dark-green))",
        }}
      />
    </div>
  );
}
