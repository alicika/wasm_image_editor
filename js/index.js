function draw(image) {
    const canvas = document.getElementById("my-canvas");
    const context = canvas.getContext("2d");
    //context.fillStyle = "red";
    //context.fillRect(0, 0, 50, 50);
    context.strokeStyle = "black";
    context.lineWidth = 1;

    const width = image.width();
    const height = image.height();
    const cellSize = 50;

    const cells = image.cells();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const index = ((y * width) + x) * 3;
            const colour = `rgb(${cells[index]}, ${cells[index + 1]}, ${cells[index + 2]})`;
            context.fillStyle = colour;
            context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }

    for (let x = 0; x <= width; x++) {
        context.beginPath();
        context.moveTo(x * cellSize, 0);
        context.moveTo(x * cellSize, height * cellSize);
        context.stroke();
    }

    for (let y = 0; y <= width; y++) {
        context.beginPath();
        context.moveTo(y * cellSize, 0);
        context.moveTo(y * cellSize, height * cellSize);
        context.stroke();
    }
}

async function main() {
    const lib = await import("../pkg/index.js").catch(console.error);
    const image = new lib.Image(10, 10);
    console.log(image);
    draw(image);
}

main();