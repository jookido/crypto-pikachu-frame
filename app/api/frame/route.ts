import { NextResponse } from "next/server";

const IMAGE_1 =
  "https://placehold.co/600x400/png?text=Crypto+Pikachu+Game";
const IMAGE_2 =
  "https://placehold.co/600x400/png?text=You+Clicked+Play!";

export async function GET() {
  return NextResponse.json({
    frames: [
      {
        image: IMAGE_1,
        buttons: [
          {
            label: "▶️ Play"
          }
        ],
        post_url: "/api/frame"
      }
    ]
  });
}

export async function POST(req: Request) {
  return NextResponse.json({
    frames: [
      {
        image: IMAGE_2,
        buttons: [
          {
            label: "🔁 Restart"
          }
        ],
        post_url: "/api/frame"
      }
    ]
  });
}
