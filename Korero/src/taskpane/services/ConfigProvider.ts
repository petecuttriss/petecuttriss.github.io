import IConfigProvider from './IConfigProvider';

export default class ConfigProvider implements IConfigProvider {
    public getConfig(): any {
        var config = {
            isFirstRun: true
        };

        config.isFirstRun = Office.context.roamingSettings.get('isFirstRun');

        return config;
    }

    public setConfig(config: any, callback: any): void {
        Office.context.roamingSettings.set('isFirstRun', config.isFirstRun);
        Office.context.roamingSettings.saveAsync(callback);
    }
}
