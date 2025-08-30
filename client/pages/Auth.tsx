import { Button } from "@/components/ui/button";
import { Mail, Lock, Chrome } from "lucide-react";

export default function Auth() {
  return (
    <div className="min-h-[60vh] container pt-28 pb-20">
      <div className="mx-auto max-w-md rounded-xl border bg-card p-8 shadow">
        <h1 className="text-3xl font-semibold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6">Access your appointments and profile.</p>
        <form className="space-y-4">
          <div>
            <label className="text-sm mb-2 block">Email</label>
            <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <input type="email" className="w-full bg-transparent py-2 outline-none" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <input type="password" className="w-full bg-transparent py-2 outline-none" placeholder="••••••••" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <a className="hover:text-primary" href="#">Forgot password?</a>
            <a className="hover:text-primary" href="#">Sign up</a>
          </div>
          <Button className="w-full bg-gradient-to-r from-primary to-secondary">Sign in</Button>
        </form>
        <div className="relative my-6 text-center text-xs text-muted-foreground">
          <span className="bg-card px-3 relative z-10">or</span>
          <div className="absolute left-0 right-0 top-1/2 -z-0 h-px bg-border" />
        </div>
        <Button variant="outline" className="w-full">
          <Chrome className="h-4 w-4 mr-2" /> Sign in with Google
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        To enable Google Sign-In and database-backed auth, connect Supabase via MCP.
      </p>
    </div>
  );
}
