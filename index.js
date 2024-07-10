const express = require('express');
const app = express(); 
const PORT = 8080; 

app.use(express.json());

// Add this to allow CORS (for development purposes)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Example articles data
const articles = {
  'latest-tech-trends': {
    title: 'Latest Tech Trends in 2024',
    description: 'Explore the cutting-edge technologies shaping our future, from AI advancements to sustainable tech solutions.',
    content: 'As we dive into 2024, the tech landscape continues to evolve at a breakneck pace. Artificial Intelligence is becoming more integrated into our daily lives, with natural language processing reaching new heights of sophistication. Quantum computing is making strides, promising to revolutionize fields from cryptography to drug discovery. Meanwhile, sustainable technology is gaining traction, with innovations in renewable energy and eco-friendly materials leading the charge against climate change. The Internet of Things (IoT) is expanding, creating smarter homes and cities, while 5G networks are enabling faster, more reliable connections worldwide. As these technologies converge, we\'re witnessing a new era of digital transformation that promises to reshape industries and society at large.',
    url: 'https://technews.com/latest-tech-trends'
  },
  // Add more articles as needed
};

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

    if (!articles[article]) {
        return res.status(404).send('Article not found');
    }

    res.json(articles[article]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});