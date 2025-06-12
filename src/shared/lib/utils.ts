import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Extracts the client's IP address from the request headers
 * @param request Next.js request object
 * @returns The client's IP address or 'unknown' if not found
 */
export function getIP(request: Request): string {
  // Get the IP from the X-Forwarded-For header
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }

  // Get the IP from the X-Real-IP header
  const xRealIP = request.headers.get('x-real-ip');
  if (xRealIP) {
    return xRealIP.trim();
  }

  // For local development or if headers are not set
  return 'unknown';
}
