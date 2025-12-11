import Note from "../models/Note.js"

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    }catch(error){
        console.error("error in getAllNotes",error)
        res.status(500).json({message:"internal server error"})

    }
};

export async function createNotes(req,res){
    try {
        const{name,password} = req.body
        const newNote = new Note({name,password})
        await newNote.save()
        res.status(201).json({message:"saved successfully"})
    } catch (error) {
        console.error("error in createNotes",error)
        res.status(500).json({message:"internal server error"})
    }
}