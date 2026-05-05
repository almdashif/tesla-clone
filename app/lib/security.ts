import { NextResponse } from "next/server";

// ✅ Preserve generic type
export function applySecurityHeaders<T>(res: NextResponse<T>): NextResponse<T> {
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-XSS-Protection", "1; mode=block");
  res.headers.set("Referrer-Policy", "no-referrer");
  return res;
}

// ✅ Preserve generic type
export function applyCORS<T>(req: Request, res: NextResponse<T>): NextResponse<T> {
  const origin = req.headers.get("origin") || "*";

  res.headers.set("Access-Control-Allow-Origin", origin);
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return res;
}

const rateLimitMap = new Map<string, { count: number; time: number }>();

export function rateLimit(ip: string, limit = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const user = rateLimitMap.get(ip) || { count: 0, time: now };

  if (now - user.time > windowMs) {
    user.count = 1;
    user.time = now;
  } else {
    user.count += 1;
  }

  rateLimitMap.set(ip, user);

  return user.count <= limit;
}