// 提炼函数(无局部变量)
// 传入客户账单，打印出客户的欠款信息
function printOwing(invoice) {
    // 声明变量，未支付金额
    let outstanding = 0;

    printBanner();

    // 计算未支付金额
    for(const o of invoice.orders) {
        outstanding += o.amount;
    }

    // 设置到期日
    const today = Clock.today;
    invoice.dueDate = new Date(
        today.getFullYear(), 
        today.getMonth(), 
        today.getDate() + 30);

    printDetails();

    function printDetails() {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }
}

function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}