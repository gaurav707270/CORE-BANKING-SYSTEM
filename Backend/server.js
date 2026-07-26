//server start here
import app from "./app.js";
import mongosse from 'mongosse'

app.listen(3000, () => {
    console.log("Server running on port 3000");
});