import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/admin?gssapiServiceName=mongodb", { useUnifiedTopology: true })
        .then(conn => console.log('Database connected'))
        .catch(err => console.log(err))
    }
    catch {
        console.log('Error');
    }
}