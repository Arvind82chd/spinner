const cursor = ['|', '/', '-', '\\', '|'];
for (let i = 0; i < cursor.length; i++){
    setTimeout(() => {
        process.stdout.write(`\r${cursor[i]}       `);
    }, (i * 200 + 100))
} 

