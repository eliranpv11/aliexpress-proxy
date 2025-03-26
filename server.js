
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/fetch-product", async (req, res) => {
  const productUrl = req.query.url;

  if (!productUrl) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const redirected = await fetch(productUrl, {
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
      }
    });

    const finalUrl = redirected.url;
    const html = await redirected.text();

    res.json({ finalUrl, html });
  } catch (error) {
    console.error("שגיאה בשליפה:", error);
    res.status(500).json({ error: "שליפת המוצר נכשלה" });
  }
});

app.get("/", (req, res) => {
  res.send("✅ AliExpress Proxy is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
