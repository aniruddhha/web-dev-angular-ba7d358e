const dbConfig = {
    host: 'your-database-host',
    port: 3306,
    database: 'your_database_name',
    user: 'your_username',
    password: 'your_password', // Use a secure storage mechanism!
    connectionLimit: 10, // Optional connection pool size
    queueLimit: 0, // Optional queue limit for pending connections
    waitForConnections: true, // Optional flag to wait for available connections
    charset: 'utf8mb4' // Optional character set encoding
};

console.log(dbConfig['host'])
console.log(dbConfig.host)

for (let k in dbConfig) {
    console.log(`key ${k}, value ${dbConfig[k]}`)
}

const arr = [ 'abc', 'pqr', 'lmn', 'xyz' ]

for( const el of arr ) {
    console.log(el) // actual element
}

for( const el in arr ) {
    console.log(el) // index
}