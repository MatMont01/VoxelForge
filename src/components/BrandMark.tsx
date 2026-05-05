import { assets } from "../data/site";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <a className="brand-mark" href="#home" aria-label="Ir al inicio">
      <img className="brand-mark__symbol" src={assets.logos.solo} alt="" />
      {!compact && (
        <span className="brand-mark__text">
          <strong>Voxel Forge</strong>
          <span>Forjamos tu mundo</span>
        </span>
      )}
    </a>
  );
}
