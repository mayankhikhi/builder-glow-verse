import { useEffect, useState } from "react";

export default function Dashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const storageKey = "sweta-appointments";
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    setAppointments(existing);
  }, []);

  return (
    <div className="container pt-28 pb-20 min-h-[60vh]">
      <h1 className="text-3xl font-semibold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Your Appointments</h1>
      {appointments.length === 0 ? (
        <p className="text-muted-foreground">No appointments yet. Book one from the homepage.</p>
      ) : (
        <div className="grid gap-4">
          {appointments.map((a) => (
            <div key={a.id} className="rounded-lg border bg-card p-4">
              <div className="font-medium">{a.services.map((s: any) => s?.name).filter(Boolean).join(', ')}</div>
              <div className="text-sm text-muted-foreground">{new Date(a.date).toLocaleDateString()} at {a.time}</div>
              <div className="text-xs text-muted-foreground mt-1 capitalize">Status: {a.status}</div>
            </div>
          ))}
        </div>
      )}
      <p className="text-xs text-muted-foreground mt-6">
        This is a local preview. Connect a database (Supabase/Neon) via MCP to persist and manage bookings.
      </p>
    </div>
  );
}
