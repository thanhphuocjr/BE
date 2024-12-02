//Function


// Function Declaration
//Hàm truyền thống, có tính Hoisting, Có thể gọi trước trong code ngay cả khi chưa được khai báo
function greet0(name){
    return `Hello, ${name}`;
}



//Function Expression
// Không có tính hoisting phải khai báo trước khi gọi
const greet1 = function(name){
     return `Hello, ${name}`;
}

// ArrowFunction
// Phù hợp với các hàm không sử dụng từ khoá this
const greet2= (name) =>{
    return `Hello, ${name}`;
}















console.log(greet0('Phuoc'))