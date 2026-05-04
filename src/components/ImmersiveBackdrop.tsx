import { ForgeScene, type ForgeMode } from "./ForgeScene";

export function ImmersiveBackdrop({
  mode,
  chapter,
}: {
  mode: ForgeMode;
  chapter: string;
}) {
  return (
    <div className={`immersive-backdrop stage-${mode}`} aria-hidden="true">
      <ForgeScene mode={mode} />
      <div className="forge-atmosphere" />
      <div className="depth-grid depth-grid-a" />
      <div className="depth-grid depth-grid-b" />
      <div className="cinema-mask" />
      <div className="stage-hud">
        <span>{chapter}</span>
        <i />
      </div>
    </div>
  );
}
