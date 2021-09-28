const env = process.env;

const config = {
    // db: {
    //     host: env.DB_HOST || "sql4.freesqldatabase.com",
    //     user: env.DB_USER || 'sql4440369',
    //     password: env.DB_PASSWORD || 'S8Z7bdasxA',
    //     database: env.DB_NAME || 'sql4440369',
    // },
    db: {
        host: env.DB_HOST || "localhost",
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || 'root',
        database: env.DB_NAME || 'metacare',
        port: '8889'
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;