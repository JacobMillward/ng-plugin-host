import { Url } from 'url';

export interface PluginManifest {
    id: string;
    name: string;
    selector: string;
    url: Url;
}
