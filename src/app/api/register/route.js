import { connectDB } from "../../../lib/connectDB";
import Student from "../../../models/Students";
export async function POST(req){
    try{
    const { name, email, mobileNo, collegeName, enrollment, branch, year } = await req.json();

 
    if (!name || !email || !mobileNo || !collegeName || !year || !enrollment || !branch) {
        return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    try { 
        await connectDB(); 
        console.log("Connected to the database");
    
    } catch (error) {
        return new Response(JSON.stringify({ error: "Database connection failed" }), { status: 500 });
    }
       const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return new Response(JSON.stringify({ error: "Email already registered" }), { status: 409 });
        }
    // Create a new student record
    const newStudent = new Student({
        name,
        email,
        mobileNo,
        collegeName,
        branch,
        enrollment,
        year,
    });

        await newStudent.save();
        return new Response(JSON.stringify({ message: "Student registered successfully" }), { status: 201 });
    } catch (error) {
        console.error("Error registering student:", error);
        return new Response(JSON.stringify({ error: "Failed to register student" }), { status: 500 });
    }
}