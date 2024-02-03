async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;
    
    const req1 = getJSON(url);
    const req2 = getJSON(backupUrl);
    
    const res = await Promise.race([req1, req2]);
    return res;
}
async function gougleSearch(q) {
    const timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );
    
    const [web, image, video] = await Promise.all([
        queryServers('web', q),
        queryServers('image', q),
        queryServers('video', q)
    ]);
    
    const res = await Promise.race([timeout, Promise.resolve({ web, image, video })]);
    
    if (res instanceof Error) {
        throw res;
    }
    
    return res;
}