const mongoose = require("mongoose");
const Document = require("./Document");

mongoose.connect('mongodb://localhost:27017/syncpaper', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const defaultValue = "";
io.on("connection", (socket) => {

    socket.on("get-document", async(documentId) => {
        const document = await findOrCreateDocument(documentId)
        socket.join(documentId)
        socket.emit("load-document", document.data)
        
        socket.on("send-changes", (delta) => {
            socket.broadcast.to(documentId).emit("receive-changes", delta)
        })
        socket.on("save-document", async (data, callback) => {
            try {
                await Document.findByIdAndUpdate(documentId, { data })
                callback && callback(null) // Signal success
            } catch (err) {
                console.error('Save error:', err)
                callback && callback(err) // Signal error
            }
        })
    })
});

async function findOrCreateDocument(id) {
    if(id == null) return;
    
    try {
        const document = await Document.findById(id);
        if(document) return document;
        return await Document.create({ _id: id, data: defaultValue });
    } catch (err) {
        console.error('Document creation error:', err)
        throw err;
    }
}