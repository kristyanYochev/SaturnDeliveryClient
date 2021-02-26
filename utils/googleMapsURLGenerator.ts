const gmapsBaseURL = 'https://google.com/maps';

export const generateGoogleMapsDirectionURL = (
    destinationAddress: string
): string => `${gmapsBaseURL}/dir/?api=1&destination=${destinationAddress}`;

export const generateGoogleMapsPointURL = (pointAddress: string): string =>
    `${gmapsBaseURL}/search/?api=1&query=${pointAddress}`;
