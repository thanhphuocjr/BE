// Bài Tập 5: Quản lý nhân viên 
// Tạo lớp Employee với các thuộc tính: name, position, salary. 
// Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails(). 
// Tạo danh sách nhân viên và in thông tin chi tiết.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", \n Position: ").concat(this.position, ",\n Salary: ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, "Manager", salary) || this;
    }
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, "Developer", salary) || this;
    }
    return Developer;
}(Employee));
var employees = [
    new Manager("ntp", 10000),
    new Developer("nguyenthanhphuoc", 2000),
    new Developer("thanhphuoc", 99999)
];
employees.forEach(function (employee) {
    console.log(employee.getDetails());
});
