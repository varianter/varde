/**
 * Option+click, Command+click, and Option+Command+click interactions on
 * <color-mode>.
 *
 * <color-mode> is a plain, unregistered element (see
 * packages/css/helpers/color-mode.css) — there's no component class to hang
 * behavior off, so this delegates from document-level clicks and mutates
 * the two attributes CSS already reacts to: `palette` and `inverted`.
 *
 * - Option (Alt) + click: cycle `palette` to the next hue.
 * - Command (Meta) + click: toggle `inverted`.
 * - Option + Command + click: do both at once.
 *
 * Unrelated to the global light/dark theme toggle (`data-color-scheme` on
 * <html>, see header.tsx / index.tsx) — `inverted` is a per-element polarity
 * flip on the current palette's ramp, not dark mode. See
 * packages/knowledge/src/how-to/color.md and dark-mode.md.
 */

/** Canonical cycle order, matching docs/src/pages/color-modes.tsx. */
const PALETTES = [
	"grey",
	"coral",
	"blue",
	"yellow",
	"green",
	"orange",
	"purple",
	"teal",
	"periwinkle",
];

/**
 * @param {Element} mode
 */
function cyclePalette(mode) {
	const current = mode.getAttribute("palette");
	const index = PALETTES.indexOf(current ?? "");
	// Missing, "inherit", or unrecognized: start of cycle.
	const next = PALETTES[index === -1 ? 0 : (index + 1) % PALETTES.length];
	mode.setAttribute("palette", next);
}

/**
 * Mirrors the CSS truth in color-mode.generated.css:
 * `color-mode[inverted]:not([inverted='false' i])`.
 * @param {Element} mode
 * @returns {boolean}
 */
function isInverted(mode) {
	return (
		mode.hasAttribute("inverted") &&
		mode.getAttribute("inverted")?.toLowerCase() !== "false"
	);
}

/**
 * @param {Element} mode
 */
function toggleInverted(mode) {
	if (isInverted(mode)) {
		mode.removeAttribute("inverted");
	} else {
		mode.setAttribute("inverted", "");
	}
}

document.addEventListener("click", (event) => {
	if (!event.altKey && !event.metaKey) return;

	const target = event.target;
	if (!(target instanceof Element)) return;

	const mode = target.closest("color-mode");
	if (!mode) return;

	event.preventDefault();

	if (event.altKey) {
		cyclePalette(mode);
	}
	if (event.metaKey) {
		toggleInverted(mode);
	}
});
