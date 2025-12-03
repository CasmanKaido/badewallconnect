/**
 * Validate email address
 * @param email - Email to validate
 * @returns True if valid email
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate URL
 * @param url - URL to validate
 * @returns True if valid URL
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Validate minimum length
 * @param value - Value to validate
 * @param minLength - Minimum length required
 * @returns True if meets minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
}

/**
 * Validate required field
 * @param value - Value to validate
 * @returns True if not empty
 */
export function isRequired(value: string): boolean {
    return value.trim().length > 0;
}
