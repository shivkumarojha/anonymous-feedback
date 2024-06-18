import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

// Connect db
async function dbConnect(): Promise<void> {
    // Check if database connection exists
    if (connection.isConnected) {
        console.log("Database is already connected")
        return
    }
    try {
        // Connect to database
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("Database connected Successfully")
    } catch (error) {
        console.log("Database connection failed")
        process.exit(1)
    }
}

export default dbConnect