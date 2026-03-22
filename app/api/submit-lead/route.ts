import { NextResponse } from 'next/server';
import { submitLead, submitSurvey } from '@/app/actions/leads';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    let result;
    if (data.formType === 'audit_survey' || data.form_type === 'audit') {
      result = await submitSurvey(data);
    } else {
      result = await submitLead(data);
    }
    
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
