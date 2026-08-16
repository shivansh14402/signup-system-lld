


export class Database {

    // this is a singleton class it will return an instance of db like sequelize so user can connect and apply CRUD operationss

    protected static databaseObj: Database;

    private constructor(){}

    static getDatabase(): Database {
        if(this.databaseObj) return this.databaseObj;

        this.databaseObj = new Database();
        return this.databaseObj;
    }

    executeQuery(query: string, data: any): boolean{

        //logic to execute query
        return true
    }

}