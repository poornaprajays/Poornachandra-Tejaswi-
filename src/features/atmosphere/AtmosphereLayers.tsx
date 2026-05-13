export function AtmosphereLayers() {
  return (
    <div className="atmosphere-root" aria-hidden="true">
      <div className="atmosphere-depth atmosphere-depth-far" />
      <div className="atmosphere-fog atmosphere-fog-a" />
      <div className="atmosphere-fog atmosphere-fog-b" />
      <div className="atmosphere-rain" />
      <div className="atmosphere-grain" />
      <div className="atmosphere-vignette" />
    </div>
  );
}
