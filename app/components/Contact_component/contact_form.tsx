import React from 'react';
import { useForm } from 'react-hook-form';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data:any) => {
        try {
            // Submit form data to Supabase
            const { data: entry, error } = await supabase
                .from('entries')
                .insert([
                    {
                        name: data.name,
                        email: data.email,
                        "number": data.number,
                        message: data.message
                    }
                ]);
            if (error) {
                throw error;
            }
            console.log('Form submitted successfully:', entry);
            // Reset the form after successful submission
            reset();
            // Show system notification
            showNotification('Form submitted successfully!', 'success');
        } catch (error:any) {
            console.error('Error submitting form:', error.message);
            // Handle error - display an error message to the user
            // You can use any UI component library for this purpose or create your own.
            // For example, you can show a toast message or an alert.
            alert('Error submitting form. Please try again later.');
        }
    };

    const showNotification = (message:any, type:any) => {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            new Notification(message);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-12 xs:text-lg text-base sm:text-xl font-medium leading-relaxed text-start font-sans'>
            Hello! my name is <input 
            type="text" 
            placeholder="Your Name" 
            {...register("name", { required: true })} 
            className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b bg-transparent focus:border-crimson'
            />
            and I want to discuss a potential project. You can email me at <input 
            type="email" 
            placeholder="Your @email" {...register("email", { required: true })} 
            className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b bg-transparent focus:border-crimson'
            />
            or reach out to me on<input 
            type="tel" 
            placeholder="Your Phone number" 
            {...register("number", { required: true })} 
            className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b bg-transparent focus:border-crimson'
            />
            Here are some details about my project:<br/>
            <textarea {...register("message")} 
            placeholder='My project is about...'
            rows={3}
            className='w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b bg-transparent focus:border-crimson'
            />

            <input type="submit" value="Send Request" 
            className='mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 px-6 sm:px-8 border-2 border-solid cursor-pointer'/>
        </form>
    );
}
