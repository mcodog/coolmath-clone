const canvas2 = document.getElementById('waveCanvas2');
const ctx2 = canvas2.getContext('2d');

let time2 = 0;

// Parameters for the wave
const amplitude2 = 10; // Reduced amplitude2 for flatter waves
const frequencies2 = [0.02, 0.025, 0.03]; // Three different frequencies2
const fillColor2 = 'rgba(38, 63, 84, 0.3)'; // Semi-transparent color for the fill

function drawWave2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // Clear the canvas2

    // Draw waves with different frequencies2
    frequencies2.forEach((frequency, index) => {
        ctx2.beginPath(); // Start a new path for each wave
        ctx2.moveTo(0, canvas2.height / 2); // Start in the middle of the canvas2 height

        for (let x = 0; x < canvas2.width; x++) {
            // Lower the y-position to flatten the wave further
            const y = (canvas2.height / 2) + (Math.sin((x + time) * frequency) * amplitude2);
            ctx2.lineTo(x, y);
        }

        // Set stroke color based on index for different opacity
        ctx2.strokeStyle = `rgba(38, 63, 84, .25)`; // Change opacity
        ctx2.lineWidth = 2; // Width of the wave line
        ctx2.stroke(); // Draw the wave

        // Fill the area below the wave
        ctx2.lineTo(canvas2.width, canvas2.height); // Draw line to the right edge
        ctx2.lineTo(0, canvas2.height); // Draw line to the left edge
        ctx2.closePath(); // Close the path
        ctx2.fillStyle = `rgba(38, 63, 84, .5)`; // Set fill color with different opacity
        ctx2.fill(); // Fill the area
    });

    time2 += 0.5; // Increment time for animation
    requestAnimationFrame(drawWave2); // Call drawWave again for the next frame
}

drawWave2(); // Start the wave animation
