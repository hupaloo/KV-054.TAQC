class Department{
    constructor(manager_list = {}){
        this._manager_list = manager_list;
    }
    giveSalary(){
        for (let i = 0; i < this._manager_list.length; i++){
            this.manager_list[i].salaryGet();
            for (let j = 0; j < this._manager_list[i]._dev_team.length; j++){
                this.manager_list[i]._dev_team[j].salaryGet();
            }
            for (let j = 0; j < this._manager_list[i]._design_team.length; j++){
                this.manager_list[i]._design_team[j].salaryGet();
            }
        }
    }
    get manager_list(){ return this._manager_list; }
    set manager_list(val){ this._manager_list = val; }
}

class Employee{
    constructor(fname, sname, salary, experiance){
        this._name = fname;
        this._surname = sname;
        this._salary = salary;
        this._experiance = experiance;
    }

    get name(){ return this._name; }
    get surname(){ return this._surname; }
    get salary(){ return this._salary; }
    get experiance(){ return this._experiance; }

    set name(val){ this._name = val; }
    set surname(val){ this._surname = val; }
    set salary(val){ this._salary = val; }
    set experiance(val){ this._experiance = val; }

    salaryGet(){
        if (this._experiance > 5){
            this._salary = this._salary * 1.2 + 500;
        }
        if ((this._experiance > 2) && (this._experiance < 5)){
            this._salary += 200;
        }
    }
}

class Developer extends Employee{
    constructor(fname, sname, salary, experiance, manager){
        super(fname, sname, salary, experiance);
        this._manager = manager;
    }

    get manager(){ return this._manager; }
    set manager(val){ this._manager = val; }

    salaryGet(){
        super.salaryGet();
        console.log(this._name + " " + this._surname + " got salary " + this._salary);
    }
}

class Designer extends Employee{
    constructor(fname, sname, salary, experiance, manager, efectivness){
        super(fname, sname, salary, experiance);
        this._manager = manager;
        this._efectivness = efectivness;
    }

    get efectivness(){ return this._efectivness; }
    get manager(){ return this._manager; }
    set manager(val){ this._manager = val; }
    set efectivness(val){ this._efectivness = val; }

    salaryGet(){
        super.salaryGet();
        console.log(this._name + " " + this._surname + " got salary " + (this._salary * this._efectivness));
    }
}

class Manager extends Employee{
    constructor(fname, sname, salary, experiance, dev_team = [], design_team = []){
        super(fname, sname, salary, experiance);
        this._dev_team = dev_team;
        this._design_team = design_team;
        for (let i = 0; i < this.dev_team.length; i++) {
            this._dev_team[i]._manager = fname;
        }
        for (let i = 0; i < this._design_team.length; i++) {
            this._design_team[i]._manager = fname;
        }
    }

    get dev_team(){ return this._dev_team; }
    get design_team() { return this._design_team; }
    set dev_team(val){ this._dev_team = val; }
    set design_team(val){ this._design_team = val; }

    salaryGet(){
        super.salaryGet();
        let workers = this._dev_team.length + this._design_team.length;
        if ((workers > 5) && (workers < 10)){
            this._salary += 200;
        }
        if (workers > 10){
            this._salary += 300;
        }
        if (this._dev_team.length > (workers / 2)){
            this._salary *= 1.1;
        }
        console.log(this._name + " " + this._surname + " got salary " + this._salary);
    }
}

let dev1 = new Developer("Diana", "Shevaha", 2000, 2.1, "");
let dev2 = new Developer("Valya", "Haraschenko", 1500, 1.5, "");
let dev3 = new Developer("Sofia", "Efremova", 700, 0.6, "");
let dev4 = new Developer("Eugen", "Samolovov", 4300, 4, "");

let des1 = new Designer("Katya", "Sazonova", 10000, 15, "", 1.1);
let des2 = new Designer("Bohdan", "Mazuta", 3200, 4.1, "", 1.2);
let des3 = new Designer("Artur", "Ladik", 500, 0.2, "", 1.3);
let des4 = new Designer("Viktor", "Nikitin", 1200, 1.3, "", 1.4);

let manager1 = new Manager("Kyrylo", "Piharev", 2000, 0.5, [dev1, dev2], [des1, des2]);
let manager2 = new Manager("Olha", "Repan", 5000, 5.4, [dev3, dev4], [des3, des4]);

let department1 = new Department([manager1, manager2]);

department1.giveSalary();

console.log("\nManager of the first developer: " + dev1.manager);
