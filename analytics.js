document.addEventListener('DOMContentLoaded', () => {
    const ANALYTICS_ENDPOINT_URL = 'nemzpacks.vercel.app';

    function sendScenepackClickToBackend(packName) {
        console.log(`[Frontend] Sending click for "${packName}" to the backend.`);

        fetch(ANALYTICS_ENDPOINT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ scenepackName: packName }),
        })
        .then(response => {
            if (response.ok) {
                console.log(`got the click for "${packName}"`);
            } else {
                console.error(`Backend threw an error (${response.status}): ${response.statusText}`);
                response.text().then(text => console.error("Backend said:", text));
            }
        })
        .catch(error => {
            console.error('Network fail or something broke:', error);
        });
    }

    window.trackScenepackClick = sendScenepackClickToBackend;
});
