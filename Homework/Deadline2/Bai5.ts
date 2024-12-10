// Bài Tập 5: Quản lý nhân viên 
// Tạo lớp Employee với các thuộc tính: name, position, salary. 
// Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails(). 
// Tạo danh sách nhân viên và in thông tin chi tiết.

class Employee {
    name: string;
    position: string;
    salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, \n Position: ${this.position},\n Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Manager", salary);
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Developer", salary);
    }
}




const employees: Employee[] = [
    new Manager("ntp", 10000),
    new Developer("nguyenthanhphuoc", 2000),
    new Developer("thanhphuoc", 99999)
];

employees.forEach(employee => {
    console.log(employee.getDetails());
});