import { writeFileSync } from "fs"
import http from "http"
const hostname = "localhost"
const port = 5000
const isAuthorized = (headers) => {
    try {
        let credentials = Buffer.from(headers.authorization.split(" ")[1], "base64")
            .toString()
            .split(":")
        let authorizedUsers = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"]
        return (
            authorizedUsers.includes(credentials[0]) &&
            credentials[1] === "abracadabra"
        )
    } catch {
        return false
    }
}
let handler = (request, response) => {
    if (!isAuthorized(request.headers)) {
        response.writeHead(401, { "Content-Type": "application/json" })
        response.end(JSON.stringify({ error: "Unauthorized" }))
        return
    }
    const { headers, url } = request
    let filename = "./guests" + url + ".json"
    let body = []
    request
        .on("error", (err) => {
            console.log(err)
        })
        .on("data", (chunk) => {
            body.push(chunk)
        })
        .on("end", () => {
            body = Buffer.concat(body).toString()
            if (headers["body"]) {
                body = headers["body"]
            }
            try {
                writeFileSync(filename, body)
                response.writeHead(200, { "Content-Type": "application/json" })
                response.end(body)
            } catch {
                response.writeHead(500, { "Content-Type": "application/json" })
                response.end(JSON.stringify({ error: "server failed" }))
            }
        })
}
const server = http.createServer(handler)
server.listen(port, hostname, () => {
    console.log(`server running on port:${port}`)
})