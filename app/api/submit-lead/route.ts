import { NextResponse } from 'next/server';
import { submitLead } from '@/app/actions/leads';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await submitLead(data);
    
    if (result.success) {
      return NextResponse.json({ success: true, id: result.id });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('API submission error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
