import mongoose from 'mongoose';
import 'dotenv/config';
const mongoDbUrl = 'mongodb://localhost:27017/nerdivia_db';
const connectToDatabase = async (
	mongoDatabaseURI = mongoDbUrl,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
