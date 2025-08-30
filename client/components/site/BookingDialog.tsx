import { ReactNode, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export type ServiceItem = {
  id: string;
  name: string;
  duration: number; // minutes
  price: number; // INR
  category: string;
};

const ALL_SERVICES: ServiceItem[] = [
  { id: "bridal-makeup", name: "Bridal Makeup", duration: 120, price: 12000, category: "Makeup" },
  { id: "party-makeup", name: "Party Makeup", duration: 60, price: 3500, category: "Makeup" },
  { id: "hair-styling", name: "Hair Styling", duration: 45, price: 1500, category: "Hair" },
  { id: "hair-color", name: "Hair Color", duration: 90, price: 3000, category: "Hair" },
  { id: "skincare-facial", name: "Skincare Facial", duration: 50, price: 1800, category: "Skincare" },
  { id: "manicure", name: "Manicure", duration: 40, price: 900, category: "Nails" },
];

const TIME_SLOTS = [
  "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
];

export const BookingDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { register, handleSubmit, watch, reset } = useForm<{ name: string; email: string; phone: string; services: string[] }>(
    { defaultValues: { name: "", email: "", phone: "", services: [] } },
  );
  const selectedServiceIds = watch("services");

  const totalPrice = useMemo(() => {
    return selectedServiceIds?.reduce((sum, id) => sum + (ALL_SERVICES.find(s => s.id === id)?.price ?? 0), 0) ?? 0;
  }, [selectedServiceIds]);

  const onSubmit = handleSubmit((values) => {
    if (!selectedDate || !selectedTime || !values.services?.length) {
      toast.error("Please select date, time and at least one service");
      return;
    }
    const appointment = {
      id: `${Date.now()}`,
      user: { name: values.name, email: values.email, phone: values.phone },
      services: values.services.map(id => ALL_SERVICES.find(s => s.id === id)),
      date: selectedDate.toISOString(),
      time: selectedTime,
      status: "confirmed",
    };
    const storageKey = "sweta-appointments";
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    existing.push(appointment);
    localStorage.setItem(storageKey, JSON.stringify(existing));
    toast.success("Appointment booked! You'll receive a confirmation email after connecting email service.");
    setOpen(false);
    reset();
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Select services, date and time. Sign in to pre-fill details later.
          </DialogDescription>
        </DialogHeader>
        <form className="grid md:grid-cols-2 gap-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-2 block">Full Name</label>
              <input {...register("name")} required className="w-full rounded-md bg-muted/40 px-3 py-2 border" placeholder="Your name" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <input type="email" {...register("email")} required className="w-full rounded-md bg-muted/40 px-3 py-2 border" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm mb-2 block">Phone</label>
                <input type="tel" {...register("phone")} required className="w-full rounded-md bg-muted/40 px-3 py-2 border" placeholder="+91" />
              </div>
            </div>
            <div>
              <label className="text-sm mb-2 block">Services</label>
              <div className="max-h-40 overflow-auto pr-2 space-y-2">
                {ALL_SERVICES.map((s) => (
                  <label key={s.id} className="flex items-center justify-between gap-3 rounded-md border p-2 hover:bg-muted/30">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" value={s.id} {...register("services")} className="accent-[hsl(var(--primary))]" />
                      <span>{s.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{s.duration}m • ₹{s.price}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                <span>Selected: {selectedServiceIds?.length ?? 0}</span>
                <span>Total: ₹{totalPrice}</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-md border p-3">
              <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} disabled={{ before: new Date() }} />
              <div className="text-xs text-muted-foreground px-1">{selectedDate ? `Selected: ${format(selectedDate, 'PP')}` : 'Pick a date'}</div>
            </div>
            <div>
              <label className="text-sm mb-2 block">Time</label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-md border px-3 py-2 text-sm hover:bg-muted/40 ${selectedTime===t ? 'bg-primary text-primary-foreground border-primary' : ''}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Duration auto-calculated based on selected services.
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
                Confirm Booking
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
