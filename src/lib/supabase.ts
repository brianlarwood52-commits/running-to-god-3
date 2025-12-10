const supabaseUrl = 'https://frmeuzfzlclipxwskaaw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZybWV1emZ6bGNsaXB4d3NrYWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNTM1ODUsImV4cCI6MjA4MDYyOTU4NX0.qIhDK2vuxPv2fXVurKBTvU6efeCsTDGAbQml_fnBic4';

export const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
};

export async function submitContact(data: {
  name: string;
  email: string;
  request_type: string;
  subject?: string;
  message: string;
}) {
  const response = await fetch(`${supabaseUrl}/functions/v1/submit-contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function submitPrayer(data: {
  name?: string | null;
  email?: string | null;
  is_anonymous: boolean;
  prayer_request: string;
  allow_sharing: boolean;
}) {
  const response = await fetch(`${supabaseUrl}/functions/v1/submit-prayer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(data)
  });

  return response.json();
}
