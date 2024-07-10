const express = require('express');
const app = express(); 
const PORT = 8080; 

app.use(express.json());

app.get('/technews', (req, res) => {
    res.status(200).json({
        "title": "Tech News",
        "description": "Tech News is a website that provides the latest news and information on technology",
        "url": "https://technews.com",
        "subscription": true
    });
});

app.post('/technews/:article', (req, res) => {
    const { article } = req.params;

    if (!article) {
        return res.status(404).send('Article not found');
    }

    res.json({
        "title": article,
        "description": "Article description",
        "url": `https://technews.com/${article}`,
        "subscription": true      
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});