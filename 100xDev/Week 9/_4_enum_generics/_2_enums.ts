const app = express();

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

app.get("/", (req, res) => {
    if(!req.query.userId) {
        res.status(ResponseStatus.NotFound).json({});
    }
    else {
        res.status(parseInt(req.query.status)).send("Not Found");
    }
})