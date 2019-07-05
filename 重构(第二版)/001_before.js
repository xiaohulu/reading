// 传入客户账单，打印客户欠款信息
function printOwing(invoice) {
    // 声明变量，未支付金额
    let outstanding = 0;

    // 打印横幅
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");

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

    // 打印详情
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}