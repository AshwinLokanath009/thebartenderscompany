import markWhite from '../assets/images/logo-mark-white.png';
import wordWhite from '../assets/images/logo-word-white.png';
import logoWhite from '../assets/images/logo-white.png';
import markInk from '../assets/images/logo-mark-ink.png';
import wordInk from '../assets/images/logo-word-ink.png';
import logoInk from '../assets/images/logo-ink.png';

/**
 * The Bartenders Company brand logo.
 *
 * `ink` is the original artwork (black outlines + lemon drink) with the white
 * ground knocked out to alpha — use it on cream/white surfaces.
 * `white` is the knockout variant for dark surfaces (hero photo, footer).
 */
type Variant = 'ink' | 'white';

/** Horizontal lockup — mark + wordmark side by side. Used in the navbar. */
export function LogoLockup({
  onClick,
  variant = 'white',
}: {
  onClick?: () => void;
  variant?: Variant;
}) {
  const mark = variant === 'ink' ? markInk : markWhite;
  const word = variant === 'ink' ? wordInk : wordWhite;

  return (
    <button
      onClick={onClick}
      aria-label="The Bartenders Company — home"
      className="flex items-center gap-3 group"
    >
      <img
        src={mark}
        alt=""
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <img src={word} alt="The Bartenders Company" className="h-9 w-auto" />
    </button>
  );
}

/** Full stacked logo (mark over wordmark). Used in the footer. */
export function LogoStacked({
  className = '',
  variant = 'white',
}: {
  className?: string;
  variant?: Variant;
}) {
  return (
    <img
      src={variant === 'ink' ? logoInk : logoWhite}
      alt="The Bartenders Company"
      className={className}
    />
  );
}
