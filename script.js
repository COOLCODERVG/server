addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === "OPTIONS") {
    // Handle CORS preflight requests
    return new Response(null, {
      status: 204,
      headers: getCorsHeaders(),
    });
  }

  try {
    const data = await request.json();
    // Process the request here...

    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: getCorsHeaders(),
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: getCorsHeaders(),
    });
  }
}

// Function to generate CORS headers
function getCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // Allow all origins (for development)
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
