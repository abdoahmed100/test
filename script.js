document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('test-btn');
    const clickCountDisplay = document.getElementById('click-count');
    
    let count = 0;
    
    testBtn.addEventListener('click', () => {
        count++;
        clickCountDisplay.textContent = `Clicks: ${count}`;
        
        // Add a small animation effect to the button
        testBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            testBtn.style.transform = 'scale(1)';
        }, 100);
    });
    
    console.log('Test environment initialized and ready!');
});
