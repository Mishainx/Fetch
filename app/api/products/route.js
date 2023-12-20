import { NextResponse } from "next/server";

export const GET = async (request,{params}) =>{
    try{
            return NextResponse.json("macaco", { status: 200 });
    }
    catch(error){
        return NextResponse.error("Error al obtener producto.", { status: 500 })
    }
}