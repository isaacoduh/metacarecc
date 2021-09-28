const env = process.env;

const config = {
    // db: {
    //     host: env.DB_HOST || "sql4.freesqldatabase.com",
    //     user: env.DB_USER || 'sql4440369',
    //     password: env.DB_PASSWORD || 'S8Z7bdasxA',
    //     database: env.DB_NAME || 'sql4440369',
    // },
    db: {
        host: "us-cdbr-east-04.cleardb.com",
        user: "b8cd28b130d34c",
        password: "cb7863c2",
        database: "heroku_f8cab3ca6f38d74",
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;