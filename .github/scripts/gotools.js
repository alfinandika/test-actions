const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function goTool(file) {
    const { stdout } = await exec(
        `go tool cover -func ${file} | grep -w total | awk '{print $3}'`
    );

    console.log(`${file} Code Coverage:`, stdout);
    return stdout;
}

module.exports = async ({ file }) => {
    return await goTool(file);
};
