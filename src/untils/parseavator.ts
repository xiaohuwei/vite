// Utilities

const REGEX = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g,
};

function specialHexEncode(match: string) {
  switch (match) {
    case "%20":
      return " ";
    case "%3D":
      return "=";
    case "%3A":
      return ":";
    case "%2F":
      return "/";
    default:
      return match.toLowerCase();
  }
}

export const toDataURI = (string: string) =>
  `data:image/svg+xml,${encodeURIComponent(string)
    .trim()
    .replace(REGEX.whitespace, " ")
    .replace(REGEX.quotes, "'")
    .replace(REGEX.urlHexPairs, specialHexEncode)}`;
