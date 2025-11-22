export function getPatternSvg(patternId: string, color: string, size: number = 60): string {
  const c = color;
  let svg = "";

  switch (patternId) {
    case "dots":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="${c}"/></svg>`;
      break;
    case "lines":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 20L20 0H10L0 10M10 20L20 10V20" fill="${c}"/></svg>`;
      break;
    case "checkers":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="10" height="10" fill="${c}"/><rect x="10" y="10" width="10" height="10" fill="${c}"/></svg>`;
      break;
    case "circles":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" fill="none" stroke="${c}" stroke-width="1" opacity=".5"/></svg>`;
      break;
    case "tic-tac-toe":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="${c}" d="M0 0h20v20H0V0zm2 2v16h16V2H2z"/></svg>`;
      break;
    case "waves":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10 Q 5 5, 10 10 T 20 10" stroke="${c}" fill="none" stroke-width="2"/></svg>`;
      break;
    case "zigzag":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 15 L5 5 L10 15 L15 5 L20 15" stroke="${c}" fill="none" stroke-width="2"/></svg>`;
      break;
    case "grid":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10 L20 10 M10 0 L10 20" stroke="${c}" stroke-width="1"/></svg>`;
      break;
    case "crosses":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2 L12 2 L12 8 L18 8 L18 12 L12 12 L12 18 L8 18 L8 12 L2 12 L2 8 L8 8 Z" fill="${c}"/></svg>`;
      break;
    case "diagonal-lines":
      svg = `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M-5 5 L25 -5 M-5 15 L25 5 M-5 25 L25 15 M-5 35 L25 25" stroke="${c}" stroke-width="2"/></svg>`;
      break;
    default:
      return "";
  }

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
