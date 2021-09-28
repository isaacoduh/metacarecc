const env = process.env;

const config = {
    // db: {
    //     host: env.DB_HOST || "sql4.freesqldatabase.com",
    //     user: env.DB_USER || 'sql4440369',
    //     password: env.DB_PASSWORD || 'S8Z7bdasxA',
    //     database: env.DB_NAME || 'sql4440369',
    // },
    db: {
        host: env.DB_HOST || "",
        user: env.DB_USER || '',
        password: env.DB_PASSWORD || '',
        database: env.DB_NAME || '',
        port: env.DB_PORT || ''
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;