import { NextResponse } from "next/server";

export const GET = async (request,{params}) =>{


    try{
            return NextResponse.json("probando", { status: 200 });
    }
    catch(error){
        return NextResponse.json("Error al obtener producto.", { status: 500 })
    }
}