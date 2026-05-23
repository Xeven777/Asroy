"use client";

import { useState, type ReactNode } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Heart,
  HandHeart,
  CheckCircle2,
  Send,
  Loader2,
  IndianRupee,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Tab = "donate" | "join";

interface GetInvolvedDialogProps {
  trigger: ReactNode;
  defaultTab?: Tab;
}

const fieldClass =
  "h-11 rounded-xl border-gray-200 bg-white focus-visible:ring-trust-green focus-visible:ring-2 focus-visible:border-trust-green";

const labelClass = "text-xs font-semibold text-trust-navy uppercase tracking-wide";

const donateAmounts = [500, 1000, 2500, 5000];

function SuccessState({
  title,
  message,
  onClose,
}: {
  title: string;
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center py-8 px-2">
      <div className="relative mb-5">
        <div className="absolute inset-0 rounded-full bg-trust-green/20 blur-2xl" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-trust-green to-trust-green-light shadow-lg shadow-trust-green/40">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-2xl font-extrabold text-trust-navy">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
        {message}
      </p>
      <Button onClick={onClose} className="mt-6" size="sm">
        Close
      </Button>
    </div>
  );
}

export function DonateForm({ onDone }: { onDone?: () => void }) {
  const [state, handleSubmit] = useForm("meedzeep");
  const [amount, setAmount] = useState<number | "">(1000);

  if (state.succeeded) {
    return (
      <SuccessState
        title="Thank you for your generosity!"
        message="Your contribution helps us bring education, healthcare, and hope to more lives. Our team will reach out shortly with next steps."
        onClose={() => onDone?.()}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label className={labelClass}>Choose an amount (₹)</Label>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {donateAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setAmount(amt)}
              className={`h-10 rounded-xl text-sm font-semibold transition-all active:scale-95 ${
                amount === amt
                  ? "bg-trust-green text-white shadow-md shadow-trust-green/30"
                  : "bg-trust-green-pale text-trust-navy hover:bg-trust-green/15"
              }`}
            >
              ₹{amt.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
        <div className="relative mt-2">
          <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="number"
            name="amount"
            min={1}
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Custom amount"
            className={`${fieldClass} pl-9`}
          />
        </div>
        <ValidationError
          prefix="Amount"
          field="amount"
          errors={state.errors}
          className="mt-1 text-xs text-red-500"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="donate-name" className={labelClass}>
            Full name
          </Label>
          <Input
            id="donate-name"
            name="name"
            required
            placeholder="Your name"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <Label htmlFor="donate-phone" className={labelClass}>
            Phone
          </Label>
          <Input
            id="donate-phone"
            name="phone"
            type="tel"
            placeholder="+91 ..."
            className={`${fieldClass} mt-2`}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="donate-email" className={labelClass}>
          Email
        </Label>
        <Input
          id="donate-email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className={`${fieldClass} mt-2`}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-xs text-red-500"
        />
      </div>

      <div>
        <Label htmlFor="donate-message" className={labelClass}>
          Message <span className="font-normal text-gray-400 normal-case">(optional)</span>
        </Label>
        <Textarea
          id="donate-message"
          name="message"
          rows={3}
          placeholder="Anything you'd like us to know..."
          className="mt-2 rounded-xl border-gray-200 bg-white focus-visible:ring-trust-green focus-visible:ring-2 focus-visible:border-trust-green"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-xs text-red-500"
        />
      </div>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        disabled={state.submitting}
        className="mt-2 w-full"
      >
        {state.submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Heart className="h-4 w-4 fill-white stroke-0" />
            Pledge to donate
          </>
        )}
      </Button>
      <p className="text-center text-[11px] leading-relaxed text-gray-500">
        We&apos;ll reach out with payment details. 80G receipts available.
      </p>
    </form>
  );
}

export function JoinForm({ onDone }: { onDone?: () => void }) {
  const [state, handleSubmit] = useForm("mvzyqzzj");

  if (state.succeeded) {
    return (
      <SuccessState
        title="Welcome to the Asroy family!"
        message="Thanks for stepping forward. A volunteer coordinator will be in touch with you very soon."
        onClose={() => onDone?.()}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="join-name" className={labelClass}>
            Full name
          </Label>
          <Input
            id="join-name"
            name="name"
            required
            placeholder="Your name"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <Label htmlFor="join-phone" className={labelClass}>
            Phone
          </Label>
          <Input
            id="join-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 ..."
            className={`${fieldClass} mt-2`}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="join-email" className={labelClass}>
            Email
          </Label>
          <Input
            id="join-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={`${fieldClass} mt-2`}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-xs text-red-500"
          />
        </div>
        <div>
          <Label htmlFor="join-city" className={labelClass}>
            City
          </Label>
          <Input
            id="join-city"
            name="city"
            placeholder="Where are you based?"
            className={`${fieldClass} mt-2`}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="join-interest" className={labelClass}>
          How would you like to help?
        </Label>
        <Input
          id="join-interest"
          name="interest"
          placeholder="e.g. Teaching, Healthcare, Events, Fundraising..."
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div>
        <Label htmlFor="join-message" className={labelClass}>
          Tell us about yourself
        </Label>
        <Textarea
          id="join-message"
          name="message"
          rows={3}
          placeholder="Skills, experience, availability..."
          className="mt-2 rounded-xl border-gray-200 bg-white focus-visible:ring-trust-green focus-visible:ring-2 focus-visible:border-trust-green"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-xs text-red-500"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={state.submitting}
        className="mt-2 w-full"
      >
        {state.submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit application
          </>
        )}
      </Button>
    </form>
  );
}

export default function GetInvolvedDialog({
  trigger,
  defaultTab = "donate",
}: GetInvolvedDialogProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>(defaultTab);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (o) setTab(defaultTab);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-3xl border-0 shadow-2xl shadow-trust-navy/20 max-h-[90vh] overflow-y-auto">
        {/* Decorative header */}
        <div className="relative bg-linear-to-br from-trust-navy via-trust-navy to-trust-navy-dark px-6 pt-7 pb-16 text-white">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute -top-12 -left-10 w-48 h-48 bg-trust-green/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-trust-green-light/20 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur-sm">
              <HandHeart className="h-3.5 w-3.5 text-trust-green-light" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-trust-green-light">
                Get Involved
              </span>
            </div>
            <DialogHeader className="mt-3 text-left">
              <DialogTitle className="text-2xl font-extrabold leading-tight text-white">
                Stand with us in changing lives
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-white/70">
                Donate to support our mission, or volunteer your time and
                skills — every action matters.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Content */}
        <div className="relative -mt-10 px-5 pb-6 sm:px-7">
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as Tab)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 h-12 rounded-2xl bg-white p-1 shadow-lg shadow-trust-navy/10 ring-1 ring-gray-100">
              <TabsTrigger
                value="donate"
                className="rounded-xl h-full data-[state=active]:bg-trust-green data-[state=active]:text-white data-[state=active]:shadow-md text-trust-navy font-semibold gap-2"
              >
                <Heart className="h-4 w-4" />
                Donate
              </TabsTrigger>
              <TabsTrigger
                value="join"
                className="rounded-xl h-full data-[state=active]:bg-trust-navy data-[state=active]:text-white data-[state=active]:shadow-md text-trust-navy font-semibold gap-2"
              >
                <HandHeart className="h-4 w-4" />
                Join Us
              </TabsTrigger>
            </TabsList>

            <TabsContent value="donate" className="mt-5">
              <DonateForm onDone={() => setOpen(false)} />
            </TabsContent>
            <TabsContent value="join" className="mt-5">
              <JoinForm onDone={() => setOpen(false)} />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
