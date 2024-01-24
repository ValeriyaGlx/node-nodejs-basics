import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getDirectory = (url) => {
const __filename = fileURLToPath(url);
return dirname(__filename);
}
