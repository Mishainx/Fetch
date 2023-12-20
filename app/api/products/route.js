import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export const GET = async (request,{params}) =>{


    try{
            return NextResponse.json("macaco", { status: 200 });
    }
    catch(error){
        return NextResponse.json("Error al obtener producto.", { status: 500 })
    }
}