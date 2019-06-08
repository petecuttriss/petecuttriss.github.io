interface IConfigProvider {
    getConfig(): any;
    setConfig(config: any, callback:any): void;
}

export default IConfigProvider;