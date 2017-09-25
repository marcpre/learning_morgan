function createDailyFileName(identifier) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // "+ 1" becouse the 1st month is 0
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()

    const seedatetime = day + '.' + month + '.' + year + '-' + hour + ':' + minutes + ':' + seconds;

    return identifier + "_" + seedatetime

}

module.exports = {
    createDailyFileName
}
