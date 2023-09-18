export default function getURL(code) {
    switch (code) {
        case 0:
            return "Clear Sky";
            break;
        case 1:
        case 2:
        case 3:
            return "Partly Cloudy";
            break;
        case 45:
        case 48:
            return "Fog";
            break;
        case 51:
        case 53:
        case 55:
            return "Drizzle";
            break;
        case 56:
        case 57:
            return "Freezing Drizzle";
            break;
        case 61:
        case 63:
        case 65:
            return "Rain";
            break;
        case 66:
        case 67:
            return "Freezing rain";
            break;
        case 71:
        case 73:
        case 75:
            return "Snow fall";
            break;
        case 77:
            return "Snow grains";
            break;
        case 80:
        case 81:
        case 82:
            return "Rain showers";
            break;
        case 85:
        case 86:
            return "Snow showers";
            break;
        default:
            return "";
    }
}