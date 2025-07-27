import { userService } from '@/src/services/user/user';
import { ucCreateUser, ucGetAllUsers } from '@/src/usecase/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
   const users = await ucGetAllUsers(userService);
   return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
   const body = await req.json();
   const user = await ucCreateUser(userService, body);
   return NextResponse.json(user);
}
