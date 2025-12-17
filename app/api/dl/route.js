// app/api/dl/route.js
import { NextResponse } from "next/server";

/**
 * Handles GET requests to the /api/dl route.
 * This route fetches data from a RapidAPI YouTube API endpoint.
 *
 * @param {Request} request The incoming Next.js request object.
 * @returns {NextResponse} A JSON response containing the API data or an error message.
 */
export async function GET(request) {
    // Extract search parameters from the request URL.
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Get the 'id' parameter (e.g., YouTube video ID)
    const cgeo = searchParams.get("cgeo") || "DE"; // Get the 'cgeo' parameter, default to "DE" if not provided.

    // Validate if the 'id' parameter is provided.
    if (!id) {
        // If 'id' is missing, return a 400 Bad Request error.
        return NextResponse.json({ error: "Missing `id`" }, { status: 400 });
    }

    // Construct the URL for the external RapidAPI endpoint.
    const url = new URL("https://yt-api.p.rapidapi.com/dl");
    url.searchParams.set("id", id);
    url.searchParams.set("cgeo", cgeo);

    // Retrieve the RapidAPI key from environment variables.
    const apiKey = process.env.RAPIDAPI_API_KEY;

    // Check if the API key is configured.
    if (!apiKey) {
        // If the API key is missing, return a 500 Internal Server Error.
        console.error("Server misconfiguration: RAPIDAPI_API_KEY is not set.");
        return NextResponse.json(
            { error: "Server misconfiguration: missing API key" },
            { status: 500 }
        );
    }

    try {
        // Make the fetch request to the external API.
        const response = await fetch(url.toString(), {
            headers: {
                "x-rapidapi-host": "yt-api.p.rapidapi.com",
                "x-rapidapi-key": apiKey,
            },
        });

        // Read the response body as text first. This is crucial for robust error handling,
        // as error responses might not always be valid JSON.
        const responseText = await response.text();

        // Check if the response was successful (status code 2xx).
        if (!response.ok) {
            // Log the raw text of the error response for debugging purposes.
            console.error(
                `RapidAPI error (${response.status}):`,
                responseText
            );

            // Attempt to parse the error response as JSON.
            try {
                const errorData = JSON.parse(responseText);
                // If parsing is successful, return the parsed error data with the original status.
                return NextResponse.json(errorData, { status: response.status });
            } catch (jsonError) {
                // If parsing fails, return a generic error message along with the raw response text
                // for detailed debugging.
                console.error("Failed to parse RapidAPI error response as JSON:", jsonError);
                return NextResponse.json(
                    { error: response.statusText || "External API error", details: responseText },
                    { status: response.status }
                );
            }
        }

        // If the response was successful, parse the text as JSON and return it.
        return NextResponse.json(JSON.parse(responseText));
    } catch (networkError) {
        // Catch any network-related errors during the fetch operation.
        console.error("Network or fetch error:", networkError);
        return NextResponse.json(
            { error: "Failed to connect to external API", details: networkError.message },
            { status: 500 }
        );
    }
}








//old code:

// export default async function handler(req, res) {
//     const { id, cgeo = "DE" } = req.query;
//     if (!id) return res.status(400).json({ error: "Missing `id`" });

//     const url = new URL("https://yt-api.p.rapidapi.com/dl");
//     url.searchParams.set("id", id);
//     url.searchParams.set("cgeo", cgeo);

//     const r = await fetch(url, {
//         headers: {
//             "x-rapidapi-host": "yt-api.p.rapidapi.com",
//             "x-rapidapi-key": process.env.RAPIDAPI_API_KEY,
//         },
//     });

//     if (!r.ok) {
//         const err = await r.json().catch(() => null);
//         return res.status(r.status).json(err || { error: r.statusText });
//     }

//     const data = await r.json();
//     res.status(200).json(data);
// }



// // app/api/dl/route.js
// import { NextResponse } from "next/server";

// export async function GET(request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");
//     const cgeo = searchParams.get("cgeo") || "DE";

//     if (!id) {
//         return NextResponse.json({ error: "Missing `id`" }, { status: 400 });
//     }

//     const url = new URL("https://yt-api.p.rapidapi.com/dl");
//     url.searchParams.set("id", id);
//     url.searchParams.set("cgeo", cgeo);

//     const apiKey = process.env.RAPIDAPI_API_KEY;
//     if (!apiKey) {
//         return NextResponse.json(
//             { error: "Server misconfiguration: missing API key" },
//             { status: 500 }
//         );
//     }

//     const r = await fetch(url.toString(), {
//         headers: {
//             "x-rapidapi-host": "yt-api.p.rapidapi.com",
//             "x-rapidapi-key": apiKey,
//         },
//     });

//     const text = await r.text();

//     if (!r.ok) {
//         // Log raw text so you see the exact error
//         console.error("RapidAPI error:", text);
//         // Try to return JSON if possible
//         try {
//             return NextResponse.json(JSON.parse(text), { status: r.status });
//         } catch {
//             return NextResponse.json(
//                 { error: r.statusText, details: text },
//                 { status: r.status }
//             );
//         }
//     }

//     // Success path—parse JSON
//     return NextResponse.json(JSON.parse(text));
// }

