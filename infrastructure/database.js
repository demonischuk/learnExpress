const mssql = require("mssql");

const config = {
    user: "sa",
    password: "Midna#word1",
    server: "DEMONISCH-SPECT\\DEMONISCH",
    database: "demonisch",
    options: {
        encrypt: true
    }
};

const DatabaseManager = (() => {
    const pool = mssql.connect(config);

    const runQuery = (sql, params) => {
        return pool.then(p => {
            let request = p.request();

            if (typeof params === "object") {
                for(a in params) {
                    request = request.input(a, params[a]);
                }
            } else if (Array.isArray(params)) {
                params.forEach(param => {
                    request = request.input(param.key, param.value);
                });
            }

            return request.query(sql);
        });
    };

    return {
        query: runQuery
    }
})();

module.exports = DatabaseManager;