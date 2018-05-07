/** @component */
export default function isRtl({ theme } = {}) {
  return Boolean(theme && theme.rtl);
}
