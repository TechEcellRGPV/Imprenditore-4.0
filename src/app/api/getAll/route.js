import { connectDB } from "../../../lib/connectDB";
import Student from "../../../models/Students";

export async function GET(req) {

    try {
        // Connect to the database
        await connectDB();
        console.log("Connected to the database");

        // Fetch all students from the database
        const students = await Student.find();

        // Return the students as a JSON response
        return new Response(JSON.stringify(students), { status: 200 });
    } catch (error) {
        console.error("Error fetching students:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch students" }), { status: 500 });
    }
}