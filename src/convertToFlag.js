export function convertToFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    console.error("Invalid country code:", countryCode);
    return "🏳";
  }

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}
