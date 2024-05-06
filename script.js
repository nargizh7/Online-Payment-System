document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');

    function updateTime() {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' - ' + now.toLocaleDateString('en-US');
    }

    setInterval(updateTime, 1000);
    updateTime();
});
