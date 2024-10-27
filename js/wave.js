const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let time = 0;

// Parameters for the wave
const amplitude = 10; // Reduced amplitude for flatter waves
const frequencies = [0.02, 0.025, 0.03]; // Three different frequencies
const fillColor = 'rgba(84, 171, 188, 0.3)'; // Semi-transparent color for the fill

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw waves with different frequencies
    frequencies.forEach((frequency, index) => {
        ctx.beginPath(); // Start a new path for each wave
        ctx.moveTo(0, canvas.height / 2); // Start in the middle of the canvas height

        for (let x = 0; x < canvas.width; x++) {
            // Lower the y-position to flatten the wave further
            const y = (canvas.height / 2) + (Math.sin((x + time) * frequency) * amplitude);
            ctx.lineTo(x, y);
        }

        // Set stroke color based on index for different opacity
        ctx.strokeStyle = `rgba(84, 171, 188, .25)`; // Change opacity
        ctx.lineWidth = 2; // Width of the wave line
        ctx.stroke(); // Draw the wave

        // Fill the area below the wave
        ctx.lineTo(canvas.width, canvas.height); // Draw line to the right edge
        ctx.lineTo(0, canvas.height); // Draw line to the left edge
        ctx.closePath(); // Close the path
        ctx.fillStyle = `rgba(84, 171, 188, .5)`; // Set fill color with different opacity
        ctx.fill(); // Fill the area
    });

    time += 0.5; // Increment time for animation
    requestAnimationFrame(drawWave); // Call drawWave again for the next frame
}

drawWave(); // Start the wave animation
