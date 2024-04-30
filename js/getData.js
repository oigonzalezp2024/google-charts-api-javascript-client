
export class GetData{

    constructor(config) {
        this.config = config
        this.data = this.config.data;
        this.options = this.config.options;
        this.columns = this.config.columns;
    }

    getData()
    {
        const data = this.data;
        return data;
    }

    getOptions()
    {
        const options = this.options;
        return options;
    }

    getColumn()
    {
        const columns = this.columns;
        return columns;
    }    
}
