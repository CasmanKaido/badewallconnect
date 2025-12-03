/**
 * Format a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: USD)
 * @param locale - The locale to use for formatting (default: en-US)
 * @returns Formatted currency string
 */
export function formatCurrency(
    amount: number,
    currency: string = 'USD',
    locale: string = 'en-US'
): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
}

/**
 * Format ETH amount with proper decimals
 * @param amount - The amount in ETH
 * @param decimals - Number of decimal places (default: 4)
 * @returns Formatted ETH string
 */
export function formatEth(amount: number | string, decimals: number = 4): string {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    return `${num.toFixed(decimals)} ETH`;
}
