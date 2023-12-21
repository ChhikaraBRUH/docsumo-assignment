"use client";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import cn from "@/utils/cn";
import { LibreBaskerville } from "@/utils/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Volume1Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function ContactForm() {
  return (
    <div className="w-full bg-brand-dark pt-24">
      <div className="container mx-auto mb-16 flex flex-col items-center gap-8 md:flex-row md:gap-16">
        <div className="flex w-1/2 flex-col">
          <p
            className={cn(
              LibreBaskerville.className,
              "mb-2 text-3xl font-bold text-white md:text-5xl",
            )}
          >
            Ready to automate your data extraction?
          </p>
          <p
            className={cn(
              LibreBaskerville.className,
              "mb-8 text-3xl font-bold text-white md:text-5xl",
            )}
          >
            Let&apos;s talk.{" "}
            <Volume1Icon size={48} className="ml-2 inline-block" />
          </p>
          <p className="text-lg text-white">
            Docsumo&apos;s intelligent document processing enables you to
            extract data easily, efficiently, and accurately.
          </p>
          <p className="mb-16 text-lg text-white">
            <span className="bg-brand-blue">Fill up the form</span> to speak
            with an automation expert.
          </p>

          <Image
            src="/contactFormRatings.webp"
            width={500}
            height={100}
            alt=""
            className="h-auto max-w-[500px]"
          />
        </div>

        <FormComponent />
      </div>

      <Image src="/wave-bg.svg" width={1920} height={1080} alt="" />
    </div>
  );
}

function FormComponent() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const contactFormSchema = z.object({
    full_name: z.string().min(1, { message: "Full name is required" }),
    work_email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .refine(
        (value) => {
          const domain = value.split("@")[1];
          return !NON_WORK_EMAIL_DOMAINS.includes(domain);
        },
        { message: "Please use your work email" },
      ),
    phoner_number: z
      .string()
      .min(7, { message: "Phone number not in range" })
      .max(20, { message: "Phone number not in range" })
      .refine(
        (value) => {
          const number = Number(value);
          return !isNaN(number) && number >= 0;
        },
        { message: "Phone number must be a positive number" },
      ),
    company_name: z.string().min(1, { message: "Company name is required" }),
    job_title: z.string().min(1, { message: "Job title is required" }),
    no_of_docs: z
      .string()
      .min(1, { message: "Valid number of docs is required" })
      .refine(
        (value) => {
          const number = Number(value);
          return !isNaN(number) && number >= 0;
        },
        { message: "Number of docs must be a positive number" },
      ),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      full_name: "",
      work_email: "",
      phoner_number: "",
      company_name: "",
      job_title: "",
      no_of_docs: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setLoading(true);

    axios
      .post("/api/contact", values)
      .then((res) => {
        setSuccess(true);
        toast.success("Successfully sent your demo request!");
      })
      .catch((err) => {
        toast.error("Failed to send your demo request!", { duration: 8000 });
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (success) {
    return (
      <div className="w-1/2 rounded-md bg-white px-8 py-10">
        <p className="text-center text-3xl font-bold">
          Thank you for your interest!
        </p>
        <p className="text-center text-lg">
          We will get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-1/2 rounded-md bg-white px-8 py-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="work_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoner_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="number" min={0} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="job_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="no_of_docs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Docs</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="number" min={0} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            isLoading={loading}
            className="w-max self-center"
          >
            Schedule Demo
          </Button>
        </form>
      </Form>
    </div>
  );
}

const NON_WORK_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "zoho.com",
  "protonmail.com",
  "yandex.com",
  "mail.com",
  "gmx.com",
  "mail.ru",
  "inbox.com",
  "gmx.us",
  "gmx.de",
  "gmx.co.uk",
  "gmx.fr",
  "gmx.net",
  "gmx.at",
  "gmx.ch",
  "gmx.com",
  "gmx.com.mx",
  "gmx.es",
  "gmx.eu",
  "gmx.in",
  "gmx.it",
  "gmx.org",
  "gmx.us",
  "gmx.co.uk",
  "gmx.fr",
  "gmx.net",
  "gmx.at",
  "gmx.ch",
  "gmx.com",
];
