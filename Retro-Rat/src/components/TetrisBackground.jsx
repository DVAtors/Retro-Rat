import { useEffect } from "react";

/**
 * TetrisBackground
 * A chaotic, beautiful, and completely over-engineered background.
 * * DEV NOTES (IGNORE AT YOUR OWN PERIL):
 * I spent 3 hours fighting with the CSS background-layers. 
 * If you set the background-color of the body, the 'transparent' parts 
 * of the SVG act like a stencil. It works now. Please don't touch the 
 * background-attachment settings, the math literally falls apart if you do.
 * * TODO: Add a Tetris sound effect on hover? (NO, DON'T DO THAT, IT'S ANNOYING)
 */
export default function TetrisBackground() {
    useEffect(() => {
        const blockSize = 30;
        const patternWidth = 300;
        const colorA = "#5E35B1"; // Purple
        const colorB = "#111111"; // Black
        const colorC = "#E83B3B";
        const colorD = "#FFD500";
        
        const tetrisColors = ["#E83B3B", "#FF9D00", "#FFD500", "#38C938", "#00B7EB", "#2B5DF2", "#9B2BF2"];

        // --- PART 1: THE INTRO (0px - 300px) ---
        let svgIntro = `<svg xmlns="http://www.w3.org/2000/svg" width="${patternWidth}" height="300" shape-rendering="crispEdges">`;
        for (let y = 0; y < 300; y += blockSize) {
            for (let x = 0; x < patternWidth; x += blockSize) {
                let fill = "transparent";
                let isBlock = false;
                const progress = y / 300;
                const tetrisChance = 0.8 - Math.abs(progress - 0.5) * 1.6;

                if (Math.random() < tetrisChance) {
                    fill = tetrisColors[Math.floor(Math.random() * tetrisColors.length)];
                    isBlock = true;
                } else if (Math.random() < progress) {
                    fill = colorA;
                }
                if (fill === "transparent" && !isBlock) continue;
                const stroke = isBlock ? 'stroke="#000000" stroke-width="2"' : '';
                svgIntro += `<rect x="${x}" y="${y}" width="${blockSize}" height="${blockSize}" fill="${fill}" ${stroke} />`;
            }
        }
        svgIntro += `</svg>`;

        // --- PART 2: THE INFINITE LOOP (1800px) ---
        let svgLoop = `<svg xmlns="http://www.w3.org/2000/svg" width="${patternWidth}" height="1800" shape-rendering="crispEdges">`;
        for (let y = 0; y < 1800; y += blockSize) {
            for (let x = 0; x < patternWidth; x += blockSize) {
                let fill = "";
                let isBlock = false;
                if (y < 600) fill = colorA;
                else if (y < 900) {
                    const progress = (y - 600) / 300;
                    const tetrisChance = 0.8 - Math.abs(progress - 0.5) * 1.6;
                    if (Math.random() < tetrisChance) { fill = tetrisColors[Math.floor(Math.random() * tetrisColors.length)]; isBlock = true; }
                    else if (Math.random() < progress) fill = colorB;
                    else fill = colorA;
                } else if (y < 1500) fill = colorB;
                else {
                    const progress = (y - 1500) / 300;
                    const tetrisChance = 0.8 - Math.abs(progress - 0.5) * 1.6;
                    if (Math.random() < tetrisChance) { fill = tetrisColors[Math.floor(Math.random() * tetrisColors.length)]; isBlock = true; }
                    else if (Math.random() < progress) fill = colorA;
                    else fill = colorB;
                }
                                    // Draw the Base Block
                                    const stroke = isBlock ? 'stroke="#000000" stroke-width="2"' : '';
                                    svg += `<rect x="${x}" y="${y}" width="${blockSize}" height="${blockSize}" fill="${fill}" ${stroke} />`;
                                    
                                    // Draw the Inner Bevel (Plastic highlight)
                                    if (isBlock) {
                                        svg += `<rect x="${x + 6}" y="${y + 6}" width="${blockSize - 12}" height="${blockSize - 12}" fill="white" fill-opacity="0.2" />`;
                                    }
            }
        }
        svgLoop += `</svg>`;

const encodedIntro = encodeURIComponent(svgIntro).replace(/'/g, "%27").replace(/"/g, "%22");
        const encodedLoop = encodeURIComponent(svgLoop).replace(/'/g, "%27").replace(/"/g, "%22");

        // Inject as CSS variables on the :root so your CSS file can use them!
        document.documentElement.style.setProperty('--tetris-intro', `url("data:image/svg+xml,${encodedIntro}")`);
        document.documentElement.style.setProperty('--tetris-loop', `url("data:image/svg+xml,${encodedLoop}")`);

        return () => {};
    }, []);
    return null;
}



/**
 * TetrisBackground
 * 2nd YEAR DEV NOTES:
 * Randomized the base tile colors by pulling from your A-F variables.
 * Every tile now picks a random base color and decides whether to be a 
 * Tetris block or a solid tile. Added the 3D bevel effect to Tetris blocks.
 * TODO: Leave this code alone, I am never touching this again.
 */
