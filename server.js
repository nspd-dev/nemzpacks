require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'https://nemzpacks.vercel.app' })); 
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL; 

if (!DISCORD_WEBHOOK_URL) { 
    console.error(".env missing (or DISCORD_WEBHOOK_URL not set in Vercel)."); 
    process.exit(1);
}

app.post('/api/track-click', async (req, res) => {
    const { scenepackName } = req.body;

    if (!scenepackName) {
        console.warn("No scenepack name.");
        return res.status(400).json({ error: 'Scenepack name is required.' });
    }

    const discordPayload = {
        content: `A user just clicked on: **${scenepackName}**`,
    };

    try {
        const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discordPayload),
        });
        if (discordResponse.ok) {
            console.log(`Sent click for "${scenepackName}" to Discord`);
            return res.status(200).json({ message: 'Click tracked successfully' });
        } else {
            const errorText = await discordResponse.text();
            console.error(`Discord API error (${discordResponse.status}): ${errorText}`);
            return res.status(500).json({
                error: 'Failed to send to Discord.',
                details: errorText
            });
        }
    } catch (error) {
        console.error('Error sending to Discord:', error.message);
        return res.status(500).json({
            error: 'server crashed trying to hit Discord.',
            details: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server's live`);
});

module.exports = app;
