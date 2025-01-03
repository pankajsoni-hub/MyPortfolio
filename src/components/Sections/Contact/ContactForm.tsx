import axios from 'axios';
import {FC, memo, useCallback, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const [formData, setFormData] = useState<FormData>({name: '', email: '', message: ''});

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = event.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        console.log('Form data to send:', formData);

        const response = await axios.post('https://my-portfolio-gray-zeta-14.vercel.app/api/contact', formData, {
          headers: {'Content-Type': 'application/json'},
        });

        if (response.status === 200) {
          alert('Message sent successfully!');
          setFormData({name: '', email: '', message: ''}); // Reset form after submission
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error: unknown) {
        // Check if the error is an AxiosError
        if (axios.isAxiosError(error)) {
          console.error('Error sending message:', error);
          const status = error.response?.status;
          alert(
            `An error occurred while sending your message. ${
              status ? `Server responded with status ${status}.` : 'Please try again later.'
            }`,
          );
        } else {
          // Handle non-Axios errors
          console.error('Unexpected error:', error);
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    },
    [formData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const buttonClasses =
    'w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800';

  return (
    <form className="grid gap-y-4" onSubmit={handleSubmit}>
      <input
        className={inputClasses}
        name="name"
        onChange={handleChange}
        placeholder="Name"
        required
        type="text"
        value={formData.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
        type="email"
        value={formData.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={handleChange}
        placeholder="Message"
        required
        rows={6}
        value={formData.message}
      />
      <button aria-label="Submit contact form" className={buttonClasses} type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
