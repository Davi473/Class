class Table {

    constructor(id="") {
        this.element = document.createElement("table");
        if (id==="") {} else {this.element.id = id};
    };
};