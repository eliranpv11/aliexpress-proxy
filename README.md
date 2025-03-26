
# AliExpress Proxy

🎯 **Purpose:**  
A simple Node.js proxy server that follows affiliate (redirect) links from AliExpress, Amazon, Temu, and others, and fetches the final product page HTML.

🔧 **Use Case:**  
This is used primarily for Chrome extensions or frontend apps that need to scrape product information (like title, price, rating) but can't fetch directly due to CORS restrictions.

---

## 🚀 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Test the endpoint**:
   ```
   http://localhost:3000/fetch-product?url=https://s.click.aliexpress.com/e/_DkoCjZd
   ```

---

## 📦 API Endpoint

### `GET /fetch-product`

**Query Param:** `url` — Any affiliate or product URL  
**Returns:** JSON object with:
```json
{
  "finalUrl": "https://...product-page",
  "html": "<!doctype html>...."
}
```

---

## 🌐 Deploy Easily

You can deploy this to:

- [Render.com](https://render.com/)
- [Glitch.com](https://glitch.com/)
- [Heroku](https://heroku.com/)

Just make sure the **start script** is `"npm start"` and the port listens to `process.env.PORT`.

---

## 🔒 Note

- This project **does not bypass** login-only pages or captchas.
- For long-term use, consider rotating User-Agents or using headless browsers.

---

Built with ❤️ by Eliran.
