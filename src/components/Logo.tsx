import markWhite from '../assets/images/logo-mark-white.png';
import wordWhite from '../assets/images/logo-word-white.png';
import logoWhite from '../assets/images/logo-white.png';

/**
 * The Bartenders Company brand logo (white knockout of the original artwork,
 * so the black outlines read on the dark theme; the yellow drink is preserved).
 */

/** Horizontal lockup — mark + wordmark side by side. Used in the navbar. */
export function LogoLockup({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="The Bartenders Company — home"
      className="flex items-center gap-3 group"
    >
      <img
        src={markWhite}
        alt=""
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <img src={wordWhite} alt="The Bartenders Company" className="h-9 w-auto" />
    </button>
  );
}

/** Full stacked logo (mark over wordmark). Used in the footer. */
export function LogoStacked({ className = '' }: { className?: string }) {
  return <img src={logoWhite} alt="The Bartenders Company" className={className} />;
}
