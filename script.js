export default {
  async fetch(request) {
    const url = "https://api.clarifai.com/v2/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs";
    const apiKey = "c74e79d837364c028103ab7d998a86a0"; // Replace with your actual Clarifai API key

    const body = await request.text();
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Key ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: body
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*", // ✅ Fixes CORS
        "Content-Type": "application/json"
      }
    });
  }
};
