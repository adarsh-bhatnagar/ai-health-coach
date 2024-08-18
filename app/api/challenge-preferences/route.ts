// import { ChallengePreferences } from '@prisma/client';
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prismadb } from '@/lib/prismadb';

export async function POST(request: Request){
    const user = await currentUser();

    if(!user){
        return NextResponse.json({
            success: false,
            message: "unauthorized",
            status: 401
        });
    }

    const {id, sendNotifications, challengeId} = await request.json();

    if(!id || !challengeId || sendNotifications === undefined){
        return NextResponse.json({
            success: false,
            message: "Incomplete fields",
            status: 400
        })
    };

    try {
        
        const updatedChallengePreferences = await prismadb.challengePreferences.update({
            where: {
                id: id,
                userId: user.id
            },
            data: {
                sendNotifications,
                challengeId
            }
        })
    
        return NextResponse.json({
            success: true,
            data: updatedChallengePreferences
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
            status: 500
        })
    }

}