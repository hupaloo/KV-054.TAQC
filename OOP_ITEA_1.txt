class Department{
    constructor(manager_list = {}){
        this._manager_list = manager_list;
    }

    get manager_list(){ return this._manager_list; }
    set manager_list(val){ this._manager_list = val; }
}

class Employee extends Department{
    constructor(manager_list, fname, sname, salary, experiance, manager){
        super(manager_list);
        this._name = fname;
        this._surname = sname;
        this._salary = salary;
        this._experiance = experiance;
        this._manager = manager;
    }

    get name(){ return this._name; }
    get surname(){ return this._surname; }
    get salary(){ return this._salary; }
    get experiance(){ return this._experiance; }
    get manager(){ return this._manager; }

    set name(val){ this._name = val; }
    set surname(val){ this._surname = val; }
    set salary(val){ this._salary = val; }
    set experiance(val){ this._experiance = val; }
    set manager(val){ this._manager = val; }

    salaryGet(){
        if (this._experiance > 5){
            this._salary = this._salary * 1.2 + 500;
        }
        if ((this._experiance > 2) && (this._experiance < 5)){
            this._salary += 200;
        }
    }
    salaryGetEmployee(){
        this.salaryGet();
        console.log(this._name + " " + this._surname + ", manager: " + this._manager + ", experiance: " + this._experiance);
    }
}

class Developer extends Employee{
    constructor(manager_list, fname, sname, salary, experiance, manager){
        super(manager_list, fname, sname, salary, experiance);
    }

    salaryGet(){
        super.salaryGet();
        console.log(this._name + " " + this._surname + " got salary " + this._salary);
    }
}

class Designer extends Employee{
    constructor(manager_list, fname, sname, salary, experiance, manager, efectivness){
        super(manager_list, fname, sname, salary, experiance);
        this._efectivness = efectivness;
    }

    get efectivness(){ return this._efectivness; }
    set efectivness(val){ this._efectivness = val; }

    salaryGet(){
        super.salaryGet();
        console.log(this._name + " " + this._surname + " got salary " + (this._salary * this._efectivness));
    }
}

class Manager extends Employee{
    constructor(manager_list, fname, sname, salary, experiance, manager, dev_team = [], design_team = []){
        super(manager_list, fname, sname, salary, experiance);
        this._dev_team = dev_team;
        this._design_team = design_team;
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

let manager1 = new Manager({"Kyrylo" : ["dev1", "dev2", "dev3"] + "," + ["des1", "des2", "des3", "des4"], "Oleksii" : "NaN", "Alina" : "NaN"}, "Kyrylo", "Piharev", 5000, 0.5, "none", ["dev1", "dev2", "dev3"], ["des1", "des2", "des3", "des4"]);
manager1.salaryGet();
//console.log(manager1.manager_list["Kyrylo"]);
let employee1 = new Employee({"Kyrylo" : ["dev1", "dev2", "dev3"] + "," + ["des1", "des2", "des3", "des4"], "Oleksii" : "NaN", "Alina" : "NaN"}, "Mykyta", "Hupalo", 500, 3, "Kyrylo");
employee1.salaryGetEmployee();