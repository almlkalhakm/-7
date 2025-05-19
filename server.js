const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi} = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100
});

    res.json({ reply: response.data.choices[0].text});
});

app.listen(3000, () => console.log("🚀 الخادم يعمل على http://localhost:3000"));
